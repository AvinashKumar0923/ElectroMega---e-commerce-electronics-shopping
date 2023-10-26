let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function showMessage(){
  let name=document.getElementById("name").value;
  let email=document.getElementById("email").value;
  let mobno=document.getElementById("mobno").value;
  let cvalue=document.getElementById("cvalue").value;
  let qty=document.getElementById("qty").value;
  let msg=document.getElementById("message-box").value;
  if((cvalue>=50 && cvalue<=50000) && mobno.toString().length===10 && email.indexOf('@') > -1 && upi.indexOf('@') > -1){
  if((name==="" || email==="" || mobno==="" || cvalue==="" || qty==="" || msg==="")===false){
      document.getElementById("demo").innerHTML=`<hr><h1>Thanks for Purchasing the Gift Card!</h1><br>The following gift card of worth ${cvalue} has been sent to:<br>Name: ${name}<br>Email: ${email}<br>Contact Number: ${mobno}<br>Message: ${msg}`;
  }
  else{
      document.getElementById("demo").innerText="Please fill in the details again!"
  }
}
else{
  document.getElementById("demo").innerText="Please fill in the details again!"
}
}