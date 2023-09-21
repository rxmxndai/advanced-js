 // Call Stack
 // When a function is called, it is added to the top of the call stack, and when a function completes, it is removed from the stack. 
 // JavaScript is single-threaded, meaning it can only execute one operation at a time, and the call stack is essential for managing the execution of code in a sequential manner.


 
// Web API
// Web APIs are provided by web browsers to allow JavaScript to interact with web page elements, make HTTP requests, and handle various asynchronous operations.
// Common Web APIs include the DOM (Document Object Model) API for manipulating HTML elements and the XMLHttpRequest or Fetch API for making network requests.



// Callback Queue
// The callback queue are functions that are scheduled to be executed later, typically as a response to some asynchronous event.



// Event Loop
// The event loop is a crucial part of JavaScript's concurrency model. It continuously checks the call stack and callback queue to determine if there are functions waiting to be executed.
// When the call stack is empty and there are callbacks in the queue, the event loop takes the first callback from the queue and pushes it onto the call stack for execution.


// JOB QUEUE
// ANOTHER QUEUE FOR PROMISES
// micro task queue (smaller that the callback queue but has more priority)

