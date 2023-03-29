import React from "react";

export default class Form extends React.Component {
    state = {
        name: "",
        surName: "",
        error: "",
    };

    handleSubmit = (event) => {
        event.preventDefault()
        this.inputValidate(this.state)
        this.setState({ name: "", surName: "" })
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    inputValidate = ({ name, surName, error }) => {
        if (name.length > 3 && surName.length > 3) {
            this.setState({ error: "" })
            alert(`Добро пожаловать ${name} ${surName}`)
        } else {
            this.setState({error: "С твоими данными что то не так ;("})
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <div>
                    <input
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange} type="text"

                    />
                </div>
                <div>
                    <input
                        placeholder="Surname"
                        name="surName"
                        value={this.state.surName}
                        onChange={this.handleChange}
                        type="text"
                    />
                </div>
                {this.state.error && <p>{this.state.error}</p>}
                <button type="submit">Submit</button>
            </form>
        );
    };
};