#pragma strict

static var score:int=0;
static var health:int=5;
var counter : int;

var textStyle:GUISkin;


function OnGUI()
{
	GUI.skin = textStyle;

	GUI.Label(Rect(5,5,150,50),"Score: "+score);
	GUI.Label(Rect(160,5,150,50),"Health: "+health);
	
	}


function Start () {

}


function Update () {
	
if (transform.position.y <= -4.2f) {
    transform.position = new Vector2(transform.position.x, -4.2f);
} else if (transform.position.y >= 4.2f) {
    transform.position = new Vector2(transform.position.x, 4.2f);
}
	
	if (Input.GetKey ("up")) {
	
		transform.Translate(Vector3.up * 10 * Time.deltaTime);
		
		
	} else if (Input.GetKey ("down")) {
	
		transform.Translate(Vector3.down * 10 * Time.deltaTime);
		

	}
	
	if (health < 1){
	
		Destroy(this.gameObject);
	
	}
	
	
}