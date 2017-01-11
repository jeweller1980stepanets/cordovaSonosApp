cordova.define("cordova.plugin.sonos.SonosPlugin", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function(arg0, success, error) {
    exec(success, error, "SonosPlugin", "coolMethod", [arg0]);
};

});
