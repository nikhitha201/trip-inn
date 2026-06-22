const startBtn =
document.getElementById("startBtn");

const planner =
document.getElementById("planner");

startBtn.addEventListener("click",()=>{

planner.scrollIntoView({
behavior:"smooth"
});

});
const budget =
document.getElementById("budget");

const budgetValue =
document.getElementById("budgetValue");

budget.addEventListener("input",()=>{

budgetValue.innerText =
"₹" + budget.value;

});
const plans = {

2:[
{
day:"Day 1",

morning:"Charminar",

afternoon:"Paradise Biryani",

evening:"Hussain Sagar",

stay:"Budget Hotel"
},

{
day:"Day 2",

morning:"Golconda Fort",

afternoon:"Local Lunch",

evening:"Shopping at Laad Bazaar",

stay:"Departure"
}
],

3:[
{
day:"Day 1",

morning:"Charminar",

afternoon:"Paradise",

evening:"Birla Mandir"
},

{
day:"Day 2",

morning:"Ramoji Film City",

afternoon:"Food Court",

evening:"Film City Tour"
},

{
day:"Day 3",

morning:"Golconda Fort",

afternoon:"Lunch",

evening:"Shopping"
}
],

4:[

{
day:"Day 1",

morning:"Charminar",

afternoon:"Paradise",

evening:"Hussain Sagar"
},

{
day:"Day 2",

morning:"Ramoji Film City",

afternoon:"Food Court",

evening:"Shows"
},

{
day:"Day 3",

morning:"Salar Jung Museum",

afternoon:"Lunch",

evening:"Birla Mandir"
},

{
day:"Day 4",

morning:"Golconda Fort",

afternoon:"Shopping",

evening:"Departure"
}
]

};
document
.getElementById("generate")
.addEventListener("click",()=>{

const duration =
document.getElementById("duration").value;

const result =
document.getElementById("result");

result.innerHTML="";

plans[duration].forEach(day=>{

result.innerHTML +=

`
<div class="day-card">

<h2>${day.day}</h2>

<p>
🌅 Morning:
${day.morning}
</p>

<p>
🍽 Afternoon:
${day.afternoon}
</p>

<p>
🌇 Evening:
${day.evening}
</p>

</div>
`;

});

});
