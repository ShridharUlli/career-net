function myFunction() {
  var navContainer = document.querySelector("#myLinks");
  if (navContainer.classList.contains("hidden")) {
    navContainer.classList.remove("hidden");
} else {
    navContainer.classList.add("hidden");    
  }
}