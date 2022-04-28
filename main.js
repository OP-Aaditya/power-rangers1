
var canvas = new fabric.Canvas("mycanvas");
 block_y=1;
 block_x=1;

block_image_width = 320;
block_image_height = 420;

var block_image_object;

function new_image(get_image)
{
	fabric.Image.fromURL(get_image , function(Img){
		block_image_object_r=Img;
       block_image_object_r.scaleToWidth(block_image_width);
	   block_image_object_r.scaleToHeight(block_image_height);
	   block_image_object_r.set({
		   top:block_y,
		   left :block_x
	   });
	   canvas.add(block_image_object_r);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
        
		new_image('rr1.png');
		console.log("r");
	}
	if(keyPressed == '71')
	{
		block_x = 250;
	new_image('gr.png');
	console.log("g");
	}
	
	if(keyPressed == '89')
	{
		block_x =400;
		new_image('yr.png');
		console.log("y");
	}
	if(keyPressed == '80')
	{
		block_x = 650;
		new_image('pr.png');
		console.log("p");
	}
	if(keyPressed == '66')
	{
		block_image_width=280;
		block_x = 750;
	new_image('br.png');
	console.log("b");
	}
	
}

