// let dailytime=document.querySelector(".daily");
// let weeklytime=document.querySelector(".weekly");
// let monthlytime=document.querySelector(".monthly");

// let work_time=document.querySelector(".work_time");
// let work_time_prev=document.querySelector(".work-time-prev");

// let play_time=document.querySelector(".play_time");
// let play_time_prev=document.querySelector(".play-time-prev");

// let study_time=document.querySelector(".study_time");
// let study_time_prev=document.querySelector(".study-time-prev");

// let exercise_time=document.querySelector(".exercise_time");
// let exercise_time_prev=document.querySelector(".exercise-time-prev");

// let social_time=document.querySelector(".social_time");
// let social_time_prev=document.querySelector(".social-time-prev");

// let self_care_time=document.querySelector(".Self_Care_time");
// let Self_Care_time_prev=document.querySelector(".Self_Care-time-prev");

let item=document.querySelectorAll(".times h6")
console.log(item)
item.forEach((e)=>{
    e.addEventListener("click",()=>{
        item.forEach((d)=>{
            d.classList.remove("active")
            
        })
        e.classList.add("active")
        e.style.color="red"
    })
    
})
// dailytime.onclick=()=>{
//     dailytime.style.color="red"
//     work_time.innerHTML="5 hrs";
//     work_time_prev.innerHTML="Yesterday: 7";
//     play_time.innerHTML="1 hrs";
//     play_time_prev.innerHTML="Yesterday: 2";
//     study_time.innerHTML="0 hrs";
//     study_time_prev.innerHTML="Yesterday: 1";
//     exercise_time.innerHTML="1 hrs";
//     exercise_time_prev.innerHTML="Yesterday: 1";
//     social_time.innerHTML="1 hrs";
//     social_time_prev.innerHTML="Yesterday: 3";
//     social_time.innerHTML="0 hrs";
//     self_care_time.innerHTML="Yesterday: 1";
// }