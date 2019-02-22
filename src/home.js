import React, { Component } from "react";
import ItemList from "./ItemList";

const sample = [
    {id: 1, text: "hey"},
    {id: 2, text: "bukki!"}
];

const numbers = [1,2,3,4,5];

class Home extends Component{
    render() {
        return (
            <div>
                <h2>Kanazuki Yoko</h2>
                <p>
                    巴拉拉能量！！！
                </p>
                <ItemList samples={numbers}/>
            </div>
        );
    }
}

export default Home;