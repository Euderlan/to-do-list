import style from "./Main.module.css";

function Main(){
    return(
        <section className={style.Main_container}>
            <h1>Lista de Tarefas</h1>
            <div className={style.Main_container_menor}>
            <h1>Tarefas</h1>

            </div>

        </section>
    )
}

export default Main;