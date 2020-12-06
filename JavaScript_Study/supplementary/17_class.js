// ! Class
class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      // if (this.callback) {
      //   this.callback(this.counter);
      // }
      this.callback && this.callback(this.counter);
    }
  }
}

function printSomething(num) {
  console.log(`wow! ${num}`);
}

function alertNum(num) {
  alert(`alert! ${num}`);
}

const coolCounter = new Counter(printSomething);

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
