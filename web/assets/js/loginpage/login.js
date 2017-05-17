/**
 * Created by Kong on 4/27/2017.
 */
import React from "react";
import "./login.css";

function getCookie(cname) {
     var name = cname + "=";
     var ca = document.cookie.split(';');
     for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if(c.indexOf(name) == 0)
           return c.substring(name.length,c.length);
     }
        return "";
}
export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            checkemail: "",
            checkpassword: "",
            name: '',
            email: '',
            password: '',
            phone: '',
            password2: '',
            wechat: '',
            customers: [],
            checkstring: '',
            register: 'REGISTER',
            registerstring: '',
            sign: 'SIGN IN',
        };

    }
    loadCarsFromServer(){
        $.ajax({
            url: '/api/customer/?format=json',
            datatype: 'json',
            cache: false,
            success: function(customers) {
                this.setState({customers: customers});
            }.bind(this)
        })
    }

    componentDidMount() {
        this.loadCarsFromServer();
    }
    signemail(e) {
        this.setState({checkemail: e.target.value});
    }
    signpassword(e) {
         this.setState({checkpassword: e.target.value});
    }
    rigname(e) {
        this.setState({name: e.target.value});
    }
    rigpassword(e) {
        this.setState({password: e.target.value});
    }
    rigpassword2(e) {
        this.setState({password2: e.target.value});

    }
    rigemail(e) {
        this.setState({email: e.target.value});
    }
    rigphone(e) {
        this.setState({phone: e.target.value});
    }
    rigwechat(e) {
        this.setState({wechat: e.target.value});
    }


    checkCustomer() {
        var list = this.state.customers;
        var email = this.state.checkemail;
        var password = this.state.checkpassword;
        // console.log(list);
        // console.log(password);
        var check = 0;
        for (var i = 0; i < list.length; i++) {
            if(list[i].email == email && list[i].password == password) {
                check = 1;
            }
        }
        if (check == 1) {
            this.setState({sign: "SIGN SUCCESS"});
            this.setState({checkstring: "Sign in success"});
        } else {
            this.setState({checkstring: "You haven't registered. please register first"});
        }        
    }

    registerToserver() {
        var list = this.state.customers;
        var string = '';
        var checkvalid = 1;
        var registered = list[list.length - 1].name;
        if (registered == this.state.name) {
            checkvalid = -3;
        }
        if (this.state.name == '' || this.state.email == '' || this.state.password == '') {
                checkvalid = -2;
        }
        if (this.state.password2 != this.state.password) {
                checkvalid = -1;
        }
        if (checkvalid == -3) {
            this.setState({registerstring: "Register success"});
            this.setState({register: "REGISTER SUCCESS"});
        } else if (checkvalid == 1) {
               var cusdata = {name: this.state.name, password: this.state.password,
               phone: this.state.phone, email: this.state.email};
               $.ajax({
                  url: '/api/customer/',
                  type: 'POST',
                  data: JSON.stringify(cusdata),
                  dataType: 'json',
                  headers: { "X-CSRFToken": getCookie("csrftoken") },
                  contentType: 'application/json',
                  success: console.log('customer success!')
              });
              this.setState({registerstring: "Register success"});
        } else if (checkvalid == 2) {
              this.setState({registerstring: "Please enter the same passwards"});
        } else {
             this.setState({registerstring: "Please fill all required fields"});
        }

        
    }

    render(){

        return (<div className="wrapper col-md-12">
               <div className="signinSection col-md-5 col-md-offset-1">
                <div className="banner">
                    {this.state.sign}
                </div>

                <div>
                <form className="form-group">

                       <div className="inputWrapper">
                                <input type="email" className="form-control"  placeholder="*EMAIL" onChange={this.signemail.bind(this)}/>
                        </div>


                        <div className="inputWrapper">


                            <input type="password" className="form-control" placeholder="*PASSWORD" onChange={this.signpassword.bind(this)}/>
                        </div>



                    <div className="checkbox">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                    </div>
                    <p>{this.state.checkstring}</p>
                    <button type="submit" className="buttons btn btn-lg btn-primary" onClick= {this.checkCustomer.bind(this)}>Submit</button>
                </form>

                </div>
                <div>
                    <a href="#">Forgot Password? </a>
                </div>


            </div>
            <vr/>
            <div className="registerSection col-md-5 col-md-offset-1">
                <div className="banner">
                   {this.state.register}
                </div>
                {/*<div id="ad">Enjoy benefits that include</div>*/}
                {/*<ul className="loginList">*/}
                    {/*<li className="loginList">Add cars to your wish list</li>*/}
                    {/*<li className="loginList">View your order history</li>*/}
                    {/*<li className="loginList">Stay updated with our news</li>*/}
                {/*</ul>*/}
               <form>
                <div className="inputWrapper">
                    <input className="form-control" placeholder="Username" type="text" name="my_name" required  onChange={this.rigname.bind(this)}/>
                    <span className="required-field">*</span>
                </div>


                <div className="inputWrapper">
                    <input type="email" className="form-control" placeholder="Email" required  onChange={this.rigemail.bind(this)}/>
                    <span className="required-field">*</span>
                </div>

                <div className="inputWrapper">
                    <input type="password" className="form-control" placeholder="Confirm Password" required onChange={this.rigpassword.bind(this)}/>
                    <span className="required-field">*</span>
                </div>

                <div className="inputWrapper">
                    <input type="password" className="form-control" placeholder="Confirm Password" required onChange={this.rigpassword2.bind(this)}/>
                    <span className="required-field">*</span>
                </div>
                <div className="inputWrapper">
                    <input type="tel" pattern="^\d{10}$" className="form-control"  placeholder="Phone number eg.123-456-6789"  onChange={this.rigphone.bind(this)}/>
                </div>


                <div className="inputWrapper">
                    <input type="password" className="form-control" placeholder="Wechat ID"  onChange={this.rigwechat.bind(this)}/>
                </div>
                <p>{this.state.registerstring}</p>
                <button type="submit" className="buttons btn btn-lg btn-primary" onClick= {this.registerToserver.bind(this)}>Create Account</button>
            </form>
            </div>
        </div>

        );
    }
};