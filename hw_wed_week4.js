
var headerDiv = document.createElement("div");
headerDiv.setAttribute("class", "header");
headerDiv.innerHTML =
  "<h1 class=spaced>High On Coding</h1> <h2 class=spaced>Home</h2> <h2 class=spaced>Categories</h2>";
var containerDiv = document.querySelector(".container");
containerDiv.append(headerDiv);

var curseDiv = document.createElement("div");
curseDiv.setAttribute("class", "curse");
curseDiv.innerHTML =
  "<h2>Curse of the Current Reviews</h2> <br> When you want to buy an application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of you webpage. Their choice is dependent on three importatant factors price, screenshot and reviews.";
containerDiv.append(curseDiv);

var textDiv = document.createElement("div");
textDiv.setAttribute("class", "text");
textDiv.innerHTML =
  "<div class=blueHeader>Hello WatchKit</div> <br> Last month apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to ceate Apple Watch applications. In this article we are goin to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.";
containerDiv.append(textDiv);

var commentsDiv = document.createElement("div");
commentsDiv.setAttribute("class", "comments");
commentsDiv.innerHTML = "&nbsp 12 Comments &nbsp &nbsp 124 likes";
containerDiv.append(commentsDiv); 

var textDiv = document.createElement("div");
textDiv.setAttribute("class", "text");
textDiv.innerHTML =
  "<div class=blueHeader>Introduction to Swift</div>Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairlu new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concept in the Wwift language and how uou can get started. <br> ";
containerDiv.append(textDiv);

var commentsDiv = document.createElement("div");
commentsDiv.setAttribute("class", "comments");
commentsDiv.innerHTML = "&nbsp 15 Comments &nbsp &nbsp 45 likes";
containerDiv.append(commentsDiv);


