(function () {
  var User = function () {
  };

  User.prototype = {
    constructor: User,
    fetched: false,
    promise: null,

    fetch: function (argument) {
      if (!this.promise) {
        console.log('---');
        console.log('New Promise');
        console.log(Date.now());
        this.promise = new Promise(function (resolve, reject) {
          setTimeout(function(){
            console.log('---');
            console.log(Date.now());
            console.log('first fetch')
            resolve();
          }, 2000);
        }.bind(this));
      }
      return this.promise;
    },

    then: function (resolved, rejected) {
      return this.fetch().then(resolved, rejected);
    }
  };

  var user = new User();

  user.then(function () {
    console.log('---');
    console.log(Date.now());
    console.log('immediate fetched')
  });

  setTimeout(function () {
    user.then(function () {
      console.log('---');
      console.log(Date.now());
      console.log('before fetched')
    });
  }, 1000);

  setTimeout(function () {
    user.then(function () {
      console.log('---');
      console.log(Date.now());
      console.log('after fetched')
    });
  }, 5000);
})();
