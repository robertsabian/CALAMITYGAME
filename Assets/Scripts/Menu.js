#pragma strict
var keypress:boolean = false;
function Start () {

}

function Update () {
 if (Input.GetKey("space")) 
 {
  Application.LoadLevel ("Game");
   }
   
   
    if (Input.GetKey("1")) 
 {
  Application.LoadLevel ("Game");
   }
   
   
       if (Input.GetKey("2")) 
 {
  Application.LoadLevel ("Level2");
   }
   
   
       if (Input.GetKey("3")) 
 {
  Application.LoadLevel ("Level3");
   }
   
   
   
   else if (Input.GetKey("q"))
   {
    Application.Quit();
   }
}
//new comment