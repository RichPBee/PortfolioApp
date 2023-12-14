import {CanvasObject} from './CanvasObject';

export class Circle extends CanvasObject
{
    protected radius: number;
    protected colour: {
        red:number,
        green: number,
        blue: number,
        alpha: number,
    };
    constructor(
        context: CanvasRenderingContext2D, 
        x: number, 
        y: number, 
        vx: number,
        vy: number,
        radius: number,
        startColour: {
            red: number,
            green: number,
            blue: number,
            alpha: number
        })
    {
        super(context, x, y, vx, vy);

        this.radius = radius;
        this.colour = startColour;
    };
    
    public draw() 
    {
        this.context.fillStyle = `rgba(${this.colour.red}, ${this.colour.green}, ${this.colour.blue}, ${this.colour.alpha})`;
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        this.context.fill();
    };

    public update(time: number) 
    {
        this.colour.red += this.randomIncrement();
        this.colour.green += this.randomIncrement();
        this.colour.blue += this.randomIncrement();
        const xBound = (this.x + this.radius);
        const yBound = (this.y + this.radius);
        if (xBound >= this.context.canvas.width || (this.x - this.radius) <= 0 )
        {
            this.vx *= -1;
        }
        if (yBound >= this.context.canvas.height || (this.y - this.radius) <= 0)
        {
            this.vy *= -1;
        }
        this.x += this.vx * time;
        this.y += this.vy * time;
    };

    protected randomIncrement()
    {
        return (Math.random() < 0.5 ? -2 : 2)
    }

}