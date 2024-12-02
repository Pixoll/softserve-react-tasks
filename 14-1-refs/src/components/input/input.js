import { Component, createRef } from "react";
import "./input.css";

export default class InputComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            operator: 0,
            phone: '',
            operatorName: '',
            checkIcon: ' - ',
        };

        this.operatorRef = createRef();
        this.phoneRef = createRef();

        this.operatorCodes = {
            Kyivstar: new Set([67, 68, 96, 97, 98]),
            Vodafone: new Set([50, 66, 95, 99]),
            Lifecell: new Set([63, 73, 93]),
            "3mob": new Set([91]),
            "People.net": new Set([92]),
            intertelecom: new Set([89, 94]),
        };
    }

    handleOperatorInput = (event) => {
        const value = event.target.value.replace(/\D/g, "");
        this.setState({ operator: value });

        if (value.length === 2) {
            let operatorName = "Unknown";
            const number = +value;

            for (const name in this.operatorCodes) {
                if (this.operatorCodes[name].has(number)) {
                    operatorName = name;
                    break;
                }
            }

            this.setState({ operatorName });

            if (this.operatorRef.current) {
                this.phoneRef.current.focus();
            }
        }
    };

    handlePhoneInput = (event) => {
        const value = event.target.value.replace(/\D/g, "");
        this.setState({ phone: value });

        if (this.state.operator.length === 2 && value.length === 7) {
            this.setState({ checkIcon: "✔️" });
        } else {
            this.setState({ checkIcon: "-" });
        }
    };

    render() {
        return <div>
            <span data-testid="operator-name">{this.state.operatorName}</span>
            <span>+38 0</span>
            <input
                data-testid="operator-input"
                type="text"
                size={1}
                value={this.state.operator}
                onInput={this.handleOperatorInput}
                ref={this.operatorRef}
            />
            <span data-testid="check-icon"> {this.state.checkIcon}{}</span>
            <input
                data-testid="phone-input"
                type="text"
                size={10}
                value={this.state.phone}
                onInput={this.handlePhoneInput}
                ref={this.phoneRef}
            />
        </div>;
    }
}
