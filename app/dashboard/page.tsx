'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import NavBar from "../components/NavBar";
import "../formStyle.css";


export default function Dashboard() {
    const router = useRouter();
    const [nome, setNome] = useState("");


    useEffect(() => {
        const userName = Cookies.get("userName");
       
        if (userName) {
            setNome(userName);
        } else {
            // Caso o cookie suma por algum motivo, volta para o login
            router.push("/");
        }
    }, [router]);


    function logout() {
        Cookies.remove("logged");
        Cookies.remove("userName");
        router.push("/");
    }


    return (
        <section className="dashboardContainer">
            <NavBar/>

            <div className="dashboardCont">
                <h1>Seja bem-vindo, {nome || "Visitante"}!</h1>
                <p>Esta é uma área protegida</p>

                <button onClick={logout}> Sair do Sistema </button>
            </div>
        </section>
    );
}
