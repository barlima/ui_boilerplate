import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

export class Header extends React.Component {
  handleLogout = () => {
    localStorage.removeItem('jwt');
    this.props.logout();
  }

  render() {
    return (
      <header className="header">
        <div className="content-container">
          <div className="header__content">
            <Link className="header__title" to="/dashboard">
              <h1>Boilerplate</h1>
            </Link>
            <button className="button button--link" onClick={this.handleLogout}>Logout</button>
          </div>
        </div>
      </header>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(undefined, mapDispatchToProps)(Header);