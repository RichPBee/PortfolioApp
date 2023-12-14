import {CanvasObject} from './CanvasObject';

interface Bounds {
    minXY: number,
    maxX: number,
    maxY: number
}

export class Circle extends CanvasObject
{

    protected radius: number;
    protected colour: string;
    protected bounds: Bounds;
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
        this.colour = `rgba(${startColour.red}, ${startColour.green}, ${startColour.blue}, ${startColour.alpha})`;
        this.bounds = {
            minXY: 0 - this.radius * 2,
            maxX: this.context.canvas.width + this.radius * 2,
            maxY: this.context.canvas.height + this.radius * 2
        }
    };
    
    public draw() 
    {
        this.context.fillStyle = this.colour;
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        this.context.fill();
    };

    public update(time: number) 
    {
        this.x += this.vx * time;
        this.y += this.vy * time;
        const xMaxBound = (this.x + this.radius);
        const yMaxBound = (this.y + this.radius);
        const xMinBound = (this.x - this.radius);
        const yMinBound = (this.y - this.radius);
        if (xMaxBound >= (this.bounds.maxX) || xMinBound <= (this.bounds.minXY) )
        {
            this.vx *= -1;
        }
        if (yMaxBound >= (this.bounds.maxX) + 50 || yMinBound <= (this.bounds.minXY))
        {
            this.vy *= -1;
        }
    };

    protected randomIncrement()
    {
        return (Math.random() < 0.5 ? -1 : 1);
    }
}