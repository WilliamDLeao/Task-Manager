import { useSearchParams } from "react-router"
import LiquidEther from '../components/LiquidEther';
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";


function TaskPage() {
  const navigate = useNavigate()
    const [searchParams] = useSearchParams() //essa brincadeira aqui é para pegar os parametros da url, tipo ?title=Minha%20Tarefa&description=Essa%20é%20a%20descrição%20da%20tarefa pra eu conseguir ir pra descrição da tarefa que eu quero
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    return (
        <div className="w-screen h-screen flex justify-center p-6 overflow-hidden relative">
          <div className="absolute inset-0 z-[-1]">
      <div style={{ width: '100%', height: 680, position: 'relative'  }}>
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#5227FF"
          color1="#FF9FFC"
          color2="#B19EEF"
        />
      </div>
    </div>
          <div className="w-[500px] space-y-4">
            <div className="flex justify-center relative mb-6">
              
              <h1 className="text-3xl text-slate-100 font-bold text-center">Detalhes da Tarefa</h1>

            </div>
            <div className="bg-slate-100 p-4 rounded-md">
              <button onClick={() => navigate(-1)} 
              className="absolute p-2">
                <ChevronLeft />
              </button>
              <h2 className="text-xl text-black font-semibold text-center">{title}</h2>
              <p className="text-slate-800 text-center">{description}</p>
              
            </div>
            
          </div>
        </div>
          
    )
}

export default TaskPage