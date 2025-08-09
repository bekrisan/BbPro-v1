function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav-menu") {
    x.className += " responsive";
  } else {
    x.className = "nav-menu";
  }
}
    document.addEventListener('DOMContentLoaded',()=>{
        let darkToggleBtn=document.getElementById("toggle-dark-btn");
        
        document.body.classList.toggle('toggle-dark-btn').addEventListener('click',console.log('dark button clicked'));
        // localStorage.setItem('toggle-dark-btn',document.body.classList.contains('toggle-dark-btn'));
    })
