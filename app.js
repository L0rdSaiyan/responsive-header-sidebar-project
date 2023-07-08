const header = document.getElementById("header");
const navigationHeader = document.getElementById("navigation_header");

let content = document.getElementById("content");
let showSidebar = false;

function toggleSideBar() {
  showSidebar = !showSidebar;

  if (showSidebar) {
    navigationHeader.style.marginLeft = '-10vw'
    navigationHeader.style.animationName = 'showSideBar'
    content.style.filter = 'blur(2px)';
  } else {
    navigationHeader.style.marginLeft = "-100vw";
    navigationHeader.style.animationName = ''
    content.style.filter = ''


  }
}
