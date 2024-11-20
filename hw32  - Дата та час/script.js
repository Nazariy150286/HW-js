class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timerElement = document.querySelector(this.selector);
    this.start();
  }

  start() {
    this.updateTimer(); // Оновлюємо таймер одразу при завантаженні

    this.intervalId = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  updateTimer() {
    const currentTime = new Date();
    const time = this.targetDate - currentTime;

    if (time <= 0) {
      clearInterval(this.intervalId);
      this.setTimerValues(0, 0, 0, 0);
      return;
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.setTimerValues(days, hours, mins, secs);
  }

  setTimerValues(days, hours, mins, secs) {
    this.timerElement.querySelector('[data-value="days"]').textContent = days;
    this.timerElement.querySelector('[data-value="hours"]').textContent =
      this.formatValue(hours);
    this.timerElement.querySelector('[data-value="mins"]').textContent =
      this.formatValue(mins);
    this.timerElement.querySelector('[data-value="secs"]').textContent =
      this.formatValue(secs);
  }

  formatValue(value) {
    return String(value).padStart(2, "0"); // Додаємо нуль, якщо число однозначне
  }
}
