'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import NavBar from "../../components/NavBar";
import "../../formStyle.css";
import router from "next/router";
import { useEstoque } from "@/app/hooks/useEstoque";


export default function Estoque() {
    const {
        produtos, loading, listarProdutos, salvar, excluir, prepararEdicao,
        nome, setNome, descricao, setDescricao, preco, setPreco, url, setUrl,
        editandoId, limparFormulario, localizacao, quantidade, id_produto,
    } = useEstoque();

    useEffect(() => {
        listarProdutos();
    }, [listarProdutos]);

    return (
        <section>
            <NavBar/>

            <div className="login-container" style={{ padding: '20px', minHeight: '100vh' }}>
            
            <div className="login-card" style={{ width: '100%', maxWidth: '500px', marginBottom: '30px' }}>
                <h1>{editandoId ? 'Editar Estoque' : 'Novo Estoque'}</h1>
                
                <form onSubmit={salvar}>
                    <div className="input-group">
                        <input type="number" placeholder="Id do produto" className="input-field"
                            value={id_produto} onChange={e => setNome(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="Quantidade do produto" className="input-field"
                            value={quantidade} onChange={e => setDescricao(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="Setor do produto" className="input-field"
                            value={localizacao} onChange={e => setPreco(e.target.value)} required />
                    </div>

                    <button type="submit" className="btn-login">
                        {editandoId ? 'Atualizar Estoque' : 'Cadastrar Estoque'}
                    </button>
                    {editandoId && (
                        <button type="button" onClick={limparFormulario} 
                                style={{ background: 'none', border: 'none', color: 'gray', marginTop: '10px', cursor: 'pointer' }}>
                            Cancelar Edição
                        </button>
                    )}
                </form>
            </div>
        </div>
        </section>
    );
}
