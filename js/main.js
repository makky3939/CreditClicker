$(window).load(function (){

var credit = 0;

function credit_add(){
	credit++;
	console.log(credit);
}

function drawCredit(){
	$("#CreditDispley").html(credit);
}

var event = new jQuery.Event("click");
$("#credit").click(function(event){
  //alert(event.type);
  credit_add();
  drawCredit();
});

});

