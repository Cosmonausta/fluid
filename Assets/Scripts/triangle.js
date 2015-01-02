var animator : Animator;

function Start () {
	animator = GetComponent("Animator");
}

function Update () {
	/*var mousePosX : float = Input.mousePosition.x;
	var mousePosY : float = Input.mousePosition.y;
	var mousePos = Vector2 (mousePosX, mousePosY);*/
}


function FixedUpdate () {
	if(Input.GetButtonDown("Fire1")){
		var mousePos = Input.mousePosition;
		var thePos : Vector3 = transform.position;      
		//The distance from the camera to the player object
		mousePos.z = (transform.position.z - Camera.main.transform.position.z); 	
		var worldMousePosition = Camera.main.ScreenToWorldPoint (mousePos);
		this.gameObject.rigidbody2D.AddForceAtPosition(transform.up * 100f, mousePos);
	}
}

function OnMouseEnter() {
	animator.SetBool("Mouse On", true);
	//transform.renderer.material.color = Color.red;
}

function OnMouseExit() {
	animator.SetBool("Mouse On", false);
	//transform.renderer.material.color = Color.black;
}