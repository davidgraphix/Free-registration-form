window.alert('Welcome to David Smart full Course!')
  
  //Get a reference to the submit button
  var submitButton = document.getElementById("button");

  // Attach a click event listener to the submit button
  submitButton.addEventListener("click", function(event) {
    event.preventDefault(); // prevent the form from submitting normally
    alert("YOUR FORM HAS BEEN SUBMITTED"); // show an alert box
    window.location.href = "mailto:bamideledavidsmart40@gmail.com"; // redirect to your Gmail
  });
