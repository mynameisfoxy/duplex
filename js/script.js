$(document).ready(function() {


	$(".tab").on("click", function(){
		$(".tab").removeClass('active-tab');
		$(this).addClass('active-tab');

		console.log($(this).index());
		$(".tab-content").removeClass('active-content');
		$(".tab-content").eq($(this).index()).addClass('active-content');
		event.preventDefault();
	});
	

});