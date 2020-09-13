import { create, max, scaleLinear } from "d3";

const data = [4, 8, 15, 16, 23, 42];

// {1.3}
const x = scaleLinear()
  .domain([0, max(data) as Number])
  .range([0, 400]);

// {1.1}
const div = create("div")
  .attr("class", "hello")
  .style("font", "10px sans-serif")
  .style("text-align", "right")
  .style("color", "white");

// {1.2}
div
  .selectAll(".hello")
  .data(data)
  .join("div")
  .style("background", "steelblue")
  .style("padding", "3px")
  .style("margin", "1px")
  .style("width", (d) => `${x(d)}px`)
  .text((d) => d);

document
  .querySelector("#root")
  ?.insertAdjacentElement("afterend", div.node() as HTMLElement);
