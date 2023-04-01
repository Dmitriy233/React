import React from 'react'

export default class Square extends React.Component {
    squareRef = React.createRef()

    componentDidMount() {
        setTimeout(() => {
            this.squareRef.current.style.left = "200px"
        }, 2000);
    }

    render() {
        return (
            <div ref={this.squareRef}
                style={{
                    width: 100,
                    position: 'relative',
                    height: 100,
                    backgroundColor: 'black',
                    marginBottom: 20,
                }}>
            </div>
        )
    }
}

