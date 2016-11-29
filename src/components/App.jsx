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

// everthing in state is inital set values that appon doing something on the page may change their values
  handleChangeComplete(draw) {
    this.setState({
      color: `rgba(${draw.rgb.r}, ${draw.rgb.g}, ${draw.rgb.b}, ${draw.rgb.a})`,
    });
  }

  // uses the color wheel to grab rgb values and set the new color pen
  clickClear() {
    this.setState({
      clear: true,
      editImg: "",
      notification: "",
    });
  }

  // clears canvas
  unClear() {
    this.setState({
      clear: false,
    });
  }

  // unclears canvas
  updateUrl(e) {
    this.setState({
      holderUrl: e.target.value,
    });
  }

  // grabs the e.target value of url background image and sets holderurl to that
  lineChange(e) {
    this.setState({
      line: e.target.value,
    });
  }

// set the thickness on the pen line
  searchUrl() {
    this.setState({
      url: this.state.holderUrl,
    });
  }

//on click sets the url equal to holder url
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

// when the publish button is clicked, the drawing is saved as an image and title/ descripton/background are saved into sqla and put into gallery
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

// on click of edit, brings image from gallery back into edit location to that further changes can be made to the image
  deleteCanvas(id) {
    AjaxFunctions.deleteDrawing(id)
     .then(() => {
       console.log(`deleted entry ${id}`);
     })
     .catch(err => console.log(err));

    this.handleAjaxGetAll();
  }

// uses image ID and deletes it from the gallery
  updateCanvasIDs(canvas) {
    this.setState({
      imgData: canvas,
    });
  }

  //opens color picker and allows user to select color
  handleClick() {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  }

  //closes color wheel
  handleClose() {
    this.setState({ displayColorPicker: false });
  }

  //updates title state from the title box
  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  //same as title but for description box
  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value,
    });
  }

  //these handle their respective boxes in the signup form
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
//signs up a new user by adding them to the database
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
//empties the state after user login
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
//logs out user with fetch to database with their username
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
//logs in user with fetch to database with their username
  handleAjaxGetAll() {
    AjaxFunctions.getDrawings()
      .then(drawings => {
        this.setState({
          drawings,
        });
      })
      .catch(err => console.log(err));
  }
//get all drawungs and sets all the drawings to the array
  loginDisplay() {
    this.setState({ displayLogin: true, hideLogin: false, displaySignup: false, hideSignup: true });
  }
//onclick the login button, inputs appear by using boolean values
  SignupDisplay() {
    this.setState({ displaySignup: true, hideSignup: false, displayLogin: false, hideLogin: true });
  }
//onclick the login button, inputs appear by using boolean values
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
// style made using const and inline in render
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
            {this.state.showComponent ? <div>
              <Publish
                title={this.state.title}
                description={this.state.description}
                handleTitleChange={(e) => this.handleTitleChange(e)}
                handleDescriptionChange={(e) => this.handleDescriptionChange(e)}
                publishDrawing={this.publishDrawing.bind(this)}
              />
            </div>: null}
            <div className="dontHitBottom"></div>
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
