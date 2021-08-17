import React, { useState } from "react";
import Item from "../components/Item";
import DropWrapper from '../components/DropWrapper';
import Col from "../components/Col";
import { data, statuses } from "../data";

const Homepage = () => {
    const [items, setItems] = useState(data);

    // when you drop things into different columns, the below code will change the statuses of the items 
    const onDrop = (item, monitor, status) => {
        // we need to find the status of the statuses that are passed in
        const mapping = statuses.find(si => si.status === status);
        
        setItems(prevState => {            
            const newItems = prevState
                // filter to get the iso filter out the item that we're currently droppping
                // thats going to be passed back to us
                .filter(i => i.id !== item.id)
                // and then we are going to add it back into the array
                // so get the item, set the new status and then we are going to get hte actual icon
                .concat({ ...item, status, icon: mapping.icon });

                // then we are going to return our new item by using spread operator
                // Summary-> so filtering out the item that we are currently dropping and then we set the new status and set the new icon
            return [...newItems];    
        })
    }

    // So on move it gives us the drag index(items) and the hover index(the item that it's on hovering)
    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        // same logic as used above, basically filtered out and then insert it
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return [...newItems];
        });
    };

    return (
        <div className={'row'}>
            {statuses.map(s => {
                return (
                    // This is gonna create the actual columns with the status names
                    <div key={s.status} className={'col-wrapper'}>
                        <h2 className={'col-header'}>{s.status.toUpperCase()}</h2>
                        <DropWrapper onDrop={onDrop} status={s.status}>
                            <Col>
                                {
                                    //By using filter we are only going to show the items in this column that equals the status
                                    // of this column. After that we will map the items and put the minto a Item component 
                                    items.filter(i => i.status === s.status)
                                         .map((i, idx) => <Item  key={i.id} item={i} index={idx} moveItem={moveItem} status={s} /> )
                                }
                            </Col>
                        </DropWrapper>
                    </div>
                )
            })}
        </div>
    );
};

export default Homepage