import React, {useState} from "react"
import axios from 'axios'

const SignIn = () => {
    const [ userCredentials, setUserCredentials ] = useState({
        email: '',
        password: ''
    })
    const [userEmail , setUserEmail ] = useState('')

    const handleChange = event => {
        let userData = userCredentials
        userCredentials[event.target.name] = event.target.value

        console.log(userData)
        setUserCredentials(userData)
    }

    const handleSubmit= event => {
        event.preventDefault()

        axios.post('https://sweater-weather-api-rails.herokuapp.com/api/v1/session',
            userCredentials)
            .then(res => {
                const { access_token, email } = res.data.data.attributes
                localStorage.setItem("access_token", access_token)
                setUserEmail(email)
            })
            .catch(err => console.error(err))


        console.log(`a name has been submitted => ${userEmail}`)
        setUserCredentials({ email: '', password: ''})
    }

    const {email, password} = userCredentials

    return(
        <section>
            <p>Welcome to the signup page</p>
            <section className="sign_in_form">
                <p>The signIn form will come here </p>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input type="email" name="email" value={email} onChange={handleChange} />
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input type="password" name="password" value={password} onChange={handleChange} />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </section>
        </section>
    )
}

export default SignIn