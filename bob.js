class BOB
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1.0,
			friction:0.5,
			density:2.0

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		
		World.add(world, this.body);
	}
	display()
	{
			
			var Bobpos=this.body.position;		

			push()
			translate(Bobpos.x, Bobpos.y);
			ellipseMode(RADIUS)
			strokeWeight(0);
			fill('#4CC417');
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}