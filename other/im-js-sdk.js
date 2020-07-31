/* eslint-disable consistent-this */

// var Sdk = function (options) {
//   this._o = options || {};
// };

function IMSdk(options) {
  this._o = options || {};
  this.a = 111;
  this.setA = this.setA.bind(this);
  this.device_id = IMSdk.guid();
}

IMSdk.HEADSIZE = 12;
IMSdk.VERSION = 1;

IMSdk.prototype.start = function () {
  console.log('start im service', this.setA);
  console.log('start im HEADSIZE', IMSdk.HEADSIZE);
};

IMSdk.prototype.setA = function () {
  var self = this;
  self.a = 123;
};

IMSdk.guid = function () {
  return 'xxxx-xxxx-xxxx-xxxx';
};

// module.exports = IMSdk;

// --------------------------------
// api.js;
var Api = function (name, endpoint) {
  this.name = name;
  this.endpoint = endpoint;
};
// module.exports = Api;
// ------------------------------
// user.js
// var ApiDef = require('./api');
// var apiBaseUrl = 'https://api.netease.im/nimserver/user';
// var apis = [];
// var types = {};
// var api = new ApiDef('createUser',  apiBaseUrl + '/create.action');
// apis.push(api);
// api = new ApiDef('updateUser',  apiBaseUrl + '/update.action');
// apis.push(api);
// api = new ApiDef('refreshToken',  apiBaseUrl + '/refreshToken.action');
// apis.push(api);
// api = new ApiDef('blockUser',  apiBaseUrl + '/block.action');
// apis.push(api);
// api = new ApiDef('unblockUser',  apiBaseUrl + '/unblock.action');
// apis.push(api);
// module.exports = { apis: apis, types: types };
