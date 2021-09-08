import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const Api = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const { data } = await Axios.get('https://pokeapi.co/api/v2/pokemon/');
            setLoading(false);
            setPokemons(data.results);
            console.log(data.results);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(true);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            {loading ?
                <div>
                    Loading...
                </div> : error ?
                    <div>Error fetching data</div> 
                    : 
                    <div>{pokemons.map(item => {
                        return(
                        <div className="product">
                            <span>{item.name}</span>
                            <span>{item.url}</span>
                        </div>)
                    })}</div>
            }
        </div>
    )
}

export default Api
