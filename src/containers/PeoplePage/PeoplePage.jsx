import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { withApiError } from "@hoc-helpers/withApiError";
import PeopleList from "@components/PeoplePage/PeopleList";

import { getApiResource } from "@utils/network";
import { HTTPS, API_PEOPLE } from "@constans/api";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";

import style from './PeoplePage.module.css';

const PeoplePage = ({ setApiError }) => {
    const [people, setPeople] = useState([]);

    const getResource = async (url) => {
        const body = await getApiResource(url);

        if (body) {
            const result = body.results.map(({ name, url }) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)
                return {
                    id,
                    name,
                    url,
                    img
                }
            })
            setPeople(result);
        }
        else {
            setApiError(true);
        }
    }
    useEffect(() => {
        getResource(API_PEOPLE)
    }, [])

    return (
        <>
            <PeopleList people={people} />
        </>
    );
}

PeoplePage.propTypes = {
    setApiError: PropTypes.func
}

export default withApiError(PeoplePage);