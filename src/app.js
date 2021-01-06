import { Observable } from "rxjs/Rx";

const canvas = document.getElementById("rxjs-draw-board");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const ctx = canvas.getContext("2d");
const canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

const output = document.getElementById("output");
const moveStream$ = Observable.fromEvent(document, "mousemove");

const drawPixel = (x, y, r, g, b, a) => {
    const index = (x + y * canvasWidth) * 4;

    canvasData.data[index + 0] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;
}

const updateCanvas = () => {
    ctx.putImageData(canvasData, 0, 0);
}

moveStream$.subscribe(
  (e ) => {
    drawPixel(e.clientX, e.clientY, 255, 0, 0, 255);
    updateCanvas();
    output.innerHTML = `<h1>${e.clientX} ${e.clientY}</h1>`;
    },
  (err) => console.log(err),
  () => console.log("Completed")
);

