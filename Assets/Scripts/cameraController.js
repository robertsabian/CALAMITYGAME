#pragma strict
var cameraspeed:int;



function Start () {

}

function Update () {
	
	transform.Translate(Vector3.right * cameraspeed * Time.deltaTime);
//new comment	
	if (Input.GetKey (KeyCode.LeftShift)) {
	
		transform.Translate(Vector3.right * cameraspeed * 0.3 * Time.deltaTime);
	
	}
	
		if (Input.GetKey (KeyCode.LeftAlt)) {
	
		transform.Translate(Vector3.right * cameraspeed * -0.3 * Time.deltaTime);	
	}
	
}