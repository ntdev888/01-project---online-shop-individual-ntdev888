import React from "react";
import { Application } from "public/runtime.js";

function Animation() {
  const canvas = document.getElementById("canvas3d");
  const app = new Application(canvas);
  app.load("./scene.splinecode");
  return (
    <div class="anim">
      <canvas id="canvas3d"></canvas>
      <a class="logo" href="https://spline.design"></a>
    </div>
  );
}

export default Animation;
