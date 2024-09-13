# Hydra.js Hello World! App

This is a simple "Hello World!" application built using Hydra.js, demonstrating the basic setup and usage of the framework.

## Prerequisites

- Node.js (version 14 or later recommended)
- npm (usually comes with Node.js)

## Getting Started

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/hydra-hello-world.git
   cd hydra-hello-world
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Project Structure

```
hello-world/
├── layouts/
│   └── index.html
├── public/
│   └── index.html
├── routes/
│   ├── api/
│   │   └── tasks.js
│   ├── 404.html
│   ├── 500.html
│   ├── about.html
│   └── contact.jsx
├── src/
│   └── index.js
├── package.json
```

### package.json#

```json
  "build": "hydra-scripts build",
  "start": "hydra-scripts serve",
  "dev": "hydra-scripts serve --dev",
  "lint": "eslint ./src",
  "lint:fix": "eslint ./src --fix",
  "format": "prettier --write ./src"
```

> We use `hydra-scripts` to build, serve, and develop the application.
> ESLint and Prettier are used for code quality and formatting.

> **Future Changes:** Move code quality and formatting to `hydra-scripts`

### `layouts/`

Maintain layouts of the application

**layouts/index.html**
```
<!--
  This is the master layout file.
  It is been used to define the root structure of the HTML page.
  You can use handlebars syntax here

  This file receives page meta through the `page` object.
  You can add more elements in the layout file to be repeated for all pages.
  Ex- styles, scripts, header, footer, etc.

  **Important Notes**
  1. This file must be named as `index.html`
  2. {{{body}}} is  must to have placeholder in the layout file.
  3. This file must be placed at `layouts` directory
  4. This layout has no impact on the pages in public directory.
  5. This layout file is optional (in case of using only public directory for static files) (Removing isn't possible yet)

  **Future Changes/Improvements**
  1. Inject global styles in the layout file so that it can be used in all pages (except the pages in public directory  )
  2. Inject global scripts in the layout file so that it can be used in all pages (except the pages in public directory)
  3. Add support for Google Analytics out of the box (except the pages in public directory)
  4. Add validation to check if the layout file is exist and valid or not in build time (in both build script and CLI)
  5. Make the layout file (with entire directory) optional (in case of using only public directory for static files)
-->
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="title" content="{{page.title}}" />
  <meta name="description" content="{{page.description}}" />

  <title>{{page.title}}</title>
</head>

<body>
  <div id="root">
    {{{body}}}
  </div>
</body>

</html>
```

### `public/`

Contains the static assets of the application

**public/index.html**
```
<!--
  This is the welcome page for Hydra-JS application.
  This file is placed in public directory, so it will be served as static file.
  If you want to add more static pages, you can add them in the public directory,
  and they will be served as static files.

  This file serves for root route (::/), so it will be served as root page.

  **Important Notes**
  1. This file is optional (in case of using only public directory for static files)
  2. This file takes precedence over the routes, so if you want to add dynamic content, you should add it in the routes directory, and remove this file.
  3. public directory is by default the root directory for static files. You can put any assets in this directory, and they will be served as static files.
  4. This file is only used for demonstration purposes. You can remove this file and add your own static files to the public directory.
-->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Hydra-JS!</title>
</head>

<body>
  <header>
    <h1>Welcome to Hydra-JS!</h1>
  </header>
  <main>
    <p>This the welcome page for Hydra-JS application.</p>
  </main>
</body>

</html>
```

### `routes/`

Contains the routes of the application

**routes/400.html**
```
<!--
  This is the 404 page for Hydra-JS application.
  This file is placed in routes directory, so it will be served as dynamic page. Handlebars syntax can be used here.
  This file is optional unless you want to add a custom 404 page for your application.

  Not recommmended to remove this file, as it is a good practice to have a custom 404 page.

  **Future Changes**
  1. Block direct access to this file, though ::/404 route.
-->
```

