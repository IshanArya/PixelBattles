#pragma strict
static var playerScore1: int = 0;
static var playerScore2 : int = 0;

var theSkin : GUISkin;

static function Score (wallName : String) {
	if(wallName=="rightWall"){
	playerScore1++;
	}
	else{
	playerScore2++;
	}
	Debug.Log("Player 1 Score is " + playerScore1);
	Debug.Log("Player 2 Score is " + playerScore2);
}
function OnGUI(){
	GUI.skin=theSkin;
	GUI.Label(new Rect(Screen.width/2-150-12,20,100,100), "" + playerScore1);
	GUI.Label(new Rect(Screen.width/2+150-12,20,100,100), "" + playerScore2);
	}