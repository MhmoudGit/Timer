const hrHtml = document.getElementById('hr')
const minHtml = document.getElementById('min')
const secHtml = document.getElementById('sec')

let sec = 0
let min = 0
let hr = 0
let interval = null

// printing 2 digits 00
const twoDigits = (n) => {
	return n < 10 ? '0' + n : '' + n
}

const timer = () => {
	sec++
	if (sec === 60) {
		min++
		sec = 0
	}
	if (min === 60) {
		hr++
		min = 0
	}
	secHtml.innerHTML = twoDigits(sec)
	minHtml.innerHTML = twoDigits(min)
	hrHtml.innerHTML = twoDigits(hr)
}

const start = () => {
	if (interval === null) {
		interval = setInterval(timer, 1000)
	}
}

const stop = () => {
	if (interval !== null) {
		clearInterval(interval)
		interval = null
	}
}

const restart = () => {
	sec = 0
	min = 0
	hr = 0
    secHtml.innerHTML = twoDigits(sec)
	minHtml.innerHTML = twoDigits(min)
	hrHtml.innerHTML = twoDigits(hr)
}
