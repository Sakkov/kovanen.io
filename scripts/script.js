window.onscroll = function() {
    // Scroll progress indicator
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollIndicator").style.width = scrolled + "%";

    // Scroll down indicator
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector(".scroll-indicator").style.display = "none";
    } else {
        document.querySelector(".scroll-indicator").style.display = "block";
    }
};

fetch("/.netlify/functions/getEnvVars")
    .then((response) => response.json())
    .then((data) => {
        // Set recaptcha site key
        document.querySelector("#recaptcha").setAttribute("data-sitekey", data.RECAPTCHA_SITE_KEY);
        console.log("Recaptcha site key set.")
    })
    .catch((error) => {
        console.error("Error:", error);
    });
