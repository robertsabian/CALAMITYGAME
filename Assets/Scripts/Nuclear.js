#pragma strict
var nuclear:Rigidbody;


function createNuclear()
{

 var xpos:int;
 xpos = transform.position.x + Random.Range(8,12);

 var ypos:int;
 ypos = transform.position.y + Random.Range(-4.5,4.5);


 Instantiate(nuclear,Vector3(xpos,ypos,-5),Quaternion.identity);
}

function Start () {

 InvokeRepeating("createNuclear",30.0,30.0);
}

function Update () {

}


