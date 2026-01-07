import { API_BASE_URL } from "$env/static/private";
import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const res = await fetch(`${API_BASE_URL}/quiz`);

    const quizzes = await res.json();

    return { quizzes };
}

export const actions = {
    delete: async (e) => {

        const data = (await e.request.formData()).get('ids') as string

        const res = await fetch(`${API_BASE_URL}/quiz/${data}`, {
            method: 'delete',
        })

    }
} satisfies Actions