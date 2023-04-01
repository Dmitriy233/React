import React from "react";
export const AlbumsContext = React.createContext();

export class AlbumsProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            albums: []
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        albums: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        return (
            <AlbumsContext.Provider value={this.state}>
                {this.props.children}
            </AlbumsContext.Provider>
        )
    }
}