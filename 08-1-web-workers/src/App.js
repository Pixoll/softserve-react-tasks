import "./App.css";
import { useState } from "react";

//Note: please, do dot change placeholder and data-testid attributes

function App() {
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState("");
    // const [worker, setWorker] = useState(null);

    const handleCalculate = () => {
        setResult(`Result: ${+inputValue * +inputValue}`);

        // if (worker) {
        //     worker.terminate();
        // }
        //
        // const newWorker = new Worker(`${process.env.PUBLIC_URL}/worker.js`);
        // setWorker(newWorker);
        //
        // setResult("Calculating...");
        // newWorker.postMessage(+inputValue);
        //
        // newWorker.onmessage = (e) => {
        //     setResult(`Result: ${e.data}`);
        //     newWorker.terminate();
        //     setWorker(null);
        // };
        //
        // newWorker.onerror = (err) => {
        //     console.error("Worker error:", err);
        //     setResult("An error occurred.");
        //     newWorker.terminate();
        //     setWorker(null);
        // };
    };

    /**
     * @param {React.ChangeEvent<HTMLInputElement>} e
     */
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="app">
            <h1>Fibonacci 🌀</h1>
            <input
                type="number"
                placeholder="Insert a number"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleCalculate} disabled={!inputValue.trim()}>Calculate</button>
            <div className="result" data-testid="result">
                {result}
            </div>
        </div>
    );
}

export default App;
