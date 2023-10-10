import { useEffect, useRef, useState } from 'react'
import * as PIXI from 'pixi.js'
import SimplexNoise from 'simplex-noise'
import hsl from 'hsl-to-hex'
import { KawaseBlurFilter } from '@pixi/filter-kawase-blur'

export default function GradientBG() {
    const random = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const map = (n: number, start1: number, end1: number, start2: number, end2: number) => {
        return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
    }
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current

        if (!canvas) {
            return
        }

        const simplex = new SimplexNoise();

        class ColorPalette {
            hue: number = 0;
            complimentaryHue1: number = 0;
            complimentaryHue2: number = 0;
            saturation: number = 0;
            lightness: number = 0;
            baseColor: string = "";
            complimentaryColor1: string = "";
            complimentaryColor2: string = "";
            colorChoices: number[] = [0x000000];

            constructor() {
                this.setColors();
                this.setCustomProperties();
            }

            setColors() {
                this.hue = 190;
                this.complimentaryHue1 = this.hue + 30;
                this.complimentaryHue2 = this.hue + 60;
                this.saturation = 55;
                this.lightness = 40;

                this.baseColor = hsl(this.hue, this.saturation, this.lightness);
                this.complimentaryColor1 = hsl(
                    this.complimentaryHue1,
                    this.saturation,
                    this.lightness
                );
                this.complimentaryColor2 = hsl(
                    this.complimentaryHue2,
                    this.saturation,
                    this.lightness
                );

                const colors = [
                    this.baseColor,
                    this.complimentaryColor1,
                    this.complimentaryColor2
                ];
                this.colorChoices = colors.map((color) => parseInt(color.replace("#", "0x")));
            }

            randomColor() {
                console.log(this.colorChoices)
                console.log(random(0, this.colorChoices.length))
                return this.colorChoices[random(0, this.colorChoices.length)]
            }

            setCustomProperties() {
                document.documentElement.style.setProperty("--hue", this.hue.toString());
                document.documentElement.style.setProperty(
                    "--hue-complimentary1",
                    this.complimentaryHue1.toString()
                );
                document.documentElement.style.setProperty(
                    "--hue-complimentary2",
                    this.complimentaryHue2.toString()
                );
            }
        }

        // Orb class
        class Orb {
            bounds: { x: { min: number; max: number }; y: { min: number; max: number } };
            x: number;
            y: number;
            scale: number;
            fill: number;
            radius: number;
            xOff: number;
            yOff: number;
            inc: number;
            graphics: PIXI.Graphics;

            constructor(fill = 0x000000) {
                this.bounds = this.setBounds();
                this.x = random(this.bounds["x"].min, this.bounds["x"].max);
                this.y = random(this.bounds["y"].min, this.bounds["y"].max);
                this.scale = 1;
                this.fill = fill;
                this.radius = random(window.innerHeight / 6, window.innerHeight / 3);
                this.xOff = random(0, 1000);
                this.yOff = random(0, 1000);
                this.inc = 0.002;
                this.graphics = new PIXI.Graphics();
                this.graphics.alpha = 0.825;

                let timeout: NodeJS.Timeout

                window.addEventListener(
                    "resize",
                    () => {
                        if (timeout)
                            clearTimeout(timeout);
                        timeout = setTimeout(() => {
                            this.bounds = this.setBounds();
                            this.x = random(this.bounds["x"].min, this.bounds["x"].max);
                            this.y = random(this.bounds["y"].min, this.bounds["y"].max);
                            this.radius = random(window.innerHeight / 6, window.innerHeight / 3);
                        }, 250)
                    }
                );
            }

            setBounds() {
                const maxDist =
                    window.innerWidth < 1000 ? window.innerWidth / 3 : window.innerWidth / 5;
                const originX = window.innerWidth / 1.25;
                const originY =
                    window.innerWidth < 1000
                        ? window.innerHeight
                        : window.innerHeight / 1.375;

                return {
                    x: {
                        min: originX - maxDist,
                        max: originX + maxDist
                    },
                    y: {
                        min: originY - maxDist,
                        max: originY + maxDist
                    }
                };
            }

            update() {
                const xNoise = simplex.noise2D(this.xOff, this.xOff);
                const yNoise = simplex.noise2D(this.yOff, this.yOff);
                const scaleNoise = simplex.noise2D(this.xOff, this.yOff);

                this.x = map(xNoise, -1, 1, this.bounds["x"].min, this.bounds["x"].max);
                this.y = map(yNoise, -1, 1, this.bounds["y"].min, this.bounds["y"].max);
                this.scale = map(scaleNoise, -1, 1, 0.5, 1);

                this.xOff += this.inc;
                this.yOff += this.inc;
            }

            render() {
                this.graphics.x = this.x;
                this.graphics.y = this.y;
                this.graphics.scale.set(this.scale);

                this.graphics.clear();

                this.graphics.beginFill(this.fill);
                this.graphics.drawCircle(0, 0, this.radius);
                this.graphics.endFill();
            }
        }

        const app = new PIXI.Application({
            view: canvas as PIXI.ICanvas,
            resizeTo: window,
            backgroundColor: 'white',
        });

        app.stage.filters = [new KawaseBlurFilter(40, 10, true)];

        const orbs: Orb[] = [];

        const colorPalette = new ColorPalette();

        for (let i = 0; i < 10; i++) {
            console.log(colorPalette.randomColor())
            const orb = new Orb(colorPalette.randomColor());

            app.stage.addChild(orb.graphics);

            orbs.push(orb);
        }

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            app.ticker.add(() => {
                orbs.forEach((orb) => {
                    orb.update();
                    orb.render();
                });
            });
        } else {
            orbs.forEach((orb) => {
                orb.update();
                orb.render();
            });
        }

    }, [])

    return (
        <canvas
            className='absolute top-0 left-0 z-[-10] w-full h-full bg-white'
            ref={canvasRef}
        />
    )
}