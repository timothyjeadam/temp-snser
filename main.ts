basic.forever(function () {
    datalogger.logData([datalogger.createCV("\"Temperature", input.temperature())])
    basic.pause(2000)
})
