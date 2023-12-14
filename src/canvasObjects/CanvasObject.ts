export class CanvasObject
{
    protected context: CanvasRenderingContext2D;
    protected x: number;
    protected y: number;
    protected vx: number;
    protected vy: number;

    constructor(
        context: CanvasRenderingContext2D, 
        x: number, 
        y: number, 
        vx: number,
        vy: number )
    {
        this.context = context;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
    }
}