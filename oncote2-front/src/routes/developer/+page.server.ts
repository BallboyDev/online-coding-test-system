import { API_BASE_URL } from "$env/static/private";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const res = await fetch(`${API_BASE_URL}/member`)

    const members = await res.json();

    console.log(members)

    return { members }
}

export const actions = {
    createMember: async (e) => {
        console.log('createMember')

        const data = await e.request.formData()

        console.log(data.get('id'), data.get('name'))

        const res = await fetch(`${API_BASE_URL}/member`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: data.get('id'),
                pw: data.get('pw'),
                name: data.get('name'),
                email: data.get('email'),
                auth: data.get('auth')
            })
        })


    }
}