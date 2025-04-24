import { useState } from "react";
import imgAnimada from "../public/Animada.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  // Hooks
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  // Função para lidar com o clique no botão
  function ClickLogim() {
    if (!user || !pass) {
      return toast.error("Preencha todos os campos")
    }
    if (user.length < 8 || user.length > 10 ) {
       return toast.error("Usuário invaliado")
    }
    if (pass.length<8 || pass.length > 10){
      return toast.error("Senha")
    }

    // Requisição para backend
    console.log(user);
    console.log(pass);
    toast.success('🦄 Wow so easy!')
  }

  return (
    <div className="w-full h-screen flex bg-[#231d30]">
      <ToastContainer position="top-right" autoClose={5000} theme="colored" />
      <div className="esquerda w-[50%] h-full flex items-center justify-center flex-col bg-[#030303]">
        <h1 className="text-[30px] font-bold text-[#84e039]">
          Entre para o nosso time
        </h1>
        <img src={imgAnimada} alt="imagem-animada" width={500} />
      </div>
      <div className="direita w-[50%] h-full flex items-center justify-center">
        <div className="w-[50%] h-[350px] bg-[#dbff0c] rounded-xl">
          <div className="w-full h-[15%] flex items-center justify-center">
            <h1 className="text-[30px] text-[#0bfc1f] font-bold italic">
              LOGIN
            </h1>
          </div>
          <div className="w-full h-[60%] p-[20px]">
            <label htmlFor="user" className="text-white">
              Usuário
            </label>
            <input
              onChange={(event) => setUser(event.target.value)}
              type="text"
              id="user"
              className="w-full rounded-md p-[10px] bg-amber-400 text-white mb-4"
            />

            <label htmlFor="pass" className="text-white">
              Senha
            </label>
            <input
              onChange={(event) => setPass(event.target.value)}
              type="password"
              id="pass"
              className="w-full rounded-md p-[10px] bg-amber-400 text-white"
            />
            <div className="w-full flex items-center justify-center text-white pt-1">
              <a href="">Esqueceu sua Senha?</a>
            </div>
          </div>
          <div className="w-full h-[25%] p-[20px] flex items-center justify-center">
            <button
              onClick={ClickLogim}
              className="w-full h-[50px] text-[20px] bg-[#0bfc1f] rounded-lg text-[#eeebeb] italic"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
