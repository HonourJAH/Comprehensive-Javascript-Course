# JAVASCRIPT BEHIND THE SCENES

## Things covered under this section

# A High-Level Overview of JavaScript

JavaScript is a high-level, interpreted programming language primarily used for web development. It's single-threaded, dynamically typed, supports event-driven and asynchronous programming, and runs in browsers and on servers (via Node.js).

# The JavaScript Engine and Runtime

The JavaScript engine (e.g., V8 in Chrome) parses, compiles, and executes code. The runtime environment (browser or Node.js) provides APIs like DOM, setTimeout, and fetch, which the engine alone cannot handle.

# Execution Contexts and The Call Stack

An execution context is the environment in which JavaScript code is evaluated. The call stack keeps track of function calls, pushing and popping contexts as functions are invoked and completed.

# Scope and The Scope Chain

Scope defines where variables are accessible. JavaScript uses lexical (static) scoping, meaning nested functions have access to variables in their parent scopes, forming a scope chain.

# Variable Environment: Hoisting and The TDZ

Hoisting allows variable and function declarations to be moved to the top of their scope. Variables declared with var are hoisted and initialized as undefined, while let and const are hoisted but stay in the Temporal Dead Zone (TDZ) until initialization.

# The this Keyword

this refers to the object calling the function. In global scope, it's the global object; in methods, it's the object itself. Arrow functions do not bind this and inherit it from their enclosing context.

# Regular Functions vs. Arrow Functions

Regular functions have their own this, arguments, and can be used as constructors. Arrow functions do not bind their own this or arguments, making them better suited for callbacks or functional code.

# Memory Management: Primitives vs. Objects

Primitives (e.g., numbers, strings) are stored in the stack and are immutable. Objects are stored in the heap and can be large, mutable, and passed by reference.

# Memory Management: Garbage Collection

JavaScript automatically frees memory no longer in use through garbage collection. It primarily uses reference counting and mark-and-sweep algorithms to identify and clean up unused objects.
