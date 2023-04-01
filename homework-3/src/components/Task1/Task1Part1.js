import React from 'react';

export default class Albums extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        albums: result
                    });
                }
            )
    }

    render() {
        return (
            <>
                {this.state.albums.map((item, index) =>
                    <div key={item.id}>
                        ID: {item.id} -
                        Index: {index} -
                        Title: {item.title}
                    </div>)
                }
            </>
        )
    }
}