import ChannelStatistics from "./ChannelStatistics";
import logo from "./logo.svg";

export default function Logo() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    You have created the next channels of reference:
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <ChannelStatistics/>
            </header>
        </div>
    );
}
