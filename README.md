Q: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
a) getElementById = takes one single element by its id
b) getElementsByClassName = Gives a list of HTMLCollection of all elements with that class.It is live, in the sense that if additional elements containing the class are added, they will automatically be included in the collection.
c) querySelector = Locates the first element matching the given CSS selector. It can be an identifier, a class, or a descendant selector such as div followed by a space and p.
d) querySelectorAll = Locates all matching elements and returns a NodeList. Unlike the previous method, this one is not live, meaning it will not change or refresh on its own if new elements are added after the call is made.


Q: How do you create and insert a new element into the DOM?
Answer: First, I will create the element with document.createElement(). Then I will add text, attributes, or classes to it. Finally, I will insert it somewhere in the page using methods like appendChild(), prepend(), or insertBefore().


Q: What is Event Bubbling and how does it work?
Answer: Event bubbling is a concept where an event begins at the element I interact with and then "bubbles up" to its parent elements. For instance, if I click a button within a div, the click event triggers on the button first, then moves to the div, followed by the body, and continues up until it reaches the root of the document.


Q: What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation is a pattern based upon the concept of Event Bubbling. It is an event-handling pattern that allows us to handle events at a higher level in the DOM tree, other than the level where the event was first received.

Why it’s useful:
a) Saves memory
b) Makes it easier to handle elements that are added dynamically later
c) Keeps my code cleaner and shorter


Q: What is the difference between preventDefault() and stopPropagation() methods?
Answer: The difference between preventDefault() and stopPropagation() methods
a) preventDefault() = function is used to stop the browser from doing what it usually does. For instance, if I click on a link, it can prevent the browser from actually taking me to that page.
b) stopPropagation() = It's all about keeping the event from moving up to the parent elements. For example, if I click a button that's inside a div, and I want to make sure that the click event for the div doesn’t trigger, I’d use this function.
