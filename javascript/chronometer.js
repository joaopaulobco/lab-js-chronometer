class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;

  
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime +=1;
      if (typeof printTimeCallback === 'function') {
        printTimeCallback();
      }
    }, 1000);

  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
    
  }

  getSeconds() {
    
    let seconds = 0;
    seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    let str = value.toString();
    let dec = ("0" + str).slice(-2);
    return dec;
  }

  stop() { 
   clearInterval(this.intervalId) 
  }

  reset() {
    this.currentTime = 0;
  }

  split () {
    let min = this.computeTwoDigitNumber(this.getMinutes());
    let sec = this.computeTwoDigitNumber(this.getSeconds());
    return `${min}:${sec}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
