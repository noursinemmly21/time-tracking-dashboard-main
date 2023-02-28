let dailytime=document.querySelector(".times .daily");
let weeklytime=document.querySelector(".weekly");
let monthlytime=document.querySelector(".monthly");

let work_time=document.querySelector(".work_time");
let work_time_prev=document.querySelector(".work-time-prev");

let play_time=document.querySelector(".play_time");
let play_time_prev=document.querySelector(".play-time-prev");

let study_time=document.querySelector(".study_time");
let study_time_prev=document.querySelector(".study-time-prev");

let exercise_time=document.querySelector(".exercise_time");
let exercise_time_prev=document.querySelector(".exercise-time-prev");

let social_time=document.querySelector(".social_time");
let social_time_prev=document.querySelector(".social-time-prev");

let self_care_time=document.querySelector(".Self_Care_time");
let Self_Care_time_prev=document.querySelector(".Self_Care-time-prev");

dailytime.onclick=()=>{
    work_time.innerHTML="5 hrs";
    work_time_prev.innerHTML="Yesterday: 7";
    play_time.innerHTML="1 hrs";
    play_time_prev.innerHTML="Yesterday: 2";
    study_time.innerHTML="0 hrs";
    study_time_prev.innerHTML="Yesterday: 1";
    exercise_time.innerHTML="1 hrs";
    exercise_time_prev.innerHTML="Yesterday: 1";
    social_time.innerHTML="1 hrs";
    social_time_prev.innerHTML="Yesterday: 3";
    self_care_time.innerHTML="0 hrs";
    Self_Care_time_prev.innerHTML="Yesterday: 1";
}
weeklytime.onclick=()=>{
    work_time.innerHTML="32 hrs";
    work_time_prev.innerHTML="Last Week: 36";
    play_time.innerHTML="10 hrs";
    play_time_prev.innerHTML="Last Week: 8";
    study_time.innerHTML="4 hrs";
    study_time_prev.innerHTML="Last Week: 7";
    exercise_time.innerHTML="4 hrs";
    exercise_time_prev.innerHTML="Last Week: 5";
    social_time.innerHTML="5 hrs";
    social_time_prev.innerHTML="Last Week: 10";
    self_care_time.innerHTML="2 hrs";
    Self_Care_time_prev.innerHTML="Last Week: 36";
}
monthlytime.onclick=()=>{
    work_time.innerHTML="103 hrs";
    work_time_prev.innerHTML="Last month: 128";
    play_time.innerHTML="23 hrs";
    play_time_prev.innerHTML="Last month: 29";
    study_time.innerHTML="13 hrs";
    study_time_prev.innerHTML="Last month: 19";
    exercise_time.innerHTML="11 hrs";
    exercise_time_prev.innerHTML="Last month: 18";
    social_time.innerHTML="21 hrs";
    social_time_prev.innerHTML="Last month: 23";
    self_care_time.innerHTML="7 hrs";
    Self_Care_time_prev.innerHTML="Last month: 36";
}