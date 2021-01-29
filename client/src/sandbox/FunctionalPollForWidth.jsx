import React from "react";

const FunctionalComponentThatPollsForWidth = () => {
  return (
    <div
      ref={(element) => {
        if (!element) return;
        console.log("initial width: ", element.getBoundingClientRect().width);
        let prevValue = JSON.stringify(element.getBoundingClientRect());
        const start = Date.now();
        const handle = setInterval(() => {
          let nextValue = JSON.stringify(element.getBoundingClientRect());
          if (nextValue === prevValue) {
            clearInterval(handle);
            console.log(`width stopped changin in ${Date.now() - start} ms.`);
            console.log("final width: ", element.getBoundingClientRect().width);
            console.log("");
            const domRect = element.getBoundingClientRect();
            console.log("domRect = element.getBoundingClientRect();");
            console.log(`domRect.left: ${domRect.x}`);
            console.log(`domRect.width: ${domRect.width}`);
            console.log(`domRect.right: ${domRect.right}`);
            console.log(`domRect.top: ${domRect.y}`);
            console.log(`domRect.height: ${domRect.height}`);
            console.log(`domRect.bottom: ${domRect.bottom}`);
          } else {
            prevValue = nextValue;
          }
        }, 100);
      }}
      style={{ display: "inline-block" }}
    >
      <div>Check it out, here is some text in a child element</div>
    </div>
  );
};

export default FunctionalComponentThatPollsForWidth;
