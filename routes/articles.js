// @TODO Add support for ES6 syntaxes
// @TODO Extend the functionlity to support more than just the get method
module.exports = function () {
  return {
    get: (req, res) => {
      res.send('Hello, world!');
    },
  };
};
