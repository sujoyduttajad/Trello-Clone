import React, { Fragment, useState, useRef } from 'react';
import { useDrop, useDrag } from "react-dnd"
import Window from "./Window"
import ITEM_TYPE from "../data/types"

const Item = ({ item, index, moveItem, status }) => {

    const ref = useRef(null);
    // #########   React DnD   #########

    // react-dnd gives this drop function from the useDrop hook
    // If you don't need the first destructured variable the njust use a comma 
    const [, drop] = useDrop({
        // The useDrop hook accepts an ITEM_TYPE which is the same that you declare in the useDrag hook
        accept: ITEM_TYPE,
        // hover() is a callback function that react-dnd calls which denotes the action to be done when hovered
        hover(item, monitor) {
            if(!ref.current) {
                return;
            }

            // Basically here we want to know what the drag index is
            // As we click on a item we gonna assign an index to it and we want to get whatever that index is     
            const dragIndex = item.index;
            // the hoverIndex will be the index that we will get when we hover over(Column)
            const hoverIndex = index;

            // If a user is hovering over the same item then we don't need to do anything there
            if(dragIndex === hoverIndex) {
                return;
            }

            const hoveredRect = ref.current.getBoundClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            // To get our mouse position whenever we are dragging on the screen
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            // the drag index is whatever item index we're working with when we click and drag aan item
            // so if the dragIndex is less than the hoverIndex then we don't have to do anything but if it's 
            // halfway over the card that it's hovering over then it's gonna pop down
            if(dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if(dragIndex > hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            // this is a callback that wea re gonna supply. This function will allow us to
            // actually change where the card is in the same column  
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        } 

    });

    // useDrag hook takes an item that is going to be an object we create right here
    const [{ isDragging }, drag] = useDrag({
        item: { type: ITEM_TYPE, ...item, index },
        // the collect callback basically gives yo ua bunch of props and data that react-dnd supplies
        // and one of the things is the monitor which is basically a copy of the screen
        // which includes any mouse actions and it will also tell us that we are dragging the item or not
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    const [show, setShow] = useState(false);
    // so this state is going to be used for opening the window when an item is being clicked   
    const onOpen = () => setShow(true);

    const onCLose = () => setShow(false);

    // we are gonna wrap drag and drop with the ref that we get
    // to locate and identify the actual HTML item that we're working with 
    drag(drop(ref));



    return (
        <div>
            
        </div>
    )
}

export default Item
