function Update() {

	var mousePosX : float = Input.mousePosition.x;
	var mousePosY : float = Input.mousePosition.y;
	var scrollDistanceShortX : int = 700;
	var scrollDistanceShortY : int = 400;
	var scrollDistanceLongX : int = 400;
	var scrollDistanceLongY : int = 200;
	var scrollSpeedShort : float = 20;
	var scrollSpeedLong : float = 60;

	//Move Left
	if (mousePosX < scrollDistanceShortX && mousePosX > scrollDistanceLongX)
	{
		transform.Translate(Vector3.right * -scrollSpeedShort * Time.deltaTime);
		
	}else if (mousePosX < scrollDistanceLongX)
	{
		transform.Translate(Vector3.right * -scrollSpeedLong * Time.deltaTime);
	}
	//Move Right
	if (mousePosX >= Screen.width - scrollDistanceShortX 
		&& mousePosX <= Screen.width - scrollDistanceLongX)
	{
		transform.Translate(Vector3.right * scrollSpeedShort * Time.deltaTime);
		
	}else if(mousePosX >= Screen.width - scrollDistanceLongX)
	{
		transform.Translate(Vector3.right * scrollSpeedLong * Time.deltaTime);
	}
	
	//Move Down
	if (mousePosY < scrollDistanceShortY && mousePosY > scrollDistanceLongY)
	{
		transform.Translate(Vector3.up * -scrollSpeedShort * Time.deltaTime);
	}else if (mousePosY < scrollDistanceLongY)
	{
		transform.Translate(Vector3.up * -scrollSpeedLong * Time.deltaTime);
	}
    
    //Move Up
	if (mousePosY >= Screen.height - scrollDistanceShortY 
		&& mousePosY <= Screen.height - scrollDistanceLongY)
	{
		transform.Translate(Vector3.up * scrollSpeedShort * Time.deltaTime);
		
	}else if(mousePosY >= Screen.height - scrollDistanceLongY)
	{
		transform.Translate(Vector3.up * scrollSpeedLong * Time.deltaTime);
	}
}
