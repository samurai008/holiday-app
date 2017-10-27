import React, { Component } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './DateForm.css';

class DateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            show: false,
            code: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let date = event.target.value;

        if (date.length > 7) {
            date = date.slice(0,7);
        }
        
        if (date.length === 3) {
            if (date.indexOf('/') === -1) {
                date = date.slice(0,2) + '/' + date.slice(2,3);
            } 
        }

        this.setState({
            value: date 
        })
    }
    
    handleSubmit(event) {
        console.log('name', this.state.value);
        let date = this.state.value;
        let month = date.split('/');
        console.log('month', month);

        if (month[0] > 12) {
            this.setState({
                value: date,
                show: true,
                code: 1
            });
            console.log('code', this.state.code);
        }

        event.preventDefault();
    }
 
    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           value={this.state.value}
                           onChange={this.handleChange}
                           placeholder="MM/YYYY" />
                    <button type="submit">Submit</button>
                </form>
                <ErrorMessage show={this.state.show} code={this.state.code} />
            </div>
        );
    }
}

export default DateForm;