import React from "react";

export default class Form extends React.Component {
    state = {
        name: "",
        surName: "",
        error: "С твоими данными что то не так ;(",
    };

    handleSubmit = (event) => {
        event.preventDefault()
        this.inputValidate(this.state)
        this.setState({ name: "", surName: "" })
    };

    changeNameValue = (event) => {
        this.setState({ name: event.target.value })
    };

    changeSurNameValue = (event) => {
        this.setState({ surName: event.target.value })
    };

    inputValidate = ({ name, surName, error }) => {
        if (name.length > 3 && surName.length > 3) {
            this.setState({ error: "" })
            alert(`Добро пожаловать ${name} ${surName}`)
        } else {
            alert(error)
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <div><input id="1" placeholder="Name" name="name" value={this.state.name} onChange={this.changeNameValue} type="text" /></div>
                <div><input id="2" placeholder="Surname" name="surName" value={this.state.surName} onChange={this.changeSurNameValue} type="text" /></div>
                <button type="submit">Submit</button>
            </form>
        );
    };
};