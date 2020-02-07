

var container = document.querySelector('#container')

container.className = "container-fluid";



var link1 = document.createElement('a');
link1.textContent = "HighOnCoding";
link1.className = "nav-item nav-link active";
link1.setAttribute("href", "#");


var link2 = document.createElement('a');
link2.textContent = "Home";
link2.className = "nav-item nav-link active small pl-5";
link2.setAttribute("href", "#");


var link3 = document.createElement('a');
link3.textContent = "Categories";
link3.className = "nav-item nav-link small pl-5";
link3.setAttribute("href", "#");


var headerDiv = document.createElement('div');

headerDiv.className = "nav navbar-nav h3";

headerDiv.append(link1);
headerDiv.append(link2);
headerDiv.append(link3);


var headerNav = document.createElement('nav');
headerNav.className = "navbar navbar-expand navbar-dark p-4";
headerNav.style = "background-color: rgb(82, 167, 250); ";

headerNav.append(headerDiv);

container.append(headerNav);


// this is the function
function createNewElement(element, tag, text, classes, link)
{
    var newElement = document.createElement(tag);
    if (classes.length > 0)
    {
        newElement.className = classes;
    }
    if (text.length > 0)
    {
        newElement.textContent = text
    }
    if (tag == 'a')
    {
        newElement.setAttribute('href', link)
    }
    element.append(newElement);
    return newElement;
}