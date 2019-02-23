import React, { Component } from "react"

class Gridview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        // let request_form = new FormData();
        // request_form.append("key", "pid");
        // request_form.append("value", "758a85ca-f710-43f3-87b0-a16823abe888");
        let request_form = {
            "key": "pid",
            "value": "758a85ca-f710-43f3-87b0-a16823abe888"
        };
        fetch(
            "http://127.0.0.1:8000/p/read/",
            {
                method: "POST",
                mode: "no-cors",
                cache: "default",
                credentials: "omit",
                body: JSON.stringify(request_form),
            })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            console.log(items);
            return (<div>Error: {error.message}</div>);
        } else if (!isLoaded) {
            console.log("咕叽...？");
            return (<div>Loading...</div>);
        } else {
            console.log("咕叽？!");
            return (
                <p>done</p>
            );
        }
    }
}

export default Gridview;