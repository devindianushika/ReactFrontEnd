import React, { Component } from "react";
import NavigationBarLogin from "../../../components/NavigationBarLogin/NavigationBarLogin";
import styles from "../../../assets/css/Auth/LoginPage.css";

class LoginPage extends Component {
  handleLogin = () => {
    this.props.history.push("/admin");
  };
  render() {
    return (
      <div>
        <NavigationBarLogin />
        <div className={styles.main_container}>
          <div className={styles.form_container}>
            <h2 className={styles.login_header}>Login</h2>
            <form className={styles.form}>
              <input
                type="text"
                name="userName"
                placeholder="User name"
                className={styles.input}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={styles.input}
              />
              <div>
                <input type="checkbox" name="remember" />
                <span className={styles.username_reminder}>
                  Remember username
                </span>
              </div>

              <button
                className={styles.login_button}
                onClick={this.handleLogin}
              >
                Login
              </button>
              <button
                onClick={() => this.props.history.push("/forgotpassword")}
                className="btn btn-primary"
              >
                Forgot your username or password
              </button>
            </form>
          </div>

          <div className={styles.image_conatiner}>
            <h1 className={styles.annotation}>
              Audelia manage yours schooling
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
