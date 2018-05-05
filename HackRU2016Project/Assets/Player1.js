#pragma strict

var moveUp : KeyCode;

var moveDown : KeyCode;

var moveLeft: KeyCode;

var moveRight: KeyCode;

var movement : float = 10;
var player1Score = 0;

function Update () {

 if (Input.GetKey(moveUp)){

  GetComponent.<Rigidbody2D>().velocity.y = movement;

 }

 else if (Input.GetKey(moveDown)) {

  GetComponent.<Rigidbody2D>().velocity.y = -movement;
 }

else if (Input.GetKey(moveLeft)){

  GetComponent.<Rigidbody2D>().velocity.x = -movement;
 }

 else if (Input.GetKey(moveRight)){

  GetComponent.<Rigidbody2D>().velocity.x = movement;
 
 }


 
 }
 
 //function IsTouching(other:Collider2D){
	
 	//if(other.name == "topWall"){
		//Destroy(gameObject);
	//}
 //}
 function IsTrigger2D (other:Collider2D){
	
		Destroy(other);
	}
	//else if(other.name == "player01"){
	
	//}
//}
 