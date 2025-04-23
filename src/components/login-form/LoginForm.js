import { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../services/Firebase";
import "./LoginForm.css";

export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: "",
            formMessage: ""
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { email, senha } = this.state;
            await firebase.auth().signInWithEmailAndPassword(email, senha);

            window.location.href = "/principal";
        } catch {
            this.setState({ formMessage: "Usuário não está cadastrado ou dados incorretos." });
        }
    };

    render() {
        return (
            <div className="form-container">
                <h1 className="texto-principal">Login</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="senha">Senha:</label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        value={this.state.senha}
                        onChange={this.handleChange}
                    />

                    <button type="submit">Acessar</button>
                </form>
                {this.state.formMessage && <p>{this.state.formMessage}</p>}
                <Link to="/cadastro">Ir para Cadastro</Link>
            </div>
        );
    }
}