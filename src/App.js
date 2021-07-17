import {useState} from "react"

const App = () => {
    const [contador, setContador] = useState(0)

    const sumar = () => setContador(contador + 1)

    const restar = () => setContador(contador - 1)

    const resetear = () => setContador(0)

    return (
        <>
            <h1>Contador Simple</h1>
            <p>Contador Actual : {contador}</p>
            <div className="button-navbar">
                <button onClick={sumar} className="material-icons">add</button>
                <button onClick={resetear} className="material-icons">autorenew</button>
                <button onClick={restar} className="material-icons">remove</button>
            </div>
        </>
    )
}

export default App;