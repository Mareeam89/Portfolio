document.addEventListener("DOMContentLoaded", function () {
    console.log("Church website loaded!");
    
    // Handle contact form submission
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Message Sent!");
    });
});

