# React Widgets Assigment - Part 1 

Create and mount the following React components: 

1. Counter
  - Render a count value to the dom
  - Render two buttons, "add" and a "subtract"
  - The buttons will effectively add or subtract from the count, and render the new value on the dom. 
  *Don't let the count go below zero.

2. Greeting Toggle
  - Render some "hello" greeting
  - Render a button, "Toggle Me"
  - The button will toggle the greeting between a "hello" and "goodbye" every time it's clicked.

3. Show / Hide Toggle
  - Render text on the dom. "Hide Me"
  - Render a button. "Show / Hide".
  - The button will either show, or hide the text on the page. 
  *The button text should be conditionally rendered. IE: If the text is displayed, the button should say "Hide", and if it's hidden the button should say "Show".

4. FontSizer - 
 - Renders 2 buttons (Grow, Shrink) and a font size.
 - Each button should change the size of the font displayed in increments (try something like 5px up and down).
 - There should be a minimum and maximum size. (maybe 5px - 100px)

5. TextAligner -
 - Renders a line of text
 - Renders 3 buttons (left, center, right)
 - Each button should align the text left of the screen, center screen, and right of the screen

6. Lifecycle Clock
- Render a component that displays a button
- On Click, the button will mount / unmount (text should update on the button) a clock component
- The Clock Component should "tick" every second
- When unmounting, you must cleanup the interval to avoid a memory leak

7. ColorChanger
- Render an <h1> Label that represents a color
- Render a text input
- Render a button
- When clicked, the button will update the text and the color of the <h1> through state
- The input should clear everytime the button is clicked.
- IE: typing the word "yellow" in the input will render the word "yellow" in the <h1>, with a 
  font-color of yellow.

8. RGBSliders
- Render a small box with a solid background color
- Render a label underneath (rgb(0, 0, 0))
- Render three range slider input elements.
- When sliding an input, it should update a corresponding value (either the r, g, or b)
- The background color of the small box should update to the appropriate color
- The label should update appropriately as you slide
