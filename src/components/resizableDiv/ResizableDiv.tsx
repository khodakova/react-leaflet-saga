import React, { useState } from 'react';
import './ResizableDiv.css';

interface ResizableDivProps {
    children: React.ReactNode | null
}

/**
 * Блок с изменяемой шириной
 * @param children
 * @constructor
 */
const ResizableDiv: React.FC<ResizableDivProps> = ({children}) => {
    const [ initialPos, setInitialPos ] = useState<number | null>(null);
    const [ initialSize, setInitialSize ] = useState<number | null>(null);
    
    const initial = (e: React.DragEvent<HTMLDivElement>) => {
        let resizable = document.getElementById('Resizable');
        setInitialPos(e.clientX);
        if ( resizable )
            setInitialSize(resizable.offsetWidth);
        
    };
    
    const resize = (e: React.DragEvent<HTMLDivElement>) => {
        let resizable = document.getElementById('Resizable');
        if ( resizable && initialSize && initialPos )
            resizable.style.width = `${ parseInt(initialSize.toString()) + parseInt((e.clientX - initialPos).toString()) }px`;
    };
    
    return (
        <div className='Block'>
            <div id='Resizable'>
                { children }
            </div>
            <div id='Draggable'
                 draggable='true'
                 onDragStart={ initial }
                 onDrag={ resize }
            />
        </div>
    );
    
};

export default ResizableDiv;
