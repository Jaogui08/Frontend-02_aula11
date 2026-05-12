'use client';

import Link from 'next/link';
import { useLogin } from '../hooks/useLogin';
import "../formStyle.css"

export default function Cadastro() {
  
  const { 
    username, setUsername, 
    password, setPassword,
    name, setName,
    cadastrar
  } = useLogin();

  return (
    <div className="login-container">
        <div className="login-card">
            <h1>Cadastrar usuário</h1>
            
            <form onSubmit={cadastrar}>
            
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Digite seu Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)} // Atualiza apenas o username
                        className="input-field"
                        required
                    />
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Digite seu Usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Atualiza apenas o username
                        className="input-field"
                        required
                    />
                </div>
                
                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Digite sua Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Atualiza apenas o password
                        className="input-field"
                        required
                    />
                </div>

                <button type="submit" className="btn-login">
                    Cadastrar
                </button>
            </form>

            <div className="footer-link">
                <span>Já possui uma conta? </span>
                <Link href="./">Faça login aqui</Link>
            </div>
        </div>
    </div>
  );
}