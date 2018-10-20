import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class LoginPage extends React.Component {
  handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const request = {"auth": {"email": email, "password": password}};

    axios.post('http://localhost:3001/api/v1/user_token', request)
      .then((res) => {
        const token = res.data.jwt;
        localStorage.setItem("jwt", token);
        this.props.login(token);
      })
      .then(() => {
        this.props.history.push('/dashboard');
      })
      .catch((res) => {
        console.log("Login failed");
        console.log(res);
      });
  }

  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box" >
          <h1 className="box-layout__title">LOGIN</h1>
          
          <form onSubmit={this.handleLogin}>
            <label htmlFor="email">Email: </label>
            <input
              name="email"
              id="email"
              type="email"
            />
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              id="password"
              type="password"
            />
            <br />
            <input 
              name="submit"
              id="submit"
              type="submit"
              className="button"
            />
          </form>
          <p>
            {"New user? "}
            <Link to="/signup">
              Sign Up
            </Link>!
          </p>
        </div>
      </div>
    )
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: (token) => dispatch(login(token))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);