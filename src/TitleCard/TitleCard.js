import React, { Component } from 'react';
import './TitleCard.css';

class TitleCard extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <h1 className="title">{this.props.title}</h1>
        )
    }
}

export default TitleCard;