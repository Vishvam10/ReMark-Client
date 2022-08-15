export function setHeaders(api_key=null, auth_token=null) {
    let headers =  {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    if(api_key) {
        headers["API_KEY"] = api_key;
    }
    if(auth_token) {
        headers["Authorization"] = `Bearer ${auth_token}`
    }
    return headers;
}

export async function GET(url, api_key=null, auth_token=null) {
    const headers = setHeaders(api_key, auth_token)
    const res = await fetch(url, {
        method: 'GET',
        headers: headers
    })
    return res;
}

export async function POST(url, data, api_key=null, auth_token=null) {
    const headers = setHeaders(api_key, auth_token);
    const res = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
    return res;
}

export async function PUT(url, data, api_key=null, auth_token=null) {
    const headers = setHeaders(api_key, auth_token);
    const res = await fetch(url, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(data)
    })
    return res;
}

export async function DELETE(url, api_key=null, auth_token=null) {
    const headers = setHeaders(api_key, auth_token);
    const res = await fetch(url, {
        method: 'DELETE',
        headers: headers
    });
    return res;
}