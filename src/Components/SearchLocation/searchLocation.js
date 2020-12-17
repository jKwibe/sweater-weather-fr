import React, {Component} from "react";
import {Form, Button} from "react-bootstrap";

import "./searchLocation.css"

class SearchLocation extends Component{
    state = {
        inputText:''
    }

    onLocChange = (event)=>{
        event.preventDefault()
        this.props.onSubmit(this.state.inputText)
        this.props.hideForm()
        this.setState({
            inputText:''
        })
    }

    handleChange = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }

    render() {
        return (
            <section className="location-form">
                <Form onSubmit={this.onLocChange}>
                    <Form.Group controlId="city-address">
                        <Form.Control
                            className="location-input"
                            type="text"
                            placeholder="Enter City"
                            value={this.state.inputText}
                            onChange={ this.handleChange} />
                    </Form.Group>
                    <Button variant="info" className="submit-button" type="submit" disabled={this.state.inputText.length < 2}>
                        Find Location
                    </Button>
                </Form>
            </section>
        )
    }
}

export default SearchLocation