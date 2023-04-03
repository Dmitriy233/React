import React from 'react';
import { AlbumsContext } from '../Task1/DataContext'

export default class AlbumsWithContext extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numberAlbums: null
        }
    }

    static getDerivedStateFromProps(props, state) {
        return { numberAlbums: props.inputValue }
    }

    render() {
        return (
            <AlbumsContext.Consumer>
                {({ albums }) => {
                    if(this.state.numberAlbums>100){
                        return <p>maximum 100 albums</p>
                    }
                    return albums.map((item, index) =>
                        item.id <= this.state.numberAlbums ? <div key={item.id}>
                            ID: {item.id} -
                            Index: {index} -
                            Title: {item.title}
                        </div> : null)
                        
                }}
            </AlbumsContext.Consumer>
        )
    }
}