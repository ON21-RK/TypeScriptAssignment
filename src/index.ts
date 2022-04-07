//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!

import "./myModule";
import { alertMe } from "./myOtherModule";
import "./playbutton";


const myInputValue = document.querySelector<HTMLInputElement>("#myInput");

const myInputValueAlternate = document.querySelector(
  "#myInput"
) as HTMLInputElement;

document
  .querySelector<HTMLInputElement>("#myInput")
  ?.addEventListener("focus", doSmth);

function doSmth(e: UIEvent) {
  const val = e.target as HTMLInputElement;
  console.log(e, val.value);
}

document.querySelector("testbutton")?.addEventListener
