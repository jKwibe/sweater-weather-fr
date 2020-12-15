import React, { Component } from "react"
import axios from 'axios'

export class SignIn extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userCredentials: {
                email: '',
                password: '',
            },
            user: {
                email: ''
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        let userCredentials = this.state.userCredentials
        userCredentials[event.target.name] = event.target.value

        this.setState({
            userCredentials
        })
    }

    handleSubmit(event){
        event.preventDefault()

        axios.post('https://sweater-weather-api-rails.herokuapp.com/api/v1/session',
            this.state.userCredentials)
            .then(res => {
                const { access_token, email } = res.data.data.attributes
                localStorage.setItem("access_token", access_token)
                this.setState({
                    user: {
                        email
                    }
                })
            })
            .catch(err => console.error(err))


        console.log(`a name has been submitted => ${this.state.userCredentials.email}`)
        this.setState({
            userCredentials: {
                email: '',
                password: '',
            }
        })

    }
    render() {
        const {email, password} = this.state.userCredentials
        return(
            <section>
                <p>Welcome to the signup page</p>
                <section className="sign_in_form">
                    <p>The signIn form will come here </p>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Email:
                            <input type="email" name="email" value={email} onChange={this.handleChange} />
                        </label>
                        <br/>
                        <label>
                            Password:
                            <input type="password" name="password" value={password} onChange={this.handleChange} />
                        </label>
                        <br/>
                        <input type="submit" value="Submit" />
                    </form>
                </section>
            </section>
        )
    }
}

export default SignIn