function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

function setAlarm() {
    const alarmTime = document.getElementById('alarmTime').value;
    const [alarmHour, alarmMinute] = alarmTime.split(':');
    const now = new Date();
    const nowHour = now.getHours();
    const nowMinute = now.getMinutes();
    const alarmDateTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), alarmHour, alarmMinute, 0, 0);
    const timeUntilAlarm = alarmDateTime - now;

    if (timeUntilAlarm <= 0) {
        alert("Please select a time in the future.");
        return;
    }

    setTimeout(() => {
        alert("Alarm!");
    }, timeUntilAlarm);
}

updateClock();
setInterval(updateClock, 1000);