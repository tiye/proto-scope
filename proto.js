// Generated by CoffeeScript 1.6.3
exports.proto = {
  "new": function(object) {
    var child, key, value;
    child = {};
    child.__proto__ = this;
    for (key in object) {
      value = object[key];
      child[key] = value;
    }
    if (typeof child.init === "function") {
      child.init();
    }
    return child;
  }
};
