import React, { Component } from 'react'

class Auth extends Component{
    constructor() {
        super()
            this.state = {
                username: "",
                password: "",

            }
    }
        handleUsernameChange(e) {
            this.setState({
                username: e.target.value
            })
        }
        handlePasswordChange(e) {
            this.setState({
                password: e.target.value
            })
        }
        handleLogin() {
            this.setState({

            })
        }
        handleRegister() {
            
        }
    render() {
        return(
            <div>
            
            Auth
                <input/>
                <input/>
                <button>Login</button>
                <button>Register</button>

            </div>
        )
    }
}

export default Auth;