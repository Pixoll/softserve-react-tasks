const express = require("express");
const yargs = require("yargs");

const app = express();

const { i: interval, t: timeout } = yargs
    .option('i', {
        alias: 'interval',
        describe: 'console output recurrence interval (ms)',
        type: 'number',
        default: 100,
    })
    .option('t', {
        alias: 'timeout',
        describe: 'time (ms) after which the web client message will be displayed',
        type: 'number',
        default: 700,
    })
    .argv;

console.log(`interval: ${interval} timeout: ${timeout}`);

app.get("/", (req, res) => {
    const intervalId = setInterval(() => {
        const currentTime = new Date();
        console.log(currentTime);
    }, interval);

    setTimeout(() => {
        clearInterval(intervalId);
        const currentTime = new Date().toUTCString();
        res.send(`Зараз ${currentTime}.`);
    }, timeout);
});

const server = app.listen(3000);

module.exports = { app, server };
