var score=0;
var total=5;
var point=1;
var highest=total*point;

function init(){
	sessionStorage.setItem('a1','b');
	sessionStorage.setItem('a2','d');
	sessionStorage.setItem('a3','c');
	sessionStorage.setItem('a4','a');
	sessionStorage.setItem('a5','b');
}

$(document).ready(function(){
	
	
	$('#submit').click(function(){
			process('q1');
			process('q2');
			process('q3');
				process('q4');
				process('q5');
	});
});

function process(q){
	if(q=="q1"){
		var submitted=$('input[name=q1]:checked').val();
		if(submitted==sessionStorage.a1)
		{
			score++;
		}
	}
	if(q=="q2"){
		var submitted=$('input[name=q2]:checked').val();
		if(submitted==sessionStorage.a2)
		{
			score++;
		}
	}if(q=="q3"){
		var submitted=$('input[name=q3]:checked').val();
		if(submitted==sessionStorage.a3)
		{
			score++;
		}
	}if(q=="q4"){
		var submitted=$('input[name=q4]:checked').val();
		if(submitted==sessionStorage.a4)
		{
			score++;
		}
	}if(q=="q5"){
		var submitted=$('input[name=q5]:checked').val();
		if(submitted==sessionStorage.a5)
		{
			score++;
		}
	$('#results').html('<h1>Score is '+score+' out of 5</h1>');
	return false;	
		
	}
	
	
	
}
window.addEventListener('load',init,false);