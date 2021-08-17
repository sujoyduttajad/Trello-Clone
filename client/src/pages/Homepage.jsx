import React from "react";
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

        //
    }

    return (
        <div>
            Time to start coding!
        </div>
    );
};

export default Homepage;