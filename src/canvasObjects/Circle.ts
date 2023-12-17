import {CanvasObject} from './CanvasObject';

interface Bounds {
    minXY: number,
    maxX: number,
    maxY: number
}

export class Circle extends CanvasObject
{
    public shouldDelete: boolean;
    public index: number;
    protected radius: number;
    protected colour: string;
    protected bounds: Bounds;
    protected inXBounds: boolean = true;
    protected inYBounds: boolean = true;
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
        },
        index: number
        )
    {
        super(context, x, y, vx, vy);

        this.radius = radius;
        this.colour = `rgba(${startColour.red}, ${startColour.green}, ${startColour.blue}, ${startColour.alpha})`;
        this.bounds = {
            minXY: 0 - this.radius * 2,
            maxX: this.context.canvas.width + this.radius * 2,
            maxY: this.context.canvas.height + this.radius * 2
        }
        this.shouldDelete = false;
        this.index = index;
    };
    
    public draw() 
    {
        if (this.shouldDelete) {return};
        this.context.fillStyle = this.colour;
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        this.context.fill();
    };

    public update(time: number) 
    {
        if ((this.x < -40 && this.vx < 0 )|| (this.x > (this.context.canvas.width + 40) && this.vx > 0))
        {
            this.shouldDelete = true;
        }
        if ((this.y < -40 && this.vy < 0 )|| (this.y > (this.context.canvas.height + 40) && this.vy > 0))
        {
            this.shouldDelete = true;
        }
        if (this.shouldDelete) { return; };
        if (this.x <= this.context.canvas.width && this.x > 0) {this.inXBounds = true};
        if (this.y <= this.context.canvas.height && this.x > 0) {this.inYBounds = true};
        this.x += this.vx * time;
        this.y += this.vy * time;
        const xMaxBound = (this.x + this.radius);
        const yMaxBound = (this.y + this.radius);
        const xMinBound = (this.x - this.radius);
        const yMinBound = (this.y - this.radius);
        this.calcBounds();
        if ((xMaxBound >= (this.bounds.maxX) || xMinBound <= (this.bounds.minXY)) && this.inXBounds )
        {
            this.inXBounds = false;
            this.vx *= -1;
        }
        if ((yMaxBound >= (this.bounds.maxY) || yMinBound <= (this.bounds.minXY)) && this.inYBounds)
        {
            this.inYBounds = false;
            this.vy *= -1;
        }
    };

    protected randomIncrement()
    {
        return (Math.random() < 0.5 ? -1 : 1);
    };

    protected calcBounds() {
        this.bounds = {
            minXY: 0 - this.radius * 2,
            maxX: this.context.canvas.width + this.radius * 2,
            maxY: this.context.canvas.height + this.radius * 2
        }
    }
}