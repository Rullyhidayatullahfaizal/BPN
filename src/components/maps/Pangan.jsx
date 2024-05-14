import React, { useEffect, useState } from 'react'
import { Loading } from './Loading'
import LoadCountriesTask from "../../tasks/LoadCountries";
import { MapPangan } from './MapPangan';


export const Pangan = () => {

    const [countries, setCountries] = useState([]);

    const load = () => {
        const loadCountriesTask = new LoadCountriesTask();
        loadCountriesTask.load(setCountries)
    }

    useEffect(load,[]);
    

  return (
    <div>
        {countries.length === 0 ?(
            <Loading></Loading>
        ) :(
            <div>
                <MapPangan countries={countries}></MapPangan>
            </div>
        )}
    </div>
  )
}
