import {useEffect, useRef, useState} from 'react';
import styles from './styles.module.css';

import { useTranslation } from 'react-i18next';


const Scratch = () => { 


    const { t } = useTranslation();

    const canvasRef = useRef(null);
    const ctxRef = useRef(null);


    const [isDrawing, setIsDrawing] = useState(false);
    var mousePos = { x:0, y:0 };
    var lastPos = mousePos;

    useEffect(() => {
        
        const canvas = canvasRef.current;

        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const ctx = canvas.getContext("2d");

        ctx.scale(1, 1);
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = "#736c75";
        ctx.fillRect(0, 0, canvas.width, canvas.height);


        ctx.globalCompositeOperation = 'destination-out';

        ctx.lineWidth = 15;
        ctxRef.current = ctx;


        
        canvas.addEventListener('touchmove', function(e) {

            e.preventDefault();
          },false);



    }, []);

    const startDrawing = ({nativeEvent}) => {
       
        const {offsetX, offsetY} = nativeEvent;
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(offsetX, offsetY);
        ctxRef.current.lineTo(offsetX, offsetY);
        ctxRef.current.stroke();
        setIsDrawing(true);
        nativeEvent.preventDefault();
    };

    const startDrawingT = ({nativeEvent}) => {

        lastPos = getMousePos(canvasRef.current, nativeEvent);
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(lastPos.x, lastPos.y);
        ctxRef.current.lineTo(lastPos.x, lastPos.y);
        ctxRef.current.stroke();
        setIsDrawing(true);
    };

    const getMousePos = (canvasDom, mouseEvent) => {
        const rect = canvasDom.getBoundingClientRect();
        return {
          x: mouseEvent.touches[0].clientX - rect.left,
          y: mouseEvent.touches[0].clientY - rect.top
        };
      }

    const draw = ({nativeEvent}) => {
        if(!isDrawing) {
            return;
        }

        const {offsetX, offsetY} = nativeEvent;
        ctxRef.current.lineTo(offsetX, offsetY);
        ctxRef.current.stroke();
        nativeEvent.preventDefault();
    };



    
    const drawT = ({nativeEvent}) => {
        if(!isDrawing) {
            return;
        }

        lastPos = getMousePos(canvasRef.current, nativeEvent);

        ctxRef.current.lineTo(lastPos.x, lastPos.y);
        ctxRef.current.stroke();
    };

    const stopDrawing = () => {

        ctxRef.current.closePath();
        setIsDrawing(false);
    };

    const ResetScratch = () => {

        
        ctxRef.current.globalCompositeOperation = 'destination-over';
        ctxRef.current.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        ctxRef.current.globalCompositeOperation = 'destination-out';
    };

    const ClearScratch = () => {
        ctxRef.current.fillRect(0, 0, canvasRef.current.width, canvasRef.current.width);
    };


    return (
        <div id="scratchDiv">
            <div className={styles.optionButtons}>

                <div onClick={ResetScratch} id={styles["btn"]}><span  className={styles.noselect}>Reset</span><div id={styles["circle"]}></div></div>
                <div onClick={ClearScratch} id={styles["btn"]}><span  className={styles.noselect}>{t('Reveal')}</span><div id={styles["circle"]}></div></div>
            </div>

            
            <div className={styles.box}>
            <div className={styles.boxInnerUp}>
            <div className={styles.boxInnerDown}>
            <canvas className={styles.canvasContainer}
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawingT}
                onTouchEnd={stopDrawing}
                onTouchMove={drawT}
                
                >
            </canvas>
            </div>     </div>      </div>
            

        </div>
    )
}

export default Scratch