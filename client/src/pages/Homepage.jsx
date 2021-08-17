import React from "react";
import Item from "../components/Item";
import DropWrapper from '../components/DropWrapper';
import Col from "../components/Col";
import { data, statuses } from "../data";

const Homepage = () => {
    const [items, setItems] = useState(data);

    // when you drop things into different columns, the below code will change the statuses of the items 
    const onDrop = { item, monitor, status } => {
        // we need to find the status of the statuses that are passed in
        const mapping = statuses.find(si => si.status === status);
        
        setItems(prevState => {
            // filter to get the iso filter out the item that we're currently droppping
            const newItems = prevState
                .filter(i => i.id !== item.id)
        })
    }

    return (
        <div>
            Time to start coding!
        </div>
    );
};

export default Homepage;