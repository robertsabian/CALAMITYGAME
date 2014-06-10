#pragma strict
var healthpowerup:Rigidbody;


function createHealth()
{

 var xpos:int;
 xpos = transform.position.x + Random.Range(8,12);

 var ypos:int;
 ypos = transform.position.y + Random.Range(-4.5,4.5);


 Instantiate(healthpowerup,Vector3(xpos,ypos,-5),Quaternion.identity);
}

function Start () {

 InvokeRepeating("createHealth",7.0,7.0);
}

function Update () {

}


