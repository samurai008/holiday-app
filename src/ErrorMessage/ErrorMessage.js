import React, { Component } from 'react';
import './ErrorMessage.css';

class ErrorMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'default error message'
        }
    }

    showMessage(code) {
        console.log('code', code)
        switch(code) {
            case 1:
                this.setState({
                   message: 'Invalid month, should be between 1 and 12'
                });
                break;
            default:
                this.setState({
                   message: 'Somethin\' is wrong, cowboy!'
                });
            break;
        } 
    }

    render() {
        if (this.props.show) {
            this.showMessage(this.props.code);
            return(
            <div>
                <span className="err-msg">{this.state.message}</span>
                <span>code : {this.props.code}</span>
            </div>
            )
        } else {
            return (
                <div>Get started! Enter a month and year!</div>
            )
        }
    }
}

export default ErrorMessage;