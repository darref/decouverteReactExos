import react , {useCallback , useState , useMemo} from 'react';

const Todolist = () =>{
    const [task, setTask] = useState('');
    const [todoTab , addToTab] = useState<string[]>(["toto" , "tata"]);


    const handleAddTaskToTab = useCallback(
            () => {
                addToTab([...todoTab, task]);
            },
            [todoTab , task]
    );



    return (
        <div>
            <input type="text" />
            <input type="button"  name="boutonAjouter"> Ajouter la tache </input>
            <ul>
                {todoTab.map((e , i)=>
                    <li key={i}>{e}</li>
                )}
            </ul>
            <input type="button" name="boutonSupprimer"> Supprimer la tache </input>
        </div>

    );

}

export default Todolist;