import { Observable } from "rxjs/Rx";

const output = document.getElementById("output");
const moveStream$ = Observable.fromEvent(document, "mousemove");

moveStream$.subscribe(
  (e ) => (output.innerHTML = `<h1>${e.clientX} ${e.clientY}</h1>`),
  (err) => console.log(err),
  () => console.log("Completed")
);

