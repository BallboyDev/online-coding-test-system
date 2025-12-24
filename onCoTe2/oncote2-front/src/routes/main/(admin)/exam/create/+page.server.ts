import { API_BASE_URL } from "$env/static/private";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    // const res = await fetch(`${API_BASE_URL}/quiz`);

    // const quizzes = await res.json();

    // console.log(quizzes)
    // return { quizzes };
}

export const actions = {
    search: async (e) => {
        const search = (await e.request.formData()).get('search')
        console.log('search >>', search)

        const quizList = await fetch(`${API_BASE_URL}/quiz/search?query=${search}`)

        const data = await quizList.json()

        return { success: true, quizList: data }
    }
}