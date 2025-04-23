import imgAnimada from "../public/Animada.svg"
export default function App(){
  return (
    <div className="w-full h-screen flex bg-[#ff0000]">
      <div className="w-[50%] h-full font-bold flex flex-col items-center justify-center ">
        <h1 className="text-[30px]  text-[#00FF88]"> Faça Logim 
       entre para o nosso time</h1>
        <img src={imgAnimada} alt="'imagem anima" width={500} />
      </div>
      <div className="w-[50%] h-full flex items-center justify-center">
        <div className="w-[50%] h-[350px] bg-[#611919] rounded-xl">
          <div className="w-full h-[15%] flex felex-col items-center justify-center">
            <h1 className="w-full text-[#00FF88]">LOGIM</h1>
          </div>
          <div className="w-full h-[70%] p-[20px] ">
            <label htmlFor="user" className="text-white">Usuário</label>
              <input type="text" id="user" className="w-full rounded-md p-[10px] bg-[#33303a]" />
              <label htmlFor="pass" className="text-white">Senha</label>
              <input type="text" name="passawword" id="pass" className="w-full rounded-md p-[10px] bg-[#33303a]"  />
          </div>
          <div className="w-full h-[15%]"></div>
        </div>

      </div>
    </div>
  )

} 