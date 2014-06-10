#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(other:Collider) {
	

	if (other.gameObject.tag=="rocket")
	{
		rocketshipController.health--;
		Destroy(this.gameObject);
	}
	
	
}

//new comment