export default class AjaxFunctions {
  static getDrawings() {
    return fetch('/paint')
      .then(r => r.json())
  }

  static addDrawing(drawing) {
    console.log('Post Data: ', drawing);
    return fetch('/paint', {
      headers: {
        'Content-Type':'application/json'
      },
      method:'POST',
      body: JSON.stringify(drawing)
    })
    .then(r => r.json())
  }
}
