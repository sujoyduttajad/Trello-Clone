import React from 'react';
import { useDrop } from 'react-dnd'
import ITEM_TYPE from '../data/types';
import { statuses } from "../data"

const DropWrapper = ({ onDrop, children, status }) => {

    const [{ isOver }, drop] = useDrop({
        // So the draggable and dropable element should accept the 
        // same ITEM_TYPE or it will always reject it
        accept: ITEM_TYPE,
        canDrop: (item, monitor) => {
        // we need to get the item index because basically when we drag our items over these 
        // the cards I need to know what the item index is for hte actual item so that we can see whether you are allowed to drop it or not.
        // The condition is that the items have to be right next to each other, we are checking that the indexes of the column are right next to each other
        // if they are like one off or one less then we will reject it otherwise accept it
            const itemIndex = statuses.findIndex(si => si.status === item.status);
            const statusIndex = statuses.findIndex(si => si.status === status);
            return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
        }

    });

    return (
        <div>
            
        </div>
    )
}

export default DropWrapper
