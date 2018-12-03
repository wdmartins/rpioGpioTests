let sensor = require("node-dht-sensor");
let SENSOR_TYPE_DHT11 = 11;
let GPIO_21 = 21;

sensor.read(SENSOR_TYPE_DHT11, GPIO_21, function (err, temp, humidity) {
    if(!err) {
        console.log(`Temperature: ${temp.toFixed(1)} °C. Humidity: ${humidity.toFixed(1)} %`);
    } else {
        console.log(`Error reading DHT11. Error: ${err}`);
    }
});