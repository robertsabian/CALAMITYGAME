#pragma strict

var laser:Rigidbody;


function Start () {

}

function Update () {


	if (Input.GetKeyDown ("space"))
	{

	 Instantiate(laser,transform.position,Quaternion.identity);
	}

}