import React, { Component } from "react"

export class SignIn extends Component{
    constructor(props) {
        super(props);
        this.state = { value: ""}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        console.log(`a name has been submitted => ${this.state.value}`)
        this.setState({
            value: ''
        })
    }
    render() {
        return(
            <section>
                <p>Welcome to the signup page</p>
                <section className="sign_in_form">
                    <p>The signIn form will come here </p>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </section>
            </section>
        )
    }
}

export default SignIn