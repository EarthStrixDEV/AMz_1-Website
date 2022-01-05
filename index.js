const time_showing = () => {
  setInterval(() => {
    var times = new Date();
    times.toLocaleDateString();
    var st = document.getElementById("time_show");
    st.innerHTML = times;
  }, 1000);
};

const auto_darkmode = () => {
  var ele_bg = document.getElementsByClassName("text-container");
  var ele_bg_conf = confirm("Are you change to Dark Mode");
  if (ele_bg_conf == true) {
    ele_bg.style.backgroundColor = "black";
    alert("Changed");
  } else {
    alert("None change");
  }
};
