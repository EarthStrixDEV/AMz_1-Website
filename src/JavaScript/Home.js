//Object Control
var element_nav = {
  div_header: document.querySelector(".head-bar-container"),
  a: document.querySelectorAll(".nav-header"),
  footer: document.querySelector(".footer-data"),
  footer_font: document.querySelectorAll(".footer-data-credit"),
  footer_font_h3: document.querySelector("h3"),
  h1: document.getElementById("amz1_name"),
  h1_background_div: document.querySelector(".header-con2"),
  h1_background_span: document.querySelector(".header-name-con2"),
};

var console_log = {
  log_1: console.log(element_nav.footer_font),
  log_2: console.log(element_nav.h1_background_div),
  log_3: console.log(element_nav.h1_background_span)
};

//Function Control
const theme = () => {
  for (let i = 0; i < element_nav.a.length; i++) {
    var element = element_nav.a[i];
    element.style.color = "black";
    console.log(element);
  }

  var inner_control = {
    div_style: element_nav.div_header.style.backgroundColor = "white",
    footer_style: element_nav.footer.style.backgroundColor = "white",
    h1_name: element_nav.h1.style.color = 'black',
    h1_background_div: element_nav.h1_background_div.style.backgroundColor = 'white',
    h1_background_span: element_nav.h1_background_span.style.backgroundColor = 'white',
    footer_h3: element_nav.footer_font_h3.style.color = 'black'
  };

  for (let j = 0; j < element_nav.footer_font.length; j++) {
    var element_footer_font_control = element_nav.footer_font[j];
    element_footer_font_control.style.color = "black";
  }
}

const welcome = () => {
  alert("Welcome to AMz_1🎮🚀");
}

const timeServer = () =>
{
  let time_req = new Date();
  let res_log_date = time_req.toLocaleDateString();
  let res_log_time = time_req.toLocaleTimeString();
  console.log(`${ res_log_date } | ${ res_log_time }`);
  console.log("Server is working...");
}

