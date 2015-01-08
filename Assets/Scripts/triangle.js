var animator : Animator;
var canPress : boolean = false;
var explosionParticle : GameObject;

function Start () {
	animator = GetComponent("Animator");
}

function Update () {
	/*var mousePosX : float = Input.mousePosition.x;
	var mousePosY : float = Input.mousePosition.y;
	var mousePos = Vector2 (mousePosX, mousePosY);*/
}


function FixedUpdate () {
	if(Input.GetButtonDown("Fire1") && canPress){
		var mousePos = Input.mousePosition;
		var thePos : Vector3 = transform.position;
		Instantiate(explosionParticle, transform.position, transform.rotation);  
		//The distance from the camera to the player object
		mousePos.z = (transform.position.z - Camera.main.transform.position.z); 	
		var worldMousePosition = Camera.main.ScreenToWorldPoint (mousePos);
		this.gameObject.rigidbody2D.AddForceAtPosition(transform.up * 3 * 200f, mousePos);
	}
}

function OnMouseEnter() {
	animator.SetBool("Mouse On", true);
	canPress = true;
}

function OnMouseExit() {
	animator.SetBool("Mouse On", false);
	canPress = false;
}