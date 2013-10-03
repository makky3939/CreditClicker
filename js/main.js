$(window).load(function (){

var credit = 0;

var items = [
	{
		name:"hoge",
		price:10,
		effect:0.1
	},
	{
		name:"hoge2",
		price:200,
		effect:0.2
	}
];

function check_items(){
	console.log(items);
}check_items();


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

$("#itembox").click(function(event){
  //alert(event.type);
  credit = credit - 10;
  drawCredit();
});

setTimeout(function loop_credit(){
  drawCredit();console.log("reflesh");
  setTimeout(loop_credit,2000);
},2000);

});



