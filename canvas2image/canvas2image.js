'use strict';

let initCanvas = function() {
	let bMouseIsDown = false;
	let canvas = document.getElementById('cvs');
	let ctx = canvas.getContext('2d');
	let convert = document.getElementById('convert');
	let sel = 'png';
	let imgs = document.getElementById('imgs');
	let imgW = 300;
	let imgH = 200;

	let background = new Image();
	background.crossOrigin = '';
	background.src = "http://i.imgur.com/yf6d9SX.jpg";

	background.onload = function(){
		 ctx.drawImage(background,0,0,600,400);
	}
	bind(canvas,ctx,convert,sel,imgs,imgW,imgH,bMouseIsDown);
// http://impactjs.com/forums/help/canvas-tainted-by-cross-origin-data/page/1
}();

function bind (canvas,ctx,convert,sel,imgs,imgW,imgH,bMouseIsDown) {
		let iLastX = 0;
		let iLastY = 0;
		canvas.onmousedown = function(e) {
			bMouseIsDown = true;
			iLastX = e.clientX - canvas.offsetLeft + (window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft);
			iLastY = e.clientY - canvas.offsetTop + (window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop);
		}
		canvas.onmouseup = function() {
			bMouseIsDown = false;
			iLastX = -1;
			iLastY = -1;
		}
		canvas.onmousemove = function(e) {
			if (bMouseIsDown) {
				let iX = e.clientX - canvas.offsetLeft + (window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft);
				let iY = e.clientY - canvas.offsetTop + (window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop);
				ctx.moveTo(iLastX, iLastY);
				ctx.lineTo(iX, iY);
				ctx.stroke();
				ctx.strokeStyle = "blue";
				ctx.lineJoin = "round";
				ctx.lineWidth = 5;
				iLastX = iX;
				iLastY = iY;
			 // http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/#demo-colors
			}
		};

		convert.onclick = function (e) {
			let type = sel.value,
				w = imgW.value,
				h = imgH.value;
			imgs.appendChild(Canvas2Image.convertToImage(canvas, w, h, type))
		}
	}

let Canvas2Image = function () {

	// check if support sth.
	let support = function () {
		let canvas = document.createElement('canvas'),
			ctx = canvas.getContext('2d');

		return {
			canvas: !!ctx,
			imageData: !!ctx.getImageData,
			dataURL: !!canvas.toDataURL,
			btoa: !!window.btoa
		};
	}();

	let downloadMime = 'image/octet-stream';

	function scaleCanvas (canvas, width, height) {
		let w = canvas.width,
			h = canvas.height;
		if (width == undefined) {
			width = w;
		}
		if (height == undefined) {
			height = h;
		}

		let retCanvas = document.createElement('canvas');
		let retCtx = retCanvas.getContext('2d');
		retCanvas.width = width;
		retCanvas.height = height;
		retCtx.drawImage(canvas, 0, 0, w, h, 0, 0, width, height);
		return retCanvas;
	}

	function getDataURL (canvas, type, width, height) {
		canvas = scaleCanvas(canvas, width, height);
		return canvas.toDataURL(type);
	}

	function saveFile (strData) {
		document.location.href = strData;
	}

	function genImage(strData) {
		let img = document.createElement('img');
		img.src = strData;
		return img;
	}
	function fixType (type) {
		type = type.toLowerCase().replace(/jpg/i, 'jpeg');
		let r = type.match(/png|jpeg|bmp|gif/)[0];
		return 'image/' + r;
	}
	function encodeData (data) {
		if (!window.btoa) { throw 'btoa undefined' }
		let str = '';
		if (typeof data == 'string') {
			str = data;
		} else {
			for (let i = 0; i < data.length; i ++) {
				str += String.fromCharCode(data[i]);
			}
		}
		return btoa(str);
	}
	function getImageData (canvas) {
		let w = canvas.width,
			h = canvas.height;
		return canvas.getContext('2d').getImageData(0, 0, w, h);
	}
	function makeURI (strData, type) {
		return 'data:' + type + ';base64,' + strData;
	}

	let convertToImage = function (canvas, width, height, type) {
		if (support.canvas && support.dataURL) {
			if (typeof canvas == "string") { canvas = document.getElementById(canvas); }
			if (type == undefined) { type = 'png'; }
			type = fixType(type);

			if (/bmp/.test(type)) {
				let data = getImageData(scaleCanvas(canvas, width, height));
				let strData = genBitmapImage(data);
				return genImage(makeURI(strData, 'image/bmp'));
			} else {
				let strData = getDataURL(canvas, type, width, height);
				return genImage(strData);
			}
		}
	};

	return {


		convertToImage: convertToImage,
		convertToPNG: function (canvas, width, height) {
			return convertToImage(canvas, width, height, 'png');
		},

	};

}();
