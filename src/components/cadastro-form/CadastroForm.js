import { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../services/Firebase";
import "./CadastroForm.css";

export default class CadastroForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: "",
            nome: "",
            sobrenome: "",
            dataNascimento: "",
            formMessage: ""
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, senha, nome, sobrenome, dataNascimento } = this.state;
        try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, senha);
            const user = userCredential.user;
            const a = await firebase.firestore().collection("usuarios").doc(user.uid).set({
                uid: user.uid,
                nome: nome,
                sobrenome: sobrenome,
                nascimento: dataNascimento,
                email: email
            });
            window.location.href = "/login";
        } catch (error) {
            alert("Erro no cadastro: " + error.message);
        }
    };

    render() {
        return (
            <div className="form-container">
                <h1 className="texto-principal">Cadastro</h1>
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
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={this.state.nome}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="sobrenome">Sobrenome:</label>
                    <input
                        type="text"
                        id="sobrenome"
                        name="sobrenome"
                        value={this.state.sobrenome}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="dataNascimento">Data nascimento:</label>
                    <input
                        type="date"
                        id="dataNascimento"
                        name="dataNascimento"
                        value={this.state.dataNascimento}
                        onChange={this.handleChange}
                    />

                    <button type="submit">Cadastrar</button>
                </form>
                {this.state.formMessage && <p>{this.state.formMessage}</p>}
                <Link to="/login">Ir para Login</Link>
            </div>
        );
    }
}