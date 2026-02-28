import { useState } from "react";
function AddTask({onAddTaskSubmit}) {
    const [title, setTitle] = useState("");
    const [description, setDescription]= useState("");
    return(<div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
    <input type="text" placeholder="Digite o título da tarefa" className="border border-slate-700 outline-slate-400 px-4 py-2 rounded-md  text-black" value={title} onChange={(Event) => setTitle(Event.target.value)}/>

    <input type="text" placeholder="Digite a descrição da tarefa" className="border border-slate-700 outline-slate-400 px-4 py-2 rounded-md text-black" value={description} onChange={(Event) => setDescription(Event.target.value)}/>
    <button 
    onClick={() => {
        if(!title.trim() || !description.trim()) return alert("Preencha os campos para adicionar uma tarefa")  

      onAddTaskSubmit(title, description);
      setTitle("");
      setDescription("");
    }}>Adicionar</button>
   </div>)
}

export default AddTask;