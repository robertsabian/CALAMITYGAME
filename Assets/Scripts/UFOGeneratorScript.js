#pragma strict
var ufo:Rigidbody;

function createUFO()
{

 var xpos:float;
 xpos = transform.position.x + Random.Range(8,12);

 var ypos:float;
 ypos = transform.position.y + Random.Range(-3,3);
 

 Instantiate(ufo,Vector3(xpos,ypos,0),Quaternion.identity);
}

function Start () {

 InvokeRepeating("createUFO",1.0,1.0);
}

function Update () {

}
//new comment