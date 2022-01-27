function color() {
  let tar = document.getElementsByClassName("container");
  let tar_time = document.getElementById("time-show");
  let conf = confirm("Are you change?");
  if (conf == true) {
    tar_time.style.backgroundColor = "black";
    tar_time.style.color = "white";
  } else {
    alert("None change!");
  }
}

function time() {
  let time = document.getElementById("time-show");
  setInterval(() => {
    let time_ = new Date();
    let show = time_.toLocaleTimeString();
    time.innerHTML = show;
  }, 1000);
}

//เขียน js เล่นๆ

let arr = Array(10, 20, 30);
let arr_2 = Array(300, 900, 600, 1200, 1455);
console.log(arr);
console.log(arr[2]);

let arr_plus = arr.push(40);
console.log(arr);

let arr_sort = arr.sort();
let arr_sort_2 = arr_2.sort();
console.log(arr_sort);
console.log(arr_sort_2);

let toString = arr.toString();
let toJoin = arr.join("|");
let toPop = arr.pop();
let toConcat = arr.concat(arr_2);

let data_obj = {
  name: "EarthStrix",
  ip: 192.0,
  technology: "JavaScript HTML 0,CSS",
  show: function () {
    return this.name;
  },
};

let employee = {
  name: "EarthStrix",
  salary: 50000,
  OT: 2500,
  showInfo: function () {
    return this.name;
  },
  showSalary: function () {
    return this.salary + this.OT;
  },
};

console.log(toJoin);
console.log(toString);
console.log(toPop);
console.log(toConcat);

console.log(
  "Name :" +
    data_obj.name +
    " " +
    "IP :" +
    data_obj.ip +
    " " +
    "Technology :" +
    data_obj.technology
);
console.log(data_obj.show());
console.log(employee.name);
console.log("This salary :" ,employee.showSalary());
