import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Alert } from "reactstrap";
import NewUserModal from "./NewUserModal";
import AuthContext from "../context/auth/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Login = (props) => {

  const [userLogin, saveUser] = useState({
    email: '',
    password: ''
  });

  // destructuring
  const { email, password } = userLogin;
  // if password or user doesn't exist
  const authContext = useContext(AuthContext)
  const { message, login, user, autenticated, autenticatedUser } = authContext
  useEffect(() => {
    autenticatedUser()
    if (autenticated) {
      if(user)
      props.history.push('/home');
    }
    
    // eslint-disable-next-line
  }, [message, autenticated, props.history, user]);

  const onChange = e => {
    saveUser({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

 
  // when login
  const onSubmit = e => {
    e.preventDefault();
    // send to action
    login({ email, password });
  }


  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <Form id="login" onSubmit={onSubmit} encType="multipart/form-data">
            <FormGroup>
              <Label for="email">Email:</Label>
              <Input
                type="text"
                name="email"
                onChange={onChange}
                value={email}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password:</Label>
              <Input
                type="password"
                name="password"
                onChange={onChange}
                value={password}
              />
            </FormGroup>
            {message ?
              <Alert color="danger"> {message} </Alert> :
              null
            }
            <Button color="danger" type="submit">LOGIN</Button>

          </Form>
          <NewUserModal
              create={true}
              user={user}
            />
          <Link className="text-danger" to="/reset-password"> Forgot your password? </Link>
        </div>
      </div>
    </div>
  );

}
export default Login;
