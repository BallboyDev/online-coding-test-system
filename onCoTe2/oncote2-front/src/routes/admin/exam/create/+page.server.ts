import { API_BASE_URL } from "$env/static/private";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const res = await fetch(`${API_BASE_URL}/quiz`);

    const quizzes = await res.json();

    return { quizzes };
}

export const actions = {
    search: async (e) => {
        const search = (await e.request.formData()).get('search')

        const quizList = await fetch(`${API_BASE_URL}/quiz/search?query=${search}`)

        const data = await quizList.json()

        return { success: true, quizList: data }
    },
    saveExam: async (e) => {

        const data = await e.request.formData()

        const res = await fetch(`${API_BASE_URL}/exam`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: data.get('title'),
                description: data.get('description'),
                // dtStart: data.get('dtStart'),
                // dtEnd: data.get('dtEnd'),
                period: {
                    start: data.get('dtStart'),
                    end: data.get('dtEnd'),
                },
                count: data.get('count'),
                quizList: JSON.parse(data.get('quizList') as string),
            })
        })

        return { success: true }
    }

}