import React from "react";

function ClassComponentThatPollsForWidth() {
  return (
    <div
      ref={(el) => {
        if (!el) return;
        console.log("initial width: ", el.getBoundingClientRect().width);
        let prevValue = JSON.stringify(el.getBoundingClientRect());
        const start = Date.now();
        const handle = setInterval(() => {
          let nextValue = JSON.stringify(el.getBoundingClientRect());
          if (nextValue === prevValue) {
            clearInterval(handle);
            console.log(`width stopped changin in ${Date.now() - start} ms.`);
            console.log("final width: ", el.getBoundingClientRect().width);
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
}

export default ClassComponentThatPollsForWidth;
