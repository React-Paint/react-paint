export default class CanvasHelper {
  static getCoords() {
    let canvas = document.querySelectorAll('canvas')[1];
    let canvOffsetTop = canvas.offsetTop;
    let canvOffsetLeft = canvas.offsetLeft;
    console.log(canvOffsetLeft, canvOffsetTop);
    return {
      offsetLeft: canvOffsetLeft,
      offsetTop: canvOffsetTop,
    }
  }
}
