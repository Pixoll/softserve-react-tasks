onmessage = function (event) {
    const { data } = event;

    // const fibonacci = (n) => {
    //     let a = 0;
    //     let b = 1;
    //     while (n-- > 1) {
    //         let t = a;
    //         a = b;
    //         b += t;
    //     }
    //     return b;
    // };
    //
    // const result = fibonacci(data);
    postMessage(data * data);
};
