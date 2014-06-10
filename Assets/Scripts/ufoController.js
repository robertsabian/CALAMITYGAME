#pragma strict
var movingUp : boolean;
var movingDown : boolean;


var ufoLaser:Rigidbody;



function OnBecameInvisible()
{
	Destroy(this.gameObject);
}


function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag=="rocket")
	{
		rocketshipController.health--;
		
		Destroy(this.gameObject);
		
		if (rocketshipController.health == 0)
		{
			Destroy(other.gameObject);
			audio.Play();
		}
	}
}


function shootLaser()
{

	Instantiate(ufoLaser,transform.position,transform.rotation);

}

function Start () {
	InvokeRepeating("shootLaser",0.25,1.0);
}

function Update () {


}