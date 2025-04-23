import React, { Component } from "react";
import firebase from "../../services/Firebase";

export default class Principal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: null,
            loading: true,
        };
    }

    componentDidMount() {
        const user = firebase.auth().currentUser;
        if (user) {
            firebase.firestore().collection("usuarios").doc(user.uid).get()
                .then((doc) => {
                    if (doc.exists) {
                        this.setState({ userData: doc.data(), loading: false });
                    }
                })
                .catch((error) => {
                    console.error("Erro ao carregar os dados do usuário:", error);
                    this.setState({ loading: false });
                });
        }
    }

    render() {
        const { userData, loading } = this.state;

        if (loading) {
            return <p>Carregando...</p>;
        }

        return (
            <div className="principal-container">
                <h1>Bem-vindo, {userData.nome}!</h1>
                <p><strong>Nome:</strong> {userData.nome}</p>
                <p><strong>Sobrenome:</strong> {userData.sobrenome}</p>
                <p><strong>Data de Nascimento:</strong> {userData.nascimento}</p>
            </div>
        );
    }
}