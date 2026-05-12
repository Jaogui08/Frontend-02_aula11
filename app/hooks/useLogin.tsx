'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '../lib/api';
import Cookies from 'js-cookie';

export function useLogin() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function entrar(evento: React.FormEvent) {
    evento.preventDefault();

    const dadosLogin = {
      username: username,
      password: password,
    };

    api.post('/users/auth', dadosLogin)
      .then((resposta) => {
        Cookies.set('logged', 'true', { expires: 1 });
        Cookies.set('userName', resposta.data.name, { expires: 1 });

        router.push('/dashboard');
      })
      .catch(() => {
        alert('Erro: Usuário ou senha incorretos!');
      });
  }

  function cadastrar(evento: React.FormEvent) {
    evento.preventDefault();

    const dadosCadastro = {
      username: username,
      password: password,
      name: name
    };

    api.post('/users/', dadosCadastro)
      .then((resposta) => {
        alert("Usuário cadastrado com sucesso!");

        router.push('/');
      })
      .catch(() => {
        alert('Erro: Informações inválidas para o cadastro!');
      });
  }

  return {
    username, setUsername,
    password, setPassword,
    name, setName,
    entrar,
    cadastrar
  };
}