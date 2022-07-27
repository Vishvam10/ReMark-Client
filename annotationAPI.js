async function getAnnotationByWebsiteID() {
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
    return data;
}

async function createAnnotation(bodyData) {
    const url = `${BASE_API_URL}/api/annotation`;
    console.log(bodyData);
    const auth_token = localStorage.getItem("user_access_token");
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'API_KEY': `${api_key}`,
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${auth_token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
    })
    const data = await res.json();
    getAnnotationByWebsiteID();
    return data;
}