export default class CanvasHelper {
  static getImage(id) {
    return document.querySelector(`#canvas${id}`);
  }
}
