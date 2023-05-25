let endDate = "20 may 2023 08:20:00 PM"

document.getElementById("endDate").innerText = endDate;
let inputs = document.querySelectorAll("input")
    // const clock = () => {

// }

function clock() {
    let end = new Date(endDate)
    let now = new Date()
    let diff = (end - now) / 1000;

    if (diff < 0) return;

    // convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // convert into hr;
    inputs[1].value = Math.floor(diff / 3600) % 24;
    // convert into min;
    inputs[2].value = Math.floor(diff / 60) % 60;
    // convert into sec;
    inputs[3].value = Math.floor(diff) % 60;
}

// initial call
clock()

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

setInterval(
    () => {
        clock()
    },
    1000
)