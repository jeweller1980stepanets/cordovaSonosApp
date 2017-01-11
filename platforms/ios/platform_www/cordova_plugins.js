cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova.plugin.sonos.SonosPlugin",
        "file": "plugins/cordova.plugin.sonos/www/SonosPlugin.js",
        "pluginId": "cordova.plugin.sonos",
        "clobbers": [
            "cordova.plugins.SonosPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "cordova.plugin.sonos": "0.0.1"
};
// BOTTOM OF METADATA
});