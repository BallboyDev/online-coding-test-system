import { API_BASE_URL } from "$env/static/private";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const res = await fetch(`${API_BASE_URL}/exam`)

    const exams = await res.json()

    return { exams }
}