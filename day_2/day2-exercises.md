1.  There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
> Ordered lists use numbers to imply a specific ordering of steps, portions, or rankings. Unordered lists use bullet points that don't imply a specific or necessary order. Definition lists create a structured space where rather that the `<li>` tag, the term is encased in the `<dt>` tag and the definition of said term is encased in the `<dd>` tag.


2.  What is the basic structure of an element used to link to another website?
> The `<a>` element contains the `href` attribute which allows a link to occur on a page. By including the `target` attribute set to a value of `_blank`, the link will then open a new browser window.
> When linking to an outside website example: `<a href="someotherplace.org" target=_blank>some other place</a>`


3.  What attribute should you include in a link to open a new tab when the link is clicked?
> By including the `target` attribute set to a value of `_blank`, the link will then open a new browser window.

4.  How do you link to a specific part of the same page?
> By assigning a portion of the page an `id` attribute, we can then assign the `href` attribute of an `<a>` element to `#idUsed`.
>`<h1 id=#top>Top Of page</h1> ... ... ... <a href="#top">return to top</a>`



1.  What is the purpose of CSS?
> Allows you to manipulate the appearance of specific page contents.


2.  What does CSS stand for? What does cascading mean in this case?
> CSS stands for cascading style sheets. The cascading portion refers to the hierarchy that exists when creating stylized rules.


3.  What is the basic structure of a CSS rule?
> `p {
    font-family: serif;
}`
> In this case, `p` is the selector, or what element the rule applies to. Everything inside of the curly brackets are the declaration, or how the selected elements should be styled. `font-family` is an example of a property (indicating what aspect of an element to be changed) and `serif` is an example of the value (the specific way you want the property to be expressed).


4.  How do you link a CSS stylesheet to your HTML document?
> The  `<link>` element with the following attributes: `href`, `type`, and `rel` are needed. The `href` attribute is the path to the CSS document. The `type` attribute specifies what type of document is being linked (in our case it is set to the value of `text/css`.). The `rel` attribute is the relationship of the linked document (`stylesheet` for us at this moment).  `<link>` is an empty element so no closing tag is needed.
 >`<link href="some/path.css" type="text/css" rel="stylesheet">`


5.  When is it useful to use external stylesheets as opposed to using internal CSS?
> While internal stylesheets can be used when only one page is being displayed on a website and no other, for more complex and varied websites, external is best. External stylesheets can be used across the entirety of a websites html documents. It's reusable and also creates separation between the html and css code aka cleaner and streamlined. This make debugging more focused as well.


6.  Describe what a color hex code is.
>HEX code is a six digit code that uses numbers and letters to define the red, green, and blue color variances in the selected color.


7.  What are the three parts of an HSL color property?
> HSL accounts for hue (the color itself), saturation (amount of gray), and lightness (amount of black).


8.  In the world of typeface, what are the three main categories of fonts? What are the differences between them?
> The three main typefaces are: serif, sans-serif, and monospace. Serif is often used for print material because of the extra details at the end of the letter strokes. Sans-serif doesn't include those extra details making the lines smooth and best on screens. Monospace makes all letters the same width and excels in readability of code due to its uniformed appearance.


9.  When specifying font-size, what are the main three units used?
> Pixels (1px), percentiles (1%), or Ems (1em) can be used to specify a font-size. Pixels are the most precise. Percentiles are scaled to default text-size of the browser page as well are ems.

[My updated CodePen](https://codepen.io/gaj23-the-sasster/full/eYZbBdj)
