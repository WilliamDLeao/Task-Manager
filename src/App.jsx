import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import LiquidEther from './components/LiquidEther';

function App() {  
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [
    {
      id: 1,
      title: "Estudar Programação",
      description: "Estudar React e JavaScript",
      isCompleted: false,
    } ,
    {
      id: 2,
      title: "Fazer Exercícios",
      description: "Praticar exercícios físicos por 30 minutos",
      isCompleted: false,
    } ,
    {
      id: 3,
      title: "Ler um Livro",
      description: "Ler pelo menos 20 páginas de um livro",
      isCompleted: false,
    }
  ]); //cria uma classe que é uma lista de tarefas 


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks)); //salva a lista de tarefas no localStorage toda vez que ela for atualizada (transforma a lista em string para poder salvar)
  }, [tasks]) //toda vez que a lista de tarefas for atualizada, o useEffect é executado (mas n tem nada dentro, pq n precisa fazer nada quando isso acontecer)

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task, //retorna tudo oq tava na tareva
          isCompleted: !task.isCompleted //inverte o valor de isCompleted
        }
      } else {
        return task; //se n for a tarefa clicada, retorna a tarefa como está
      }
      
    });
    setTasks(newTasks); //atualiza o estado com a nova lista de tarefas
  }
  
  function onDeleteTaskClick(taskId) {
    const newTasks =  tasks.filter(task => task.id != taskId) //isso aqui é para filtrar: eu quero que fique so as noticias que NAO correspondem ao meu filtro (mesma coisa que se eu tivesse apagado)
    setTasks(newTasks)
  }


  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 2,
      title: title,
      description: description,
      isCompleted: false,
    } ;
    setTasks([...tasks, newTask]);
  }
  return (
  <div className="w-screen h-screen flex justify-center p-6 overflow-hidden relative">
    <div className="absolute inset-0 z-[-1]">
      <div style={{ width: '100%', height: 780, position: 'relative'  }}>
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
      <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
      <AddTask onAddTaskSubmit={onAddTaskSubmit} />
      <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} /> 
    </div>
  </div>
);
}

export default App;