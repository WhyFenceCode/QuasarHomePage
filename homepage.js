document.getElementById('url-input-homepage').addEventListener('submit', function(event) {
    event.preventDefault(); // stop the form from submitting
    let urliniput = document.getElementById('url-innerurl-homepage').value;

    window.location.href = "https://www.google.com/search?q=" + replaceSpaces2(urliniput, "+");
});

function replaceSpaces2(inputString, char) {
    return inputString.split(' ').join(char);
}

function changehomepagetheme(homepagetheme){
    try {
        document.getElementById('theme_css').href = "themes/" + homepagetheme;
    } catch (error) {
        try {
            document.getElementById('theme_css').href = "themes/ocean.css";
        } catch (error1) {
            console.error(error1);
        }
    }
}