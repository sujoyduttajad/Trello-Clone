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
        } 

    })
        


    return (
        <div>
            
        </div>
    )
}

export default Item
