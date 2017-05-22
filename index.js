const fs = require('fs');
const Handlebars = require('handlebars');

const handler = function (module, filename) {
  const templateContent = fs.readFileSync(filename, 'utf-8');

  module.exports = Handlebars.compile(templateContent);
};

const register = function (exts) {
  if (exts.constructor !== Array) {
    exts = [exts];
  }

  exts.forEach((ext) => {
    require.extensions[ext] = handler;
  });
};

register('.handlebars');

module.exports = {
  register
};
