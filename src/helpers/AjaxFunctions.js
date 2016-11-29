export default class AjaxFunctions {
  static getDrawings() {
    return fetch('/paint', {
      method: 'GET',
    })
      .then(r => r.json());
  }
// ajax gets all drawing into db
  static addDrawing(drawing) {
    return fetch('/paint', {
      headers: {
        'Content-Type':'application/json',
      },
      method:'POST',
      body: JSON.stringify(drawing),
    })
    .then(r => r.json());
  }
// ajax puts new drawing into db
  static getDrawing(id) {
    return fetch(`/paint/${id}`, {
      method: 'GET',
    })
    .then(r => r.json());
  }
// ajax gets one drawing into db based on id
  static deleteDrawing(id) {
    return fetch(`/paint/${id}`, {
      method: 'DELETE',
    });
  }
// ajax deletes one drawing into db based on id
  static getImage(id) {
    return document.querySelector(`#canvas${id}`);
  }
// ajax gets one drawing image on the canvas and saves to db based on id
  static signUp(user, pass) {
    console.log(user, pass);
    return fetch('/users', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: user,
        password: pass,
      }),
    });
  }
// ajax that puts user info into user table based on username and password
  static logIn(user, pass) {
    return fetch('/auth', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: user,
        password: pass,
      }),
    })
      .then(r => r.json());
  }
// ajax that logs user into account using info based on username and password in user table
}
