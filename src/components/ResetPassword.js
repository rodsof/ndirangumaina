import React from "react";
import { Button, Form, FormGroup, Input, Label, Alert } from "reactstrap";
import axios from "axios";
import { API_URL_RESETP, API_URL_SENDT } from "../constants";
class ResetPassword extends React.Component {

  state = {
    email: "",
    password: "",
    token: "",
    sent: null,
    sentToken: null,
    error: null,
    errortoken: null,
    errorpassword: null
  };
componentDidMount(){
  if (localStorage.getItem("refresh")){
    this.props.history.push("/home");
  }
}
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  reset= e => {
    e.preventDefault();
    axios.post(API_URL_RESETP, this.state ).then(res =>  {
      // console.log(res.status);
      if(res.status === 200) {
        this.setState({ sent : "Check your email",
        error: null
      });
      }
      }).catch(error => this.setState({
        error: "There is no active user associated with this e-mail address or the password can not be changed"
      }));
  };


  sendtoken= e => {
    e.preventDefault();
    axios.post(API_URL_SENDT, this.state).then(res =>  {
      // console.log(res.status);
      if(res.status === 200) {
        this.setState({ sent : "Check your email",
        errortoken: null
      });
      }
      }).catch(error => this.setState({
        errortoken: "Invalid token",
      }));
  };


  sendpassword= e => {
    e.preventDefault();
    axios.post("https://www.spatialardhi.com/estate/password_reset/confirm/", this.state ).then(res =>  {
      // console.log(res.status);
      if(res.status === 200) {
        this.setState({ sent : "Succesfully changed your password",
        errorpassword: null
      });
      }
      }).catch(error => this.setState({
        errorpassword: "Invalid password",
        sent: null
      }));
  };


  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <Form onSubmit={this.reset} encType="multipart/form-data">
              <FormGroup>
                <Label for="email">Email:</Label>
                <Input
                  type="text"
                  name="email"
                  onChange={this.onChange}
                  value={this.defaultIfEmpty(this.state.email)}
                />
              </FormGroup>
              { this.state.error ? 
             <Alert  color="danger"> {this.state.error} </Alert>  :
             null
            }
              { !this.state.token ? <Button color="danger">Send me a verification code</Button> : null }
	     </Form>

       { this.state.sent ? 
              <Form onSubmit={this.sendtoken} encType="multipart/form-data">
              <FormGroup>
                <Label for="token">Check your email and insert the code here</Label>
                <Input
                  type="text"
                  name="token"
                  onChange={this.onChange}
                  value={this.defaultIfEmpty(this.state.token)}
                />
              </FormGroup>
               { this.state.errortoken ? 
             <Alert  color="danger"> {this.state.errortoken} </Alert>  :
             null
            } 
              <Button color="danger">Send</Button>
       </Form>
              : null
  }

{ this.state.sentToken ? 
              <Form onSubmit={this.sendpassword} encType="multipart/form-data">
              <FormGroup>
                <Label for="password">Check your email and insert the code here</Label>
                <Input
                  type="text"
                  name="password"
                  onChange={this.onChange}
                  value={this.defaultIfEmpty(this.state.password)}
                />
                 <Input
                  type="hidden"
                  name="token"
                  onChange={this.onChange}
                  value={this.defaultIfEmpty(this.state.token)}
                />
              </FormGroup>
               { this.state.errorpassword ? 
             <Alert  color="danger"> {this.state.errorpassword} </Alert>  :
             null
            } 
              <Button color="danger">Send</Button>
       </Form>
              : null
  }

         <a className="text-danger" href="/"> Home </a>

          </div>
        </div>

      </div>
    );
  }
}
export default ResetPassword;
