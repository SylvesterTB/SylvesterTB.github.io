var light = true

function changeCSS()
{
    var linkElement = document.querySelector('link[rel="stylesheet"]');
       var buttonElement = document.querySelector('.nav-button');
    if(light)
    {
    linkElement.href = "dark.css";
        buttonElement.textContent = "Light";
        light = false
    }
    else
    {
        linkElement.href = "style.css";
        buttonElement.textContent = "Dark";
        light = true
    }
    }