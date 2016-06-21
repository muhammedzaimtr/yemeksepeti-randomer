var sortColumn = $(".ys-reslist-sort");
sortColumn.append('<br><br><button class="random-button random-button-xs" >Random</button><br><br><div class="alert-random alert-success-random randresult"><b> -> </b> <a></a></div>');
var items = [];
var speed = 100;
var counter = 10;
var action = true;
$(".random-button").on('click',function() {
	var action = true;
	var counter = 10;
	var interval = setInterval(randomAnimate, counter);
	$('.ys-item').find('.head').find('.restaurantName').each(function(i,v) { items.push($(this).html() + "|" + "http://yemeksepeti.com" + $(this).attr("href")); });
	var selectedItem = items[Math.floor(Math.random()*items.length)];
	$(".randresult").fadeIn();

	var randomAnimate = function(){
		if (action) {
			if (counter == 150) {
				action = false;
			}
			clearInterval(interval);
			counter = counter + 10;
			var selectedItem = items[Math.floor(Math.random()*items.length)];
			$(".randresult a").html(selectedItem.split("|")[0]);
			$(".randresult a").attr("href",selectedItem.split("|")[1]);
			interval = setInterval(randomAnimate, counter);
			console.log("A");
		}
	}
	var interval = setInterval(randomAnimate, counter);
});


