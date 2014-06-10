#pragma strict
var bomb:Rigidbody;


function createBomb()
{

 var xpos:int;
 xpos = transform.position.x + Random.Range(8,12);

 var ypos:int;
 ypos = transform.position.y + Random.Range(-4.5,4.5);


 Instantiate(bomb,Vector3(xpos,ypos,-5),Quaternion.identity);
}

function Start () {

 InvokeRepeating("createBomb",11.0,7.0);
}

function Update () {

}

//fork

