// event listen: click > start the timer
// draw a full border around the timer
// start counting down the timer
// each time the timer counts down, update the border 
// each time the timer counts down, update the text 
// if it counts down to zero > reset the border
// reset timer for another run 

// class Timer > 
//  constructor(durationInput, starButton, pauseButton)
//  start(), pause(), onDurationChange(),tick()

class Timer {
    constructor(durationInput, startButton, pauseButton) {
      this.durationInput = durationInput;
      this.startButton = startButton;
      this.pauseButton = pauseButton;

      this.startButton.addEventListener('click', this.start);
      this.pauseButton.addEventListener('click', this.pause);
    };
    
    start = () => {
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    };

    pause = () => {
        clearInterval(this.interval);

    };

    tick = () => {
        console.log('tick');
    };

    importantMethodToCall() {
      console.log('Important thing is done!');
    }
  
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);
