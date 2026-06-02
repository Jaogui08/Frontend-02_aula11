import { useEffect, useState } from "react";
import "./navbar.css"
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export default function NavBar(){
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
        Swal.fire({
          title: "Sair da conta?",
          text: "Sua sessão atual será encerrada",
          icon: "warning",
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: "Sim, sair",
          cancelButtonText: "Cancelar",
          confirmButtonColor: "#e91414",
          cancelButtonColor: "#848484ff",
        }).then((result) => {
            if (result.isConfirmed) {
                Cookies.remove("logged");
                Cookies.remove("userName");
                router.push("/");
            }
        });
    }
    
    return(
        <nav>
            <div>
                <img className="navImg" src="/deathbat-logo.png"/>
            </div>
            <div className="links">
                <a href="/dashboard">Dashboard</a>
                <a href="/dashboard/produtos">Produtos</a>
                <a href="/dashboard/estoque">Estoque</a>
                <button onClick={logout}>
                    Sair do Sistema
                </button>
            </div>
        </nav>
    )
}