**routes/500.html**
```
<!--
  This is the 500 - Internal Server Error page for Hydra-JS application.
  This file is placed in routes directory, so it will be served as dynamic page. Handlebars syntax can be used here.
  This file is optional unless you want to add a custom 500 page for your application.

  Not recommmended to remove this file, as it is a good practice to have a custom 500 page.

  **Future Changes**
  1. Block direct access to this file, though ::/500 route.
-->
```

**routes/about.html**
```
<!--
  This file is only used for demonstration purposes for dynamic html pages.
  This file is placed in routes directory, so it will be served as dynamic page. Handlebars syntax can be used here.
  It recives data from the server and can be renders it using handlebars.

  This file serves for route (::/about)
-->
<div>
  About Page Markup goes here.
</div>
```

**routes/contact.jsx**
```
import { React } from '@hydra-js/core';

/**
 * It is required to have default export in route files, and it should be a function
 * the return value of the function is an object, which contains the methods for the routes
 * supported methods are: get, getSingle, post, put, delete, patch, render
 * You can simply not implement the methods you don't need
 * All the methods are optional unless specified
 * 
 * You need to import React from @hydra-js/core, and the file extension must be .jsx if you want to use render method
 * otherwise you can use .js file extension
 * 
 * **Possible Future Changes/Improvements**
 * 1. Pass global props (such as global state, database connection, dependencies, etc.) to the main function so that it can be used in all other methods
 * 2. Remove the need to import React from @hydra-js/core if not using render method
 * 3. Allow using .js file extension with render method as well
 */
export default function() {
  return {
    get: () => {
      // this won't work with render method is present
      // render() method take precedence over get() method
      return null;
    },
    post: (req, res) => {
      // You can implement the logic to handle the form submission here
      // For example, you can save the form data to a database or send an email
      const data = req.body;
      return res.send('Form submitted successfully!', data);
    },
    put: () => {
      // Return null indicates that the method is not implemented
      return null;
    },
    delete: () => {
      // Return null indicates that the method is not implemented
      return null;
    },
    patch: () => {
      // Return null indicates that the method is not implemented
      return null;
    },
    render: () => {
      return (
        <div>
          <h1>Contact Form</h1>
          <form action="/contact" method="post">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <input type="text" name="message" placeholder="Message" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
  }
}
```

**routes/api/tasks.js**
```
/**
 * This is an example of a REST API route for a tasks resource.
 * It is placed in routes/api directory, so it will be served as a REST API endpoint.
 * 
 * @returns {Object} - An object containing the methods for the routes
 * @property {Function} get - The method for the GET /api/tasks route
 * @property {Function} getSingle - The method for the GET /api/tasks/:id route
 * @property {Function} post - The method for the POST /api/tasks route
 * @property {Function} put - The method for the PUT /api/tasks/:id route
 * @property {Function} delete - The method for the DELETE /api/tasks/:id route
 * @property {Function} patch - The method for the PATCH /api/tasks/:id route
 * 
 * **Possible Future Changes/Improvements**
 * 1. Pass global props (such as global state, database connection, dependencies, etc.) to the main function so that it can be used in all other methods
 */
export default function() {
  return {
    get: (req, res) => {
      return res.send({});
    },
    getSingle: (req, res) => {
      return res.send({});
    },
    post: (req, res) => {
      return res.send({});
    },
    put: (req, res) => {
      return res.send({});
    },
    delete: (req, res) => {
      return res.send({});
    },
    patch: (req, res) => {
      return res.send({});
    },
  };
}
```

### `src/`

Contains the source code for the application

```
import { bootstrapServer } from '@hydra-js/core';

const options = {
  port: 3000,
  init: (app) => {
    // Add any additional routes or middleware here
    app.get('/api/hello', function (req, res) {
      res.json({ message: 'Hello from the API!' });
    });
  },
};

const server = bootstrapServer(options);
server.start();
```

## Features

- Basic Hydra.js setup
- Demonstrates routing with Hydra.js
- Demonstrates REST API with Hydra.js

## Learn More

<!-- To learn more about Hydra.js, check out the [Hydra.js documentation](https://hydra.js.org/docs). -->

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
