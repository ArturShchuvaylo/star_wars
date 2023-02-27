export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.log(`Couldn't fatch,${res.status}`);
            return false;
        }

        return await res.json();

    } catch (error) {
        console.log(`This ${error} happened but we are already fixing it!`);
        return false;
    }


}

// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
//     .then(body => console.log(body))

// (async () => {
//     const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//     console.log(body);
// }
// )();