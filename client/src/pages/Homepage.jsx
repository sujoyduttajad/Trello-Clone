import React from "react";
import Item from "../components/Item";
import DropWrapper from '../components/DropWrapper';
import Col from "../components/Col";
import { data, statuses } from "../data";

const Homepage = () => {
    const [items, setItems] = useState(data);

    // const onDrop = {item, monitor, status} => {

    // }

    return (
        <div>
            Time to start coding!
        </div>
    );
};

export default Homepage;