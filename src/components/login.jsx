import React, { Component } from "react";
import logo from "../Logo.png";
import { format } from "util";
// import ListItemComposition from "./menu"; //named export

class Login extends Component {
  render() {
    React.createElement("h1");
    return (
      <div className="login">
        {/* <ListItemComposition>Hello, World!</ListItemComposition> */}
        <div>
          <table>
            <tr>
              <td>
                <h1>
                  <a href="../index.html">
                    <img src={logo} alt="logo" width="50" height="50" />
                  </a>
                  G U N F L O W
                </h1>
              </td>
            </tr>
            <tr>
              <td>
                <h2>
                  <a href="FirstPageAfterLogin.html">Login!</a>
                </h2>
              </td>
            </tr>
            <tr>
              <td>
                <form>
                  <label>
                    Username:
                    <input type="text" name="username" />
                  </label>
                  <input type="submit" value="Submit" />
                  {/* <input type="password" name="psw" style="width:100%" /> */}
                </form>
              </td>
            </tr>
            <tr>
              <td>
                <form>
                  <label>
                    Password:
                    <input type="password" name="password" />
                  </label>
                  <input type="submit" value="Submit" />
                  {/* <input type="password" name="psw" style="width:100%" /> */}
                </form>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Login;
