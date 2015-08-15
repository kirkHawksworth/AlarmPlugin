var alarm = {
    set: function(alarmDate, successCallback, errorCallback) {
        if(alarmDate < new Date())
    		return;

        cordova.exec(
            successCallback,
            errorCallback,
            "AlarmPlugin",
            "programAlarm",
            [alarmDate]
        );
    },
    cancel: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            "AlarmPlugin",
            "cancelAlarm",
            []
        );

    }
};
module.exports = alarm;
