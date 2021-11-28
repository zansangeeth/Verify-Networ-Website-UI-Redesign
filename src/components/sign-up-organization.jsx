import React from 'react';


export default class SignUpOrganization extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            email : "",
            fullName : "",
            password : "",
            errorPassword : "",
            errorName : "",
            errorEmail : "",
            step : 0,
            phoneNumber : "",
            address : "",
            otp : "",
            city : "",
            errorOtp : "",
            errorPhoneNumber : "",
            errorAddress : "",
            errorCity : "",
            errorOtp : "",


        }
        this.signUpIndivdual = this.signUpIndivdual.bind(this);
        this.signUpStep1 = this.signUpStep1.bind(this);
        this.signUpStep2 = this.signUpStep2.bind(this);
        this.signUpStep3 = this.signUpStep3.bind(this);
        
    }





    signUpIndivdual(){

        if(this.state.step == 0){

            if(this.state.email == "" ){
                this.setState({
                    errorEmail : "please fill the email address"
                })
            }else if(this.state.password == "" ){
                this.setState({
                    errorPassword : "please fill the password"
                })
            }else if(this.state.fullName == "" ){
                this.setState({
                    errorName : "please fill the company name"
            })
            }else{
                this.setState({
                    step : 1
                })
                
            }

        }else if(this.state.step == 1){

            if(this.state.phoneNumber == "" ){
                this.setState({
                    errorPhoneNumber : "please fill the phone number"
                })
            }else if(this.state.address == "" ){
                this.setState({
                    errorAddress : "please fill the address"
                })
            }else if(this.state.city == "" ){
                this.setState({
                    errorCity : "please fill the city"
            })
            }else{
                this.setState({
                    step : 2
                })
                
            }

        }else{

            if(this.state.otp == "" ){
                this.setState({
                    errorOtp : "please fill the OTP"
                })
            }else{
                alert("sign up complete")
            }
            
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

            {this.state.step == 0 ? <this.signUpStep1/> : this.state.step == 1 ? <this.signUpStep2/> : <this.signUpStep3/>}



        </div>

    </section>

            </div>
        )

    }


    signUpStep1(){
        return(
            <>

            <h2>Register Organization Account!</h2>
            <p>For the purpose of industry regulation, your details are required.</p>


            <div class="form-control">
                <label>Your Organization*</label>
                <input type="text" value={this.state.fullName} placeholder="Enter your Organization name" onChange={(e)=>{
                    this.setState({
                        fullName : e.target.value
                    })
                }}/>
                {this.state.errorName == "" ? "" : <span>{this.state.errorName}</span>}
            </div>

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


            <p>
                I agree to
                
                <a href="#">terms & conditions</a>
            </p>

            <div class="form-control">
                <input type="submit" value="Register Account" onClick = {()=>{
                    this.signUpIndivdual();
                }}/>
            </div>

            
            </>
        )
    }




    signUpStep2(){
        return(
            <>

            <h2>Complete Your Profile!</h2>
            <p>For the purpose of industry regulation, your details are required.</p>


            <div class="form-control">
                <label>Phone number*</label>
                <input type="text" value={this.state.phoneNumber} placeholder="Enter your phone number" onChange={(e)=>{
                    this.setState({
                        phoneNumber : e.target.value
                    })
                }}/>
                 {this.state.errorPhoneNumber == "" ? "" : <span>{this.state.errorPhoneNumber}</span>}
            </div>

            <div class="form-control">
                <label>Your address*</label>
                <input type="text" value={this.state.address} placeholder="Enter your address" onChange={(e)=>{
                    this.setState({
                        address : e.target.value
                    })
                }}/>
                {this.state.errorAddress == "" ? "" : <span>{this.state.errorAddress}</span>}
            </div>

            <div class="form-control">
                <label>City*</label>
                <input type="text" value={this.state.city} placeholder="Enter your city name" onChange={(e)=>{
                    this.setState({
                        city : e.target.value
                    })
                }}/>
                {this.state.errorCity == "" ? "" : <span>{this.state.errorCity}</span>}
            </div>

            

            <div class="form-control">
                <input type="submit" value="Save & Continue" onClick = {()=>{
                    this.signUpIndivdual();
                }}/>
            </div>


            
            </>
        )
    }





    signUpStep3(){
        return(
            <>

            <h2>Complete Your Profile!</h2>
            <p>Enter Your OTP(6 Digit number) Here!!</p>

            <div class="form-control">
                <label>verification OTP</label>
                <input type="text" value={this.state.otp} placeholder="OTP code" onChange={(e)=>{
                    this.setState({
                        otp : e.target.value
                    })
                }}/>
               {this.state.errorOtp == "" ? "" : <span>{this.state.errorOtp}</span>}
            </div>

            <div class="form-control">
                <input type="submit" value="Save & Continue" onClick = {()=>{
                    this.signUpIndivdual();
                }}/>
            </div>
            
            </>
        )
    }


}