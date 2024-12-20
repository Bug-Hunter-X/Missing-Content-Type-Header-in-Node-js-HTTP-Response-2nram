# Missing Content-Type Header in Node.js HTTP Response

This repository demonstrates a common error in Node.js HTTP servers: forgetting to set the `Content-Type` header in the response.  This can cause the client to misinterpret or fail to render the response.

## Bug

The `bug.js` file shows a server that omits the `Content-Type` header.  This often leads to the browser displaying the raw response rather than interpreting it correctly (e.g., rendering HTML).

## Solution

The `bugSolution.js` file demonstrates the correct way to set the `Content-Type` header based on the content being sent. In this case, it's set to `text/plain` since we're sending plain text.

## How to reproduce the bug

1. Clone this repository.
2. Run `node bug.js`
3. Open your browser and go to `http://localhost:3000`. You'll likely see the raw text response instead of the browser interpreting the text as a string.
4. Run `node bugSolution.js`
5. Open your browser and go to `http://localhost:3000`. You'll see 'Hello, world!' displayed correctly. 