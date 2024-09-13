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
