import React from "react";

function ItemList(props) {
    const samples = props.samples;
    const listItems = samples.map((listItem) =>
        <li key={listItem.toString()}>
            {listItem}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default ItemList;