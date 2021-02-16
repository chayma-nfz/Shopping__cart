
$(document).ready(function(){
  	update_amounts();
  	$('.qty, .price').on('', function(e) {
	  	update_amounts();
  	});
});
function update_amounts(){
	var sum = 0.0;
	  	$('#myTable > tbody  > tr').each(function() {
			var qty = $(this).find('.qty').val();
		  	var price = $(this).find('.price').val();
		  	var amount = (qty*price)
		  	sum+=amount;
		  	$(this).find('.amount').text(''+amount);
	  	});
	$('.total').text(sum);
}


var incrementQty;
var decrementQty;
var plusBtn  = $(".cart-qty-plus");
var minusBtn = $(".cart-qty-minus");
var incrementQty = plusBtn.click(function() {
	var $n = $(this)
		.parent(".button-container")
		.find(".qty");
	$n.val(Number($n.val())+1 );
	update_amounts();
});

var decrementQty = minusBtn.click(function() {
		var $n = $(this)
		.parent(".button-container")
		.find(".qty");
	var QtyVal = Number($n.val());
	if (QtyVal > 0) {
		$n.val(QtyVal-1);
	}
	update_amounts();
});




var mylist = Array.from(document.getElementsByClassName('myList'));
var heart = Array.from(document.getElementsByClassName("heart"));

function changeColor (el) {
    if(el.target.style.color !== 'red'){
        el.target.style.color ="red"
    }
    else {
        el.target.style.color = "black"
    }
}

for (let i = 0 ; i < mylist.length ; i++)
{
heart[i].addEventListener('click' , changeColor)
}











