// Adding the text with the typing animation on the home page
const btnIntro = $(".btn-intro");
const btnMe = $(".btn-me");
const btnVlog = $(".btn-vlog");
const aboutSect = $(".about-me");
const skillSect = $(".skills");
const skillSectList = $(".skills").children();
const solo = $(".link");
const options = {
    threshold: 0.5,
    rootmargin: "-500px",
};
setTimeout(function () {
  var txt = $("<p></P>").text("A fullstack developer.");
  $("h1").after(txt);
  txt.addClass("intro-p");
}, 2000);
btnIntro.css("opacity", "0");
setTimeout(function () {
  btnIntro.css("opacity", "1");
}, 3000);

// Social Icons hover button animation
btnMe.hover(
  function () {
    btnVlog.attr("src", "images/vlogger.gif");
    solo.css("display", "block");
  },
  function () {
    btnVlog.attr("src", "images/vlogger.png");
    solo.css("display", "none");
  }
);
// Adding animation to the list items in me section
skillSectList.css("opacity", "0");
const observer = new IntersectionObserver(function (entries, observer) {
  if (entries[0].isIntersecting === true) {
    skillSectList.css("opacity", "1");
    skillSectList.css("animation", "slidein 2s");
  }
}, options);

observer.observe(skillSect[0]);

// Adding the story button click animation
function showStory() {
    skillSect.css("display", "none");
    aboutSect.css("animation", "lazyload 2s");
    aboutSect.css("display", "block");
};
function showSkills() {
    skillSect.css("display", "grid");
    aboutSect.css("display", "none");
};
