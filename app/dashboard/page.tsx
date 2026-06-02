'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useProdutos } from "../hooks/useProduto";
import "./dashboard.css";
import NavBar from "../components/NavBar";

export default function Dashboard() {
    const router = useRouter();
    const [name, setName] = useState("");
    const { produtos, loading, listarProdutos, excluir, visualizarProduto } = useProdutos();

    useEffect(() => {
        listarProdutos();
    }, [listarProdutos]);

    useEffect(() => {
        const userName = Cookies.get("userName");

        if (userName) {
            setName(userName);
        } else {
            router.push("/");
        }
    }, [router]);

    return (
        <div>
            <NavBar />
            <div className="login-card" style={{ width: '100%', padding: '60px'}}>
                <h1 style={{fontSize: "1.5rem", fontWeight: "500", textAlign: "center"}} >Produtos Cadastrados</h1>
                {loading ? <p>Carregando...</p> : (
                    <div style={{ width: '100%', marginTop: '20px'}}>
                        <div style={{ borderBottom: '2px solid #757575', display: "grid", gridTemplateColumns: "1fr 3fr 1fr 1fr", fontWeight: "600"}}>
                            <div style={{ textAlign: 'left', paddingBottom: "10px", paddingLeft: "30px" }}>Produto</div>
                            <div style={{ textAlign: 'left', paddingBottom: "10px" }}>Nome</div>
                            <div style={{ textAlign: 'left', paddingBottom: "10px" }}>Preço</div>
                            <div style={{ textAlign: 'center', paddingBottom: "10px" }}>Ações</div>
                        </div>
                        <div>
                            {produtos.map(p => (
                                <div key={p.id} style={{ borderBottom: '1px solid #757575', display: "grid", gridTemplateColumns: "1fr 3fr 1fr 1fr", alignItems: "center", fontWeight: "500" }}>
                                    <div style={{ paddingTop: "8px", paddingBottom: "8px", paddingLeft: "22px" }}>
                                        <img
                                            src={p.url}
                                            onClick={() => visualizarProduto(p)}
                                            style={{
                                                width: "80px",
                                                height: "80px",
                                                borderRadius: "10px",
                                                cursor: "pointer"
                                            }}
                                        />
                                    </div>
                                    <div style={{ textAlign: "left" }}>{p.nome}</div>
                                    <div style={{ textAlign: "left" }}>R$ {(Number(p.preco) || 0).toFixed(2)}</div>
                                    <div style={{ textAlign: 'center' }}>
                                        <button onClick={() => router.push(`/dashboard/produtos/${p.id}`)}
                                                style={{ marginRight: '10px', color: '#007bff', background: 'none', border: 'none', cursor: 'pointer' }}>
                                            Editar
                                        </button>
                                        <button onClick={() => excluir(p.id!)}
                                                style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>
                                            Excluir
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}