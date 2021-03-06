import React from 'react';
import axios from 'axios';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom';


export class SignupPage extends React.Component {
  state = {
    errors: []
  }

  showErrors = () => {
    if (this.state.errors.length > 0) { 
      return this.state.errors.map((e, index) => (
        toast.error(e, {
          position: toast.POSITION.TOP_LEFT
        })
      ))
    }
  }

  handleSignup = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordConfirmation = e.target.passwordConfirmation.value;

    if (password === passwordConfirmation) {
      const request = {
        "user": {
          "email": email, 
          "password": password
        }
      };

      axios.post('http://localhost:3001/api/v1/users/create', request)
        .then((res) => {
          this.setState(() => ({
            errors: []
          }));

          return res.data;
        })
        .then((data) => {
          if(data.status === 200) {
            this.props.history.push('/login');
          } else {
            this.setState((prevState) => ({
                errors: prevState.errors.concat(data.msg)
            }))
          }
        })
        .catch((res) => {
          this.setState(() => ({
            errors: ['Cannot create a user']
          }));
        });

    } else {
      this.setState(() => ({
        errors: ['Password doesn\'t match']
      }));
    }
  }

  componentDidUpdate() {
    this.showErrors();
  }

  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box" >
          <h1 className="box-layout__title">SIGNUP</h1>

          <ToastContainer transition={Slide} hideProgressBar={true} />

          <form onSubmit={this.handleSignup}>
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
            <label htmlFor="password">Confirm Password:</label>
            <input
              name="passwordConfirmation"
              id="passwordConfirmation"
              type="password"
            />
            <input 
              name="submit"
              id="submit"
              type="submit"
              className="button"
              value="Sign Up"
            />
          </form>
          <p>
            {"or "}
            <Link to="/login">
              Log in
            </Link>!
          </p>
        </div>
      </div>
    )
  }
};

export default SignupPage;