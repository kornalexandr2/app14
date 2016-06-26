// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;
$$.getJSON('http://battlebrotherhood.ru/?json=get_recent_posts', function (data) {
	
	var output="<ul class='news_content'>";
    for (var i in data.posts) {
        output+="<li><b>" + data.posts[i].title + "</b><br> " + data.posts[i].content + "</li>";
    }
    output+="</ul>";

    document.getElementById("placeholder").innerHTML=output;
	
});


	
	
// Add views
var view1 = myApp.addView('#view-1');
var view2 = myApp.addView('#view-2', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view3 = myApp.addView('#view-3');
var view4 = myApp.addView('#view-4');

