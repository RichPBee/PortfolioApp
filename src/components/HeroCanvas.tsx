import { useEffect, useRef, useState } from "react";
import { Circle } from '../canvasObjects/Circle';

function Canvas() {
    let canvasObjects: Array<Circle> = [];
    let ctx: CanvasRenderingContext2D | null;
    let secondsPassed: number;
    let oldTimeStamp: number;
    let animationFrameId: number;
    
    const randomPos = (type: string, ctx: CanvasRenderingContext2D): number => { 
        switch (type)
        {
            case 'x':
                return (Math.random() * (ctx.canvas.width - 1) + 1);
            case 'y':
                return (Math.random() * (ctx.canvas.height- 1) + 1);
            default: 
                return 1;
        }
    }

    const getStartColour = () => { 
        return {
            red: (Math.random() * (150 - 80) + 80 ),
            green: (Math.random() * (170 - 80) + 80 ),
            blue: (Math.random() * (150 - 100) + 100 ),
            alpha: 0.3
        }
    }

    const velMult = () => Math.random() < 0.5 ? 1 : -1;

    const canvasRef = useRef<HTMLCanvasElement>(null);

    const createCircles = (ctx: CanvasRenderingContext2D) => {
        if (canvasObjects.length > 0) {canvasObjects = []};
        for (let i = 0; i < 30; i++) {
            let x = randomPos('x', ctx);
            let y = randomPos('y', ctx);
            let radius = (Math.random() * 30) + 4;
            let vx = ((Math.random() * (700 - 20) + 20) * velMult())/radius;
            let vy = ((Math.random() * (700 - 20) + 20) * velMult())/radius;
            let startColour = getStartColour();
            const circle = new Circle(ctx, x, y, vx, vy, radius, startColour);
            canvasObjects.push(circle);
        }
    }

    const draw = (ctx: CanvasRenderingContext2D | null, time: number) => { 
        if (ctx == null) { 
            window.cancelAnimationFrame(animationFrameId);    
            return 
        };
        if (window.innerHeight !== ctx.canvas.height || window.innerWidth !== ctx.canvas.width)
        {
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
        }
        canvasObjects.forEach((obj) => { 
            obj.update(time);
        });
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
        canvasObjects.forEach((obj) => { 
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

        return () => { 
            window.cancelAnimationFrame(animationFrameId);
        }
    }, []);

    useEffect(() => { 
        const render = (timeStamp: number) => { 
            secondsPassed = (timeStamp - oldTimeStamp) / 1000;
            oldTimeStamp = timeStamp;
            secondsPassed = Math.min(secondsPassed, 0.1);
            draw(ctx, secondsPassed);
            animationFrameId = window.requestAnimationFrame(render);
        };
        
        render(secondsPassed);

        
    }, [draw]);

    return (
        <canvas width="100vw" height="100vh" className="HeroCanvas" ref={canvasRef} />
    )
}

export default Canvas;