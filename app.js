const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const countdownFrom = new Date('January 1, 2024 00:00:00');

function countdownFunc() {
    const currentTime = new Date();
    const gapTime = countdownFrom - currentTime;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const actualDay = Math.floor((gapTime / day));
    const actualHour = Math.floor((gapTime % day) / hour);
    const actualMinute = Math.floor((gapTime % hour) / minute);
    const actualSecond = Math.floor((gapTime % minute) / second);

    days.innerHTML = actualDay;
    hours.innerHTML = actualHour < 10 ? '0' + actualHour : actualHour;
    minutes.innerHTML = actualMinute < 10 ? '0' + actualMinute : actualMinute
    seconds.innerHTML = actualSecond < 10 ? '0' + actualSecond : actualSecond;
    seconds.style.color = generateRandomColor();
    document.getElementById('second').style.color = generateRandomColor();
}

setInterval(countdownFunc, 1000);

function generateRandomColor() {
    let maxValue = 0xffffff; // 16777215;
    let randomNum = Math.random() * maxValue;
    randomNum = Math.floor(randomNum);
    randomNum = randomNum.toString(16);
    let randomColor = randomNum.padStart(6, 0);
    return `#${randomColor.toUpperCase()}`;
}
