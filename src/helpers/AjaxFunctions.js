export default class AjaxFunctions {
  static getDrawings() {
    return fetch('/paint', {
      method: 'GET'
    })
      .then(r => r.json())
  }

  static addDrawing(drawing) {

    return fetch('/paint', {
      headers: {
        'Content-Type':'application/json'
      },
      method:'POST',
      body: JSON.stringify(drawing)
    })
    .then(r => r.json())
  }

  static getDrawing(id) {
    return fetch(`/paint/${id}`, {
      method: 'GET'
    })
    .then(r => r.json())
  }

  static deleteDrawing(id) {
    return fetch(`/paint/${id}`, {
     method: 'DELETE'
   })
  }

  static getImage(id) {
    return document.querySelector(`#canvas${id}`);
  }

  static signUp(user, pass) {
    return fetch('/users', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: user,
        password: pass
      })
    })
  }

  static logIn(user, pass) {
    return fetch('/auth', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: user,
        password: pass
      })
    })
  }

}
