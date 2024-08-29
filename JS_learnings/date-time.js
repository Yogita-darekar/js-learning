//date time
const d = new Date();
console.log(typeof d)
console.log(d)
console.log(d.toString())
console.log(d.toDateString())
console.log(d.toLocaleString())

let date  = new Date(2024,3,14)
console.log(date.toLocaleString())

console.log(d.getDay())

 console.log(date.toLocaleString('default',{
    weekday:"long",
}))

/*
new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)
*/