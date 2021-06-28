function giveAns(elem) {
  //    If only clicked on arrow:
  //    const parent = elem.parentNode;
  //   if (getComputedStyle(parent.nextElementSibling).display === "none") {
  //     parent.nextElementSibling.style.display = "block";
  //     elem.style.transform = "rotate(180deg) scale(0.7)";
  //   } else {
  //     parent.nextElementSibling.style.display = "none";
  //     elem.style.transform = "rotate(0deg) scale(0.7)";
  //   }
  if (getComputedStyle(elem.nextElementSibling).display === "none") {
    elem.nextElementSibling.style.display = "block";
    elem.style.fontWeight = "800";
    elem.children[1].style.transform = "rotate(180deg)";
  } else {
    elem.nextElementSibling.style.display = "none";
    elem.style.fontWeight = "normal";
    elem.children[1].style.transform = "rotate(0deg)";
  }
}
