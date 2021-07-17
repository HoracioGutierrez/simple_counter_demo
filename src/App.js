import {useState} from "react"

const App = () => {
    const [contador, setContador] = useState(0)

    const sumar = () => setContador(contador + 1)

    const restar = () => setContador(contador - 1)

    const resetear = () => setContador(0)

    return (
        <>
            <p>Contador {contador}</p>
            <button onClick={sumar}>+</button>
            <button onClick={resetear}>reset</button>
            <button onClick={restar}>-</button>
        </>
    )
}

export default App;