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
