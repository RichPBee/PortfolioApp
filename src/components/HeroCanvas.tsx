import { useEffect, useRef } from "react";
import { Circle } from '../canvasObjects/Circle';

function Canvas() {
    const canvasObjects: Array<Circle> = [];
    let ctx: CanvasRenderingContext2D | null;
    let secondsPassed: number;
    let oldTimeStamp: number;
    
    const randomPos = (type: string, ctx: CanvasRenderingContext2D): number => { 
        switch (type)
        {
            case 'x':
                return (Math.random() * ctx.canvas.width);
            case 'y':
                return (Math.random() * ctx.canvas.height);
            default: 
                return 1;
        }
    }

    const getStartColour = () => { 
        return {
            red: Math.random() * 255,
            green: Math.random() * 255,
            blue: Math.random() * 255,
            alpha: Math.random() * 0.5
        }
    }

    const canvasRef = useRef<HTMLCanvasElement>(null);

    const createCircles = (ctx: CanvasRenderingContext2D) => {
        for (let i = 0; i < 10; i++) {
            let x = randomPos('x', ctx);
            let y = randomPos('y', ctx);
            let vx = (Math.random() * 30) + 50;
            let vy = (Math.random() * 30) + 50;
            let radius = (Math.random() * 10) + 10;
            let startColour = getStartColour();
            canvasObjects.push(new Circle(ctx, x, y, vx, vy, radius, startColour));
        }
        console.log(canvasObjects.length);
    }

    const draw = (ctx: CanvasRenderingContext2D | null, time: number) => { 
        if (ctx === null) {return};
        canvasObjects.forEach((obj) => { 
            obj.update(time);
            ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
            obj.draw();
        });
    }

    useEffect(() => { 
        const canvas = canvasRef.current;
        if (canvas == null) return;
        ctx = canvas.getContext('2d');
        if (ctx == null) {throw new Error('Could not get context')};
        secondsPassed = 0;
        oldTimeStamp = 0;
        createCircles(ctx);
    }, [])

    useEffect(() => { 
        let animationFrameId: number;
        if (ctx == null) {throw new Error('Could not get context')};

        const render = (timeStamp: number) => { 
            secondsPassed = (timeStamp - oldTimeStamp) / 1000;
            oldTimeStamp = timeStamp;
            secondsPassed = Math.min(secondsPassed, 0.1);
            draw(ctx, secondsPassed);
            animationFrameId = window.requestAnimationFrame(render);
        };
        
        render(secondsPassed);

        return () => { 
            window.cancelAnimationFrame(animationFrameId);
        }
    }, [draw]);

    return (
        <canvas className="HeroCanvas" ref={canvasRef} />
    )
}

export default Canvas;