cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/network.js",
        "id": "org.apache.cordova.network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/Connection.js",
        "id": "org.apache.cordova.network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.battery-status/www/battery.js",
        "id": "org.apache.cordova.battery-status.battery",
        "clobbers": [
            "navigator.battery"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassError.js",
        "id": "org.apache.cordova.device-orientation.CompassError",
        "clobbers": [
            "CompassError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassHeading.js",
        "id": "org.apache.cordova.device-orientation.CompassHeading",
        "clobbers": [
            "CompassHeading"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/compass.js",
        "id": "org.apache.cordova.device-orientation.compass",
        "clobbers": [
            "navigator.compass"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/com.admob.google/www/admob.js",
        "id": "com.admob.google.AdMobAds",
        "clobbers": [
            "window.admob",
            "window.tappx"
        ]
    },
    {
        "file": "plugins/com.connectivity.monitor/www/connectivity.js",
        "id": "com.connectivity.monitor.connectivity",
        "clobbers": [
            "window.connectivity"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.device": "0.3.0",
    "org.apache.cordova.network-information": "0.2.15",
    "org.apache.cordova.battery-status": "0.2.12",
    "org.apache.cordova.device-orientation": "0.3.11",
    "org.apache.cordova.splashscreen": "1.0.0",
    "com.admob.google": "2.0.13",
    "com.connectivity.monitor": "1.1.0",
    "android.support.v4": "1.0.0",
    "com.google.play.services": "22.0.0"
}
// BOTTOM OF METADATA
});