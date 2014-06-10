#pragma strict

var laserSpeed:int;

function Start () {

}

function OnTriggerEnter(other:Collider)
{

	if (other.gameObject.tag == "alien")
	{
		
		rocketshipController.score++;
		
		var remainder = 0;
		
		
		remainder = rocketshipController.score % 10;
		
		if (remainder == 0)
		{
			
			rocketshipController.health++;
		}
		
		
		Destroy(other.gameObject);
		Destroy(this.gameObject);
	}

}


function Update () {
	
	transform.Translate(Vector3.right *
		laserSpeed * Time.deltaTime * 2);
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}