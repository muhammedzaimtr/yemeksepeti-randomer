var sortColumn = $(".ys-reslist-sort");
sortColumn.append('<br><br><button class="random-button random-button-xs" >Random</button><br><br><div class="alert-random alert-success-random randresult"><b> -> </b> <span></span></div>');

$(".random-button").on('click',function() {
var items = [];
	$('.ys-item').find('.head').find('.restaurantName').each(function(i,v) { items.push($(this).html()); });
	var selectedItem = items[Math.floor(Math.random()*items.length)];
	$(".randresult").fadeIn();
	$(".randresult span").html(selectedItem);
});