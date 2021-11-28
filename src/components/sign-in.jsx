import React from 'react';


export default class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : "",
            errorEmail : "",
            errorPassword : "",
        }
        this.login = this.login.bind(this);
    }

    login(){


        if(this.state.email == "" ){
            this.setState({
                errorEmail : "please fill the email address"
            })
        }else if(this.state.password == "" ){
            this.setState({
                errorPassword : "please fill the password"
            })
        }else{
            alert('can sign in')
        }

    }


    render(){
        return(
            <div>

<header class="no-position">
        <svg class="header-svg" viewBox="0 0 1440 578" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M210.172 577L0 482.921V-22H1455V421.871H1065.04L741.427 454.398L210.172 577Z" fill="#F7F7F7" stroke="#FFF3C7"/>
        </svg>
        

        
    </header>

    <section class="form-box">

        <div class="form">
            <img src={require('../assets/register.png').default}/>

            <h2>Sign In Account</h2>
            <p>For the purpose of industry regulation, your details are required.</p>


            <div class="form-control">
                <label>Email*</label>
                <input type="email" value={this.state.email} placeholder="Enter your Email address" onChange={(e)=>{
                    this.setState({
                        email : e.target.value
                    })
                }}/>
                {this.state.errorEmail == "" ? "" : <span>{this.state.errorEmail}</span>}
            </div>


            <div class="form-control">
                <label>Password*</label>
                <input type="password" value={this.state.password} placeholder="enter your password" onChange={(e)=>{
                    this.setState({
                        password : e.target.value
                    })
                }}/>
                {this.state.errorPassword == "" ? "" : <span>{this.state.errorPassword}</span>}
            </div>

            <br></br>
            

            <div class="form-control">
                <input type="submit" value="Sign In" onClick = {()=>{
                    this.login();
                }}/>
            </div>

        </div>



        


    </section>

            </div>
        )
    }
}