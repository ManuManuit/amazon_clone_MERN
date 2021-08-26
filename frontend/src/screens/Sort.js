import React, { useState, useEffect } from 'react'

const Sort = () => {

    const [list, setList] = useState([
        { nombre: 'juan', edad: 50 },
        { nombre: 'alberto', edad: 40 },
        { nombre: 'aragor', edad: 20 },
    ])

    console.log("LISTA", list);

    const click = () => {
        console.log("CLICKED BUTTON");
        let newSortedList = [...list].sort((a, b) => (a.edad > b.edad ? 1 : a.edad < b.edad ? -1 : 0));
        if (newSortedList[0] === list[0]) {
            newSortedList = [...list].sort((b, a) => (a.edad > b.edad ? 1 : a.edad < b.edad ? -1 : 0));
        }
        setList(newSortedList);
    }


    return (
        <div>
            <button onClick={click}>
                Ordenar
            </button>
            <div>{list.map(x => <div>
                <span>{x.nombre}</span>
                <span>{x.edad}</span>
            </div>)}</div>

        </div>
    )
}

export default Sort
