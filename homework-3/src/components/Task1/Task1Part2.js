import React from 'react';
import { AlbumsContext } from '../Task1/DataContext'

export default class AlbumsWithContext extends React.Component {
    render() {
        return (
            <>
                <AlbumsContext.Consumer>
                    {({ albums }) => {
                        return albums.map((item, index) =>
                            <div key={item.id}>
                                ID: {item.id} -
                                Index: {index} -
                                Title: {item.title}
                            </div>)
                    }}
                </AlbumsContext.Consumer>
            </>
        )
    }
}