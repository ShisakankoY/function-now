(function(global) {
  function now() {
    let now = new Date();
    return now;
  }
  global.now = now;
})(typeof window !== "undefined" ? window : global);
