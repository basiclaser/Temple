function calculateBasic() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var hoursB = (hours * 60) * 60;
        var minutesB = minutes * 60;
        var secondsB = seconds;
        var seconds = (hoursB + minutesB + secondsB)
        return seconds;
}

function updateTime() {
        var basic = calculateBasic();
}
updateTime();
