### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
well, the 2 main ways would be using the then/catch method and async/await method.

- What is a Promise?
it's essentially an object that will produce value in the future, it's not always successful so sometimes it returns the reasons as to why it failed.

- What are the differences between an async function and a regular function?
async mean the function will always return a promise.

- What is the difference between Node.js and Express.js?
Express is used to add features when building websites.Node is more of a library that makes it easier to write code.
  
- What is the error-first callback pattern?
it's a way developers can catch errors early in the process and prevent bugs throughout the application.

- What is middleware?
middleware is a software that different applications use to communicate with each other.

- What does the `next` function do?
It return the next item inaan iterator.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

The code repeats the same $.getJSON call three times. This violates the DRY (Don't Repeat Yourself) principle and can make the code harder to maintain and update in the future.
