//really needs its own name space to stop future collisions

$(document).ready(function(){

	//set i equal to the number of input boxes plus one
	var i=$('#nInputs input').length()+1;
	
	//get the last input in nInputs form and attach a click event
	$('#nInputs input:last-child').click(function() {
		$('<div><input type=""text" class="field" name="dynamic[]" value="'+i+'" /></div>').fadeIn('slow').appendTo('.inputs');
		i++;
	});
	
	$('#remove').click(function(){
		if(i>1) {
			$('.field:last').remove();
			i--;
		}	
	}

});