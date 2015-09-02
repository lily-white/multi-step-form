var current_ms, next_ms, previous_ms;
$(".next").click(function (){
	current_ms = $(this).parent();
	next_ms = current_ms.next();

	next_ms.show();
	current_ms.hide();
	$("#step-menu li").eq($("#msform fieldset").index(next_ms)).addClass("current");
});
$(".previous").click(function (){
	current_ms = $(this).parent();
	previous_ms = current_ms.prev();

	previous_ms.show();
	current_ms.hide();
	$("#step-menu li").eq($("#msform fieldset").index(current_ms)).removeClass("current");
	$("#step-menu li").eq($("#msform fieldset").index(previous_ms)).addClass("current");
});