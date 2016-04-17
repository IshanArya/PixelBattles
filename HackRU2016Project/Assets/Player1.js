#pragma strict

var moveUp : KeyCode;

var moveDown : KeyCode;

var moveLeft: KeyCode;

var moveRight: KeyCode;

var movement : float = 10;

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