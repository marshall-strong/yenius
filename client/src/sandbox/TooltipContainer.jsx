import React from "react";

class TooltipContainer extends React.Component {
  constructor(props) {
    super(props);
    const defaultRect = { left: 0, width: 0 };
    this.state = {
      containerRect: defaultRect,
      tooltipRect: defaultRect,
    };
    this.containerRef = React.createRef();
    this.tooltipRef = React.createRef();
    this.getRectsInterval = undefined;
  }

  componentDidMount() {
    this.getRectsInterval = setInterval(() => {
      this.setState((state) => {
        const containerRect = this.containerRef.current.getBoundingClientRect();
        return JSON.stringify(containerRect) !==
          JSON.stringify(state.containerRect)
          ? null
          : { containerRect };
      });
      this.setState((state) => {
        const tooltipRect = this.tooltipRef.current.getBoundingClientRect();
        return JSON.stringify(tooltipRect) === JSON.stringify(state.tooltipRect)
          ? null
          : { tooltipRect };
      });
    }, 10);
  }

  componentWillUnmount() {
    clearInterval(this.getRectsInterval);
  }

  render() {
    const left =
      this.state.containerRect.left +
      this.state.containerRect.width / 2 -
      this.state.tooltipRect.width / 2 +
      "px";

    return (
      <div
        ref={this.containerRef}
        style={{ display: "inline-block", position: "relative" }}
      >
        <span>Here is some text that will make the parent expand</span>
        <img src="https://www.telegraph.co.uk/content/dam/pets/2017/01/06/1-JS117202740-yana-two-face-cat-news_trans_NvBQzQNjv4BqJNqHJA5DVIMqgv_1zKR2kxRY9bnFVTp4QZlQjJfe6H0.jpg?imwidth=450" />
        <div
          ref={this.tooltipRef}
          style={{
            background: "blue",
            position: "absolute",
            top: 0,
            left,
          }}
        >
          Tooltip
        </div>
      </div>
    );
  }
}

export default TooltipContainer;
