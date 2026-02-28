import { ChevronRight, Trash } from "lucide-react";
import { use } from "react";
import { useNavigate } from "react-router";

function Tasks(props) {
    const navigate = useNavigate()

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams()  //tratamento p nn dar pica
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/task?${query.toString()}`) //essa brincadeira aqui é para pegar os parametros da url, tipo ?title=Minha%20Tarefa&description=Essa%20é%20a%20descrição%20da%20tarefa pra eu conseguir ir pra descrição da tarefa que eu quero
    }

    return <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">{props.tasks.map(task => (<li key={task.id} className="flex gap-2">
    <button onClick={() => props.onTaskClick(task.id)} className={`bg-slate-400 text-left text-white p-2 rounded-md w-full ${task.isCompleted ? "line-through" : ""}`}>
    {task.title}
    </button>

    <button onClick={ () =>onSeeDetailsClick(task)} className="bg-slate-400 p-2 rounded-md text-white">
        <ChevronRight />
    </button>

    <button onClick={() => props.onDeleteTaskClick(task.id)} className="bg-slate-400 p-2 rounded-md text-white">
        <Trash />
    </button>
    </li>))}</ul> //a key o react usa internamente para identificar cada item da lista, não tem retorno visual
}
export default Tasks;