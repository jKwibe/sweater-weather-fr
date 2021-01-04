import React, {useState} from "react"
import axios from 'axios'

const SignIn = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [userEmail , setUserEmail ] = useState('')

    const handleChange = event => {
        switch (event.target.name) {
            case 'email':
                setEmail(event.target.value)
                break;
            case 'password':
                setPassword(event.target.value)
                break;
            default:
                return;
        }
    }

    const handleSubmit= event => {
        event.preventDefault()

        axios.post('https://sweater-weather-api-rails.herokuapp.com/api/v1/session',
            {
                email,
                password
            })
            .then(res => {
                const { access_token} = res.data.data.attributes
                console.log(access_token);
                setUserEmail(email)
            })
            .catch(err => console.error(err))

        setPassword('')
        setEmail('')
    }
    console.log(email);
    console.log(password);
    console.log(`a name has been submitted => ${userEmail}`)

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