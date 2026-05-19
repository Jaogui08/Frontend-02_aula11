'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '../lib/api';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

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
        Swal.fire({
          title: "Erro ao fazer login!",
          text: "Usuário ou senha incorretos",
          icon: "error",
          confirmButtonColor: "#e91414"
        });
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
        Swal.fire({
          title: "Usuário cadastrado com sucesso!",
          icon: "success",
          confirmButtonColor: "#e91414"
        });

        router.push('/');
      })
      .catch(() => {
        Swal.fire({
          title: "Erro ao cadastrar usuário!",
          text: "Informações inseridas inválidas",
          icon: "error",
          confirmButtonColor: "#e91414"
        });
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