'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = React.PropTypes;
import './DrawLogo.css';
// import './App.css';

const DrawLogo = React.createClass({

 getInitialState(){
    return {
      canvas: null,
      context: null,
    };
  },

  componentDidMount() {
    let canvas = ReactDOM.findDOMNode(this);
    canvas.width =1200;
// width="200" height="200"
    let ctx = canvas.getContext('2d');

    ctx.font = "50px Comic Sans MS, cursive, TSCu_Comic, sans-serif";
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.globalAlpha = 2/3;
    ctx.strokeStyle = ctx.fillStyle = "#1f2f90";
    //
    // "#F5F5F5";

    let dashLen = 220;
    let dashOffset = dashLen;
    let speed = 5;
    let txt = "Welcome to REACT PAINT";
    let x = 30;
    let i = 0;

    function loop() {
      ctx.clearRect(x, 0, 60, 150);
      ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
      dashOffset -= speed;                                         // reduce dash length
      ctx.strokeText(txt[i], x, 90);                               // stroke letter

      if (dashOffset > 0) requestAnimationFrame(loop);             // animate
      else {
        ctx.fillText(txt[i], x, 90);                               // fill final letter
        dashOffset = dashLen;                                      // prep next char
        x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
        ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
        ctx.rotate(Math.random() * 0.005);                         // random rotation
        if (i < txt.length) requestAnimationFrame(loop);
      }
    }

    loop();
   },
   render() {
    return (
       <canvas className="canvasStyle"
       >
       </canvas>
       );
  }

  });

module.exports = DrawLogo;

