import React, { Component } from 'react';
import SignUp from './SignUp/SignUp.js';
import Login from './Login/Login.js';
import Form from './Form/Form.jsx';
import Gallery from './Gallery/Gallery';
import Color from './Color/Color';
import Publish from './Publish/Publish';
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
      clear: false,
      line: 4,
      displayColorPicker: false,
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
    const canvasData = {
      title: this.state.title,
      description: this.state.description,
      drawing: this.state.imgData.canvas.toDataURL('png'),
      url: this.state.url,
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
    AjaxFunctions.getDrawing(id)
      .then((canv) => {
        this.setState({
          title: canv.title,
          description: canv.description,
          url: canv.url,
          editImg: imgSrc.src.toString(),
          notification: "HIT CLEAR TO DRAW MORE OR ADD NEW TITLE AND DESCRIPTION AND SAVE AGAIN!!",
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

     this.handleAjaxGetAll()
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
        password: this.state.signup.password
      }
    });
  }

  updateFormSignUpPassword(e) {
    this.setState({
      signup: {
        username: this.state.signup.username,
        password: e.target.value
      }
    });
  }

  updateFormLogInUsername(e) {
    this.setState({
      login: {
        username: e.target.value,
        password: this.state.login.password
      }
    });
  }

  updateFormLogInPassword(e) {
    this.setState({
      login: {
        username: this.state.login.username,
        password: e.target.value
      }
    });
  }

  handleSignUp() {
    let username = this.state.signup.username;
    let password = this.state.signup.password;

    AjaxFunctions.signUp(username, password)
    .then(this.setState({
      signup: {
        username: '',
        password: ''
      }
    }))
    .then(this.alertInfo('You have signed up!'))
    .catch(err => console.log(err));
  }

  handleLogIn() {
    let username = this.state.login.username;
    let password = this.state.login.password;

    AjaxFunctions.logIn(username, password)
      .then(userData => {
        if (userData.password === false) {
          console.log('invalid password');
        } else {
          console.log('logged in');
          this.setState({
            login: {
              username: '',
              password: ''
            },
            showComponent: true,
            hideComponent: false,
          })
          this.handleAjaxGetAll();
        }
      })
      // setup a display hello message
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

  alertInfo(msg) {
    alert(msg);
  }

  render() {
    const banana = this.state.url;
// Banana is attributed to trevor!!!!! the "this" in this.state.url was not recognized in background
    const overlap = {
      position: 'absolute',
      left: '10px',
      top: '100px',
    };
    const noteColor = {
      color: 'red',
    };
    return (
      <div>
        <DrawLogo />
        {this.state.hideComponent ? <div>
          <SignUp
            signUpUsername={this.state.signup.username}
            signUpPassword={this.state.signup.password}
            updateFormUsername={event => this.updateFormSignUpUsername(event)}
            updateFormPassword={event => this.updateFormSignUpPassword(event)}
            handleFormSubmit={() => this.handleSignUp()}
          />
          <Login
            className={this.state.login.loggedIn ? 'hidden' : ''}
            logInUsername={this.state.login.username}
            logInPassword={this.state.login.password}
            updateFormUsername={event => this.updateFormLogInUsername(event)}
            updateFormPassword={event => this.updateFormLogInPassword(event)}
            handleFormSubmit={() => this.handleLogIn()}
          />
        </div> : null}
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
        <h1 style={noteColor}>{this.state.notification}</h1>
        <input type="range" min="2" max="15" step=".5" onChange={this.lineChange.bind(this)} />
        <button onClick={() => this.clickClear()}>clear</button>
        <Color
          handleClick={this.handleClick.bind(this)}
          displayColorPicker={this.state.displayColorPicker}
          handleClose={this.handleClose.bind(this)}
          color={this.state.color}
          handleChangeComplete={this.handleChangeComplete.bind(this)}
        />


        {this.state.showComponent ? <div>
          <Publish
            title={this.state.title}
            description={this.state.description}
            handleTitleChange={(e) => this.handleTitleChange(e)}
            handleDescriptionChange={(e) => this.handleDescriptionChange(e)}
            publishDrawing={this.publishDrawing.bind(this)}
          />
          <Gallery
            drawings={this.state.drawings}
            editCanvas={(id) => this.editCanvas(id)}
            deleteCanvas={(id) => this.deleteCanvas(id)}
          />
        </div>: null}

        <footer className="footer">
          <img src="https://www.seeklogo.net/wp-content/uploads/2013/11/facebook-flat-vector-logo-400x400.png" alt="pic" height="50" width="50"/>
          <img src="http://blogs.bodleian.ox.ac.uk/ssl/wp-content/uploads/sites/136/2016/06/twitter-logo.png" alt="pic2" height="50" width="50"/>
        </footer>

      </div>

    );
  }
}
