#pragma strict
//var explosion:Rigidbody;


function Start () {

}

function OnTriggerEnter(other:Collider)
{
	
	if (other.gameObject.tag == "rocket")
	{
		rocketshipController.health--;
			
		
		if (rocketshipController.health == 0)
		{
		
			Destroy(other.gameObject);
		}
		
	}

}



function Update () {

	transform.Translate(Vector3.left * 5 * Time.deltaTime);
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}
