import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { createUsername } from "../actions/authActions";

class Signup extends Component{
    constructor(){
        super();
        this.state={
            username: "",
            redirect: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
    }

    handleChange = async(e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

    handleSignup = async(e) =>{
        e.preventDefault();
        const user = {
            username: this.state.username
        }
        await createUsername(user.username)
        this.setState({redirect:true})
    }

    render(){
        console.log("username is:", this.state.username)
        if(this.state.redirect === true){
            return <Redirect to = "/todo"/>
        }
        return(
            <form>
                <label>
                    Signup:
                     <input
                        type="username"
                        name="username"
                        onChange={this.handleChange}
                        placeholder="Username"
                        />
                </label>
                <input type="submit" value="Login" onClick={this.handleSignup}/>            
            </form>
            
        )

    }
}

export default Signup;