# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
React is a js library that makes building interfaces easier and more efficient. It does this by using state and components that seperate the data and only pass it to parts of the interface that need access to that data. It also only refreshes the parts of the interface that update and change, instead of always the whole page, which makes it faster and more lightweight

1. Describe component state.
it stores some value such as a an object or array of data, which can then be used to control some other aspect of the interface.

1. Describe props.
short for properties. It is passed to children components to let them know what information they care about and where it is coming from. Can be from state, a function, or any other data.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
things that need to happen after the rendering pass is complete, we have been using it to get from an api but it has many uses. to sync to changes of a state or prop you pass what you want to sync to into a dependecy array and use effect will only run when that dependency is updated.
