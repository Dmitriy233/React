import React from "react";

export default class LifecycleMethods extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "какая-то страница",
        };
    };

    handleClick = () => {
        this.setState({ title: "другая страница" })
    };

    componentDidMount(){
        document.title = this.state.title
    }
    componentDidUpdate() {
        document.title = this.state.title
    };

    render() {
        return (
            <>
                
                <button onClick={this.handleClick}>Click</button>
            </>
        );
    };
};