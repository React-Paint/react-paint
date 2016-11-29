export default class CanvasHelper {
  static getCoords() {
    const canvas = document.querySelectorAll('canvas')[1];
    const canvOffsetTop = canvas.offsetTop;
    const canvOffsetLeft = canvas.offsetLeft;
    console.log(canvOffsetLeft, canvOffsetTop);
// function used to get the location of the canvas so on edit the position can be found and images can be pefectly over lapped
    return {
      offsetLeft: canvOffsetLeft,
      offsetTop: canvOffsetTop,
    };
  }
}
