window.addEventListener("DOMContentLoaded", () => {
  // Loader
  const loader=document.querySelector('.loader');
  setTimeout(()=>{
    loader.style.display='none'
    loader.style.opacity=0;
  },2000)
  // loader
  // toggle classlist
  const btn = document.querySelector(".toggle .fas");
  const saidbar = document.querySelector(".saidbar");
  btn.addEventListener("click", () => {
    saidbar.classList.toggle("newtranslate");
  });
// toggle classlist

  const saidbarItems = document.querySelector(".saidbar-items"),
    saidbarItem = document.querySelectorAll(".saidbar-item"),
    saidbarContent = document.querySelectorAll(".saidbar-content");
  console.log(saidbarContent);

  function saidbarNew() {
    saidbarContent.forEach((item) => {
      item.classList.add("none");
      item.classList.remove("block");
    });
    saidbarItem.forEach(function (item) {
      item.classList.remove("active");
    });
  }
  saidbarNew();

  function saidbarOn(i = 0) {
    saidbarContent[i].classList.add("block");
    saidbarContent[i].classList.remove("none");
    saidbarItem[i].classList.add("active");
  }
  saidbarOn();

  saidbarItems.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("saidbar-item")) {
      saidbarItem.forEach((item, i) => {
        if (event.target == item) {
          saidbarNew();
          saidbarOn(i);
        }
      });
    }
  });
});
