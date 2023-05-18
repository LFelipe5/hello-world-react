import  { useEffect, useState }  from 'react'
import api from '../services/api'
import '../App.css'

export default function ConsumirApi(){
    const [todo, setTodo] = useState([])

    useEffect(() => {
        async function fetchDados(){
            try {
                const response = await api.get('todos/');
                setTodo(response.data);
              } catch (error) {
                console.error(error);
              }
        }

        fetchDados();

    }, []);


    return (
        <div>
        {/* Exibir os dados na tela */}
        <h1>Tarefas</h1>
        {todo.map(item => (
            <>
                <h2>Título: {item.title}</h2>
                <p>Id: {item.id}</p>
                <p>Id do Usuário: {item.userId}</p>
                <p>Completo: {item.completed ? 'Sim' : 'Não'}</p>
            </>
        ))}
        </div>
    );

}