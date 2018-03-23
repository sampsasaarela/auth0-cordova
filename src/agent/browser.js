function Browser() {
  this.browser = window.SafariViewController;
  this.open = this.open.bind(this);
  this.close = this.close.bind(this);
}

Browser.isAvailable = function (callback) {
  window.SafariViewController.isAvailable(callback);
};


Browser.prototype.open = function (url, callback, options) {
  var options = Object.assign({
    hidden: false,
    url: url
  }, options || {});

  this.browser.show(options, function (result) {
    callback(null, result);
  }, function (message) {
    callback(new Error(message));
  });
};

Browser.prototype.close = function () {
  this.browser.hide();
};

module.exports = Browser;
