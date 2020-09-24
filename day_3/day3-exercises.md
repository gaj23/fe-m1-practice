#Day 3 questions
****

##Forms

1.  If you're using an input element in a form, what attribute controls the behavior of that input?
> The `type` attribute specifies the behavior that will occur.


2.  What element is used to create a dropdown list?
> The `<select>` element paired with nested `<option>`s elements will create a drop down list. It's important that the value attribute of the `<option>` element represents the choice being made.


3.  If you're using an input element to send form data to a server, what should the `type` attribute be set to?
> `type="text"`


4.  What element is used to group similar form items together?
> `<fieldset>` groups related form items and a border is assigned by default (can be changed in CSS). Including a nested `<legend>` element will create a name for the grouping and help the user understand their relationship.



****

##Boxes & Layout

1.  Describe the differences between border, margin, and padding.
> Padding is the space directly between the border and the actual content. Adding padding to the content of a box helps with readability. The border, however, separates the edges of boxes. Margins creates a gap between the borders of boxes. This helps the overall appearance to seem less cramped on a page.


2.  For a CSS rule `padding: 1px 2px 5px 10px`, what sides of the content box does each pixel value correspond to?
> The order is as follows: top, right, bottom, left.



3.  Describe the difference between block-level and inline elements.
> Block-level elements are just that. Blocks of content. These elements start on a new line such as `<p>` or `<h1>`. Inline elements do not interrupt the flow of text or content. These elements include `<img>` and `<b>`.


4.  What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?
>  Fixed positioning is a form of absolute positioning, but in relation to the browsers window. This type of positioning doesn't move when the user scroll and it doesn't affect the content around it. Because of this standoffish behavior of fixed positioning, using the z-index and controlling the layering of such content is important. Fixed positioning in conjunction with z-index will ensure that the content will be displayed in a way that the user can understand.


5.  What is the difference between a fixed and liquid layout?
> The fixed layout doesn't adapt to the increasing or decreasing of window size like the liquid layout does. However, that is not always an advantage. The fixed layout gives far greater control for the developer, but might result in an unpredictable appearance if the user has a different screen resolution and sizes. Liquid layouts are far more forgiving towards the users computer settings.



****

[My codepen](https://codepen.io/gaj23-the-sasster/full/eYZbBdj)
