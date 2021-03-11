# Marvel Api

## Table Of Contents

-   [Software Requirements](#software-requirements)
-   [Installation](#installation)
-   [Caching](#caching)

## Software Requirements

1.  Node 12.4.0 is required

## Installation

1.  Clone the repo:
2.  Add `.env` file which looks similar to `.env-sample`. Consider below notes before adding new `.env` variables

    -   Add the public and private keys that I have sent on email in .env file

3. Run `npm install` to install dependencies.
4. Run `npm start` to start the server. This will take some time when you see message on console that server has started
5. Go to `http://localhost:8080/api-docs/#/` on browser and now test the apis
6. Run `npm test` to run unit tests

## Caching

-   In this app we have used memory-cache package for caching data
-   memory-cache provides bare-minimum features required for caching. It provides a set of methods to perform basic operations on cached data For e.g.  get, set, put, delete,       clear, size, hits, misses, keys. It stores cached content in it’s own process memory
-   Pros :-
      In-memory cache is the fastest option available. It’s easy to work with, no external dependency needed.
-   Cons :-
     We’ll lose the cached content if the server or the process goes down.
     Since it stores cached content in its own process memory, it will not be shared between multiple node.js processes.

-   https://www.npmjs.com/package/memory-cache           

