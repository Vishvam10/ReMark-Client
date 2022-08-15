import { BASE_API_URL } from "./constants";

export async function verifyToken(key) {
    const url = `${BASE_API_URL}/api/token/verify/${key}`;
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    const data = await res.json();
    return data;
}