import axios from "axios";

const api = axios.create({
    baseURL: 'https://farmaciaapi-utl2.onrender.com/'
});

export const cadastrarUsuario = async (url: string, dados: any, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
};

export const login = async (url: string, dados: any, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
};

export const buscar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url);
    setDados(resposta.data);
};

export const cadastrar = async (url: string, dados: any, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
};

export const atualizar = async (url: string, dados: any, setDados: Function) => {
    const resposta = await api.put(url, dados);
    setDados(resposta.data);
};

export const deletar = async (url: string) => {
    await api.delete(url);
};