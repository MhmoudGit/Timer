const twoDigits = (n) => {
   return n < 10 ? '0' + n : '' + n
}

let sec = 0
let min = 0
let hr = 0

setInterval(() => {
    sec ++
    if (sec === 60) {
        min ++
        sec = 0
    }
    if (min === 60) {
        hr ++
        min = 0
    }
    process.stdout.write(`\r time hr/min/sec  ${twoDigits(hr)}:${twoDigits(min)}:${twoDigits(sec)} `);
}, 1);

