async function getAnnotationByWebsiteID(website_id, api_key) {
    const url = `${BASE_API_URL}/api/annotation/all/${website_id}`;
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'API_KEY': `${api_key}`,
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    const data = await res.json();
    console.log(data);
    return data;
}