'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import NavBar from "../../components/NavBar";
import "../../formStyle.css";
import router from "next/router";


export default function Dashboard() {
    const [nome, setNome] = useState("");

    return (
        <section className="dashboardContainer">
            <NavBar/>

            <div className="dashboardCont">
                <h1>Seja bem-vindo, {nome || "Visitante"}!</h1>
                <p>Esta é a área de produtos</p>
            </div>
        </section>
    );
}
