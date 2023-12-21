document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // You can use the form data here, e.g., send it to your server using AJAX
    console.log('Form data submitted:', event.target);


});
document.getElementById("home").addEventListener("click", function() {
    sessionStorage.clear();
    window.open("1landingpage.html", "_blank");
    document.getElementById("signup-form").reset();
    window.close(); 



});

