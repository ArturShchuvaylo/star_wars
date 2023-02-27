import React, { useEffect, useState } from "react";
import { getApiResource } from "../../utils/network";
import { API_PEOPLE } from "../../constans/api";

import style from './PeoplePage.module.css';


const PeoplePage = () => {

    const [people, setPeople] = useState([]);

    const getResource = async (url) => {
        const body = await getApiResource(url);
        const result = body.results.map(({ name, url }) => {
            return {
                name,
                url
            }
        })
        setPeople(result);
    }

    useEffect(() => {
        getResource(API_PEOPLE)
    }, [])


    return (
        <>
            <ul>
                {
                    people.map(elem => <li key={elem.url}>{elem.name}</li>)
                }
            </ul>
        </>
    );
}

export default PeoplePage;