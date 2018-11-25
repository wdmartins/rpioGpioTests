let Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
let GPIO_PIN_25 = 25;
let GPIO_PIN_26 = 26;
let GPIO_PIN_19 = 19;

let led = new Gpio(GPIO_PIN_26, 'out'); //use GPIO pin 17 as output
let buzzer = new Gpio(GPIO_PIN_19, 'out'); //use GPIO pin 17 as output
let sensor = new Gpio(GPIO_PIN_25, 'in', 'both'); //use GPIO pin 4 as input, and 'both' button presses, and releases should be handled
let STATUS_ON = 1;
let STATUS_OFF = 0;
let ledStatus = STATUS_OFF


led.writeSync(STATUS_OFF);
buzzer.writeSync(STATUS_OFF);
while(true) {
    let ledNewStatus = sensor.readSync();
    if (ledNewStatus !== ledStatus) {
        console.log(`Status Change: New Status= ${ledNewStatus}`);
        ledStatus = ledNewStatus;
        led.writeSync(ledStatus);
        buzzer.writeSync(ledStatus);
    }
}
