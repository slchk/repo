let startDate = new Date(Date.UTC(2000, 0, 1));  
console.log(startDate);
let weekday = startDate.getDay();
console.log(weekday);
let firstFriday;

if (weekday === 5) {
    firstFriday = startDate;
} else {
    firstFriday = startDate;
    let myWeekday = weekday;
    while (myWeekday !== 5) {
        firstFriday.setDate(firstFriday.getDate() + 1);
        myWeekday = firstFriday.getDay();
    }
}

console.log(firstFriday);

let count = 0;
while (firstFriday < Date.now()) {
    firstFriday.setDate(firstFriday.getDate() +7);
   let fridayDate = firstFriday.getDate();
   if (fridayDate === 13) {
       count = count+1;
   }
}

console.log(count);