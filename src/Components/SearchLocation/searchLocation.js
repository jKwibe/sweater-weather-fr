import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";

import "./searchLocation.scss"

const SearchLocation = ({ onSubmit, hideForm}) => {
    const [ inputText, setInputText] = useState('')

    const onLocChange = (event)=>{
        event.preventDefault()
        onSubmit(inputText)
        hideForm()
        setInputText('')
    }

    const handleChange = (event) => {
        setInputText(event.target.value)
    }

        return (
            <section className="location-form">
                <Form onSubmit={onLocChange}>
                    <Form.Group controlId="city-address">
                        <Form.Control
                            className="location-input"
                            type="text"
                            placeholder="Enter City"
                            value={inputText}
                            onChange={ handleChange} />
                    </Form.Group>
                    <Button variant="info" className="submit-button" type="submit" disabled={inputText.length < 2}>
                        Find Location
                    </Button>
                </Form>
            </section>
        )
}

export default SearchLocation