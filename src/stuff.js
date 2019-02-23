import React, { Component } from "react";
import Gridview from "./gridview/gridview";

class Stuff extends Component{
    render() {
        return (
            <div>
                <h2>Balala Energy</h2>
                <p>
                    让吧拉拉之神惩罚你吧！
                </p>
                <ol>
                    <li>赤橙黄绿</li>
                    <li>青蓝紫</li>
                </ol>
                <Gridview name=""/>
            </div>
        );
    }
}

export default Stuff;