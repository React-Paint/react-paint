import React, { Component } from 'react';
import SignUp from './SignUp/SignUp.js';
import Login from './Login/Login.js';
import Form from './Form/Form.jsx';
import Gallery from './Gallery/Gallery';
import Color from './Color/Color';
import Publish from './Publish/Publish';
import Logout from './Logout/Logout';
import DrawCanvas from './DrawCanvas/DrawCanvas';
import AjaxFunctions from '../helpers/AjaxFunctions';
import CanvasHelper from '../helpers/CanvasHelper';
import DrawLogo from './DrawLogo/DrawLogo.js';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      color: 'rgba(0,0,0,1)',
      url: "http://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg",
      holderUrl: "",
      title: "",
      description: "",
      imgData: {},
      imgCoords: {},
      clear: false,
      line: 4,
      displayColorPicker: false,
      displayLogin: false,
      displaySignup: false,
      hideLogin: true,
      hideSignup: true,
      displaylogout: false,
      drawings: [],
      editImg: "",
      notification:"",
      showComponent: false,
      hideComponent: true,
      signup: {
        username: '',
        password: '',
      },
      login: {
        loggedIn: false,
        username: '',
        password: '',
      },
    };
  }

  handleChangeComplete(draw) {
    this.setState({
      color: `rgba(${draw.rgb.r}, ${draw.rgb.g}, ${draw.rgb.b}, ${draw.rgb.a})`,
    });
  }
  clickClear() {
    this.setState({
      clear: true,
      editImg: "",
      notification: "",
    });
  }
  unClear() {
    this.setState({
      clear: false,
    });
  }
  updateUrl(e) {
    this.setState({
      holderUrl: e.target.value,
    });
  }
  lineChange(e) {
    this.setState({
      line: e.target.value,
    });
  }
  searchUrl() {
    this.setState({
      url: this.state.holderUrl,
    });
  }

  publishDrawing() {
    console.log(this.state.login.username);
    const canvasData = {
      title: this.state.title,
      description: this.state.description,
      drawing: this.state.imgData.canvas.toDataURL('png'),
      url: this.state.url,
      username: this.state.login.username

    };
      AjaxFunctions.addDrawing(canvasData)
      .then(drawing => {
        const newState = {...this.state.drawings};
        newState[drawing.id] = drawing;

        this.setState({
          drawings: newState,
          notification: "",
        });
      })
      .catch(err => console.log(err));
  }

  editCanvas(id) {
    const imgSrc = AjaxFunctions.getImage(id);

    let canvCoords = CanvasHelper.getCoords();

    AjaxFunctions.getDrawing(id)
      .then((canv) => {
        this.setState({
          imgCoords: canvCoords,
          title: canv.title,
          description: canv.description,
          url: canv.url,
          editImg: imgSrc.src.toString(),
          notification: "HIT CLEAR TO DRAW MORE OR ADD NEW TITLE, DESCRIPTION, OR BACKGROUND AND SAVE AGAIN!!",
        });
      })
      .catch(err => console.log(err));
  }

  deleteCanvas(id) {
    AjaxFunctions.deleteDrawing(id)
     .then(() => {
       console.log(`deleted entry ${id}`);
     })
     .catch(err => console.log(err));

    this.handleAjaxGetAll();
  }

  updateCanvasIDs(canvas) {
    this.setState({
      imgData: canvas,
    });
  }
  handleClick() {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  }
  handleClose() {
    this.setState({ displayColorPicker: false });
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }
  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value,
    });
  }
  updateFormSignUpUsername(e) {
    this.setState({
      signup: {
        username: e.target.value,
        password: this.state.signup.password,
      },
    });
  }
  updateFormSignUpPassword(e) {
    this.setState({
      signup: {
        username: this.state.signup.username,
        password: e.target.value,
      },
    });
  }
  updateFormLogInUsername(e) {
    this.setState({
      login: {
        username: e.target.value,
        password: this.state.login.password,
      },
    });
  }
  updateFormLogInPassword(e) {
    this.setState({
      login: {
        username: this.state.login.username,
        password: e.target.value,
      },
    });
  }
  handleSignUp() {
    let username = this.state.signup.username;
    let password = this.state.signup.password;

    AjaxFunctions.signUp(username, password)
    .then(this.setState({
      signup: {
        username: '',
        password: '',
      },
      displayLogin: false,
      hideLogin: true,
      displaySignup: false,
      hideSignup: true,
    }))
    .catch(err => console.log(err));
  }
  logout() {
    this.setState({
      login: {
        loggedIn: false,
      },
      hideComponent: true,
      showComponent: false,
      displayLogin: false,
      hideLogin: true,
      displaySignup: false,
      hideSignup: true,
      displaylogout: false,
      clear: true,
    });
  }
  handleLogIn() {
    let username = this.state.login.username;
    let password = this.state.login.password;

    AjaxFunctions.logIn(username, password)
      .then(userData => {
        if (userData.password === false) {
          this.setState({
            notification: 'INVALID USERNAME AND PASSWORD COMBINATION',
            displayLogin: false,
            hideLogin: true,
            displaySignup: false,
            hideSignup: true,
          });
        } else {
          console.log('logged in');
          this.setState({
            showComponent: true,
            hideComponent: false,
            notification: '',
            displayLogin: false,
            hideLogin: true,
            displaySignup: false,
            hideSignup: true,
            displaylogout: true,
          });
          this.handleAjaxGetAll();
        }
      })
      .catch(err => console.log(err));
  }
  handleAjaxGetAll() {
    AjaxFunctions.getDrawings()
      .then(drawings => {
        this.setState({
          drawings,
        });
      })
      .catch(err => console.log(err));
  }
  loginDisplay() {
    this.setState({ displayLogin: true, hideLogin: false, displaySignup: false, hideSignup: true });
  }
  SignupDisplay() {
    this.setState({ displaySignup: true, hideSignup: false, displayLogin: false, hideLogin: true });
  }

  render() {
    const banana = this.state.url;
// Banana is attributed to trevor!!!!! the "this" in this.state.url was not recognized in background
    const overlap = {
      position: 'absolute',
      left: this.state.imgCoords.offsetLeft,
      top: this.state.imgCoords.offsetTop,
    };
    const noteColor = {
      color: 'red',
    };
    return (
      <div>
        <header>
          <DrawLogo />
          {this.state.hideComponent ? <div className="userLogin">
            <SignUp
              signUpUsername={this.state.signup.username}
              signUpPassword={this.state.signup.password}
              updateFormUsername={event => this.updateFormSignUpUsername(event)}
              updateFormPassword={event => this.updateFormSignUpPassword(event)}
              handleFormSubmit={() => this.handleSignUp()}
              displaySignup={this.state.displaySignup}
              hideSignup={this.state.hideSignup}
              SignupDisplay={this.SignupDisplay.bind(this)}
            />
            <Login
              className={this.state.login.loggedIn ? 'hidden' : ''}
              logInUsername={this.state.login.username}
              logInPassword={this.state.login.password}
              updateFormUsername={event => this.updateFormLogInUsername(event)}
              updateFormPassword={event => this.updateFormLogInPassword(event)}
              handleFormSubmit={() => this.handleLogIn()}
              displayLogin={this.state.displayLogin}
              hideLogin={this.state.hideLogin}
              loginDisplay={this.loginDisplay.bind(this)}
            />
          </div> : null}
          <div className="userLogin">
            <Logout
              displaylogout={this.state.displaylogout}
              logout={this.logout.bind(this)}
            />
          </div>
        </header>
        <h1 className="notify" style={noteColor}>{this.state.notification}</h1>
        <main>
          <div className="picture">
            <Form
              updateUrl={(e) => this.updateUrl(e)}
              searchUrl={this.searchUrl.bind(this)}
              holderUrl={this.state.holderUrl}
            />
            <DrawCanvas
              brushColor={this.state.color}
              lineWidth={this.state.line}
              canvasStyle={{
                background: 'url(' + banana + ')',
                cursor: 'pointer',
              }}
              clear={this.state.clear}
              unclear={this.unClear.bind(this)}
              updateCanvasIDs={(imgData) => this.updateCanvasIDs(imgData)}
            />
            <img style={overlap} src={this.state.editImg} />
            <div className="stylings">
              <input className="rangeThick" type="range" min="2" max="15" step=".5" onChange={this.lineChange.bind(this)} />
              <button onClick={() => this.clickClear()}>clear</button>
              <Color
                handleClick={this.handleClick.bind(this)}
                displayColorPicker={this.state.displayColorPicker}
                handleClose={this.handleClose.bind(this)}
                color={this.state.color}
                handleChangeComplete={this.handleChangeComplete.bind(this)}
              />
            </div>
            {this.state.showComponent ? <div className="dontHitBottom">
              <Publish
                title={this.state.title}
                description={this.state.description}
                handleTitleChange={(e) => this.handleTitleChange(e)}
                handleDescriptionChange={(e) => this.handleDescriptionChange(e)}
                publishDrawing={this.publishDrawing.bind(this)}
              />
            </div>: null}
          </div>
          <div className="gal">
            {this.state.showComponent ? <div>
              <Gallery
                drawings={this.state.drawings}
                editCanvas={(id) => this.editCanvas(id)}
                deleteCanvas={(id) => this.deleteCanvas(id)}
              />
            </div>: null}
          </div>
        </main>
        <footer className="footer">
        </footer>

      </div>
    );
  }
}
