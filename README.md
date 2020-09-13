# D3 + TypeScript setup

## 1. Let’s Make a Bar Chart

### 1.1
* `.create("div")`: will create a div `HTMLElement`
* `.attr`: will set an attribute
* `.style`: will set a style
* It's important to note that you don't have to `create` an element, you can use `select` to select an element you want `attr`/`style` to apply to as well using normal selectors.

### 1.2
* `div`: you're gonna want to run the d3 methods on a D3 "selection" (aka a sparkling HTMLElement)
* `.selectAll`: Define the initial (empty) selection for the bars.
* `.data`: Bind this selection to the array of data
* `.join("div")` sets the element for each bar
* `.style`: set the style of the bar, ```style("width", (d) => `${x(d)}px`)``` contains a callback where `d` is the data item of the array we're currently on for the bar, and returns a pixel value. See 1.3 to understand what `x()` does.
* `.text((d) => d)` inserts text into each bar.

### 1.3
If you want to make the bars scale to a min/max value, use this. `domain` will take a min and max value for what you want to operate within the: `range` which will take in an arbitrary min and a max; `scaleLinear()` will scale the values of `domain` to be within `range`.

## To Do
https://observablehq.com/@d3/lets-make-a-bar-chart/2