var animator : Animator;

function Start () {
	animator = GetComponent("Animator");
}

function Update () {

}

function OnMouseEnter() {
	animator.SetBool("Mouse On", true);
}

function OnMouseExit() {
	animator.SetBool("Mouse On", false);
}