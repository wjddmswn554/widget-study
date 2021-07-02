import React, { Component, useState } from 'react';
import './App.css';
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
//https://ichi.pro/ko/yeje-ui-react-dnd-226845595632541
const MovableItem = ({setIsFirstColumn}) => {
    const [{ isDragging }, drag] = useDrag({
        name: 'Any custom name', 
        type: 'Our first type',
        end: (name, monitor) => {
            const dropResult = monitor.getDropResult();
            if(dropResult && dropResult.name === 'Column 1'){
                setIsFirstColumn(true);
            } else {
                setIsFirstColumn(false);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0.4 : 1;

    return (
        <div ref={drag} className='movable-item' style={{ opacity }}>
            We will move this item
        </div>
    )
}

const Column = ({children, className, title}) => {
    const [{isOver}, drop] = useDrop({
        accept: 'Our first type',
        drop : () => ({name : title}),
    });

    return (
        <div ref={drop} className={className}>
            {title}
            {children}
        </div>
    )
}

const Drage = () => {
    const [isFirstColumn, setIsFirstColumn] = useState(true);
    const Itme = <MovableItem setIsFirstColumn={setIsFirstColumn} />;

        return (
            <div className="container">
                <DndProvider backend={HTML5Backend}>
                    <Column title='Column 1' className='column first-column'>
                        {isFirstColumn && Itme}
                    </Column>
                    <Column title='Column 2' className='column second-column'>
                        {!isFirstColumn && Itme}
                    </Column>
                </DndProvider>
            </div>
        );
};

export default Drage;