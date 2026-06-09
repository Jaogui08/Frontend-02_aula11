'use client';

import NavBar from "../../components/NavBar";
import "../../formStyle.css";
import EstoqueForm from "@/app/components/EstoqueForm";


export default function Estoque() {
    return (
        <section>
            <NavBar/>

            <EstoqueForm/>

        </section>
    );
}
