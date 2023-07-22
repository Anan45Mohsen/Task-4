const clockElement = document.getElementById('clock');


function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const time = `${hours}h :${minutes}m :${seconds}s`;
  
 
    clockElement.innerHTML = time;
  }
  
  // Update the clock immediately
  updateClock();
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
//   function calculateDaysSince(startDate) {
//     const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
//     const currentDate = new Date();
//     const start = new Date(startDate);
//     const timeDiff = Math.abs(currentDate.getTime() - start.getTime());
//     const daysDiff = Math.floor(timeDiff / oneDay);
  
//     return daysDiff;
//   }
  
//   function updateCounter() {
//     const startDate = '2023-01-01'; // Specify your desired start date
//     const daysSince = calculateDaysSince(startDate);
  
//     const counterElement = document.getElementById('dyas');
//     counterElement.innerHTML = `Days since ${startDate}: ${daysSince}`;
  
//     setTimeout(updateCounter, 86400000); // Update counter every 24 hours (24 * 60 * 60 * 1000 milliseconds)
//   }
  
//   // Start updating the counter
//   updateCounter();

 