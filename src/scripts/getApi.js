async function getApiEmpresas(url){

    try{
        const data = await fetch(url);
        const dataJson = await data.json();
        return dataJson;
    } catch(error) {
        return error;
    }
}

