# Comments API Demo App

[![Build Status](https://travis-ci.org/microapidev/comment-microapi-demo.svg?branch=develop)](https://travis-ci.org/microapidev/comment-microapi-demo)

## Overview

The average millenial, who is tech-savvy, and the Gen Z, who is tech-native should be a great indication of the high expectations customers have from businesses.Today’s customer does not maintain interest in any business that doesn’t accomodate their high demands. Given how many times the customer can change they mind within hours, business also need to, somehow, be flexible.

This demo app, built with React, uses the Comment API SDK to showcase the flexibility and capabilities of the Comment API. The SDK and the API it depends on are meant to allow businesses to be fast, agile, and risk-free.

## Getting Started

### Requirements

- [Node](https://nodejs.org/en/download/)
- Comment API Application Token

### Getting an Application Token

To get the application token, you will need to visit [comment.microapi.dev](https://comment.microapi.dev).

1. Login to your organization or create a new one.
2. Get an application token, using an already existing application or a newly created application.

**NOTE**: Don't lose the application token, as it will be needed during the setup of your local environment.

### Setup Local Environment

1. Create a fork of the repository and clone to you local machine.
2. In your terminal, run `cp .env.example .env` from the root of your local repository.
3. In the .env file, assign an application token to the `REACT_APP_COMMENTS_API_APP_TOKEN` variable.
4. In your terminal, run `npm install`.

### Run a local server

1. In your terminal, run `npm start`.
