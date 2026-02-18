import { API_BASE_URL } from "$env/static/private";
import type { Actions } from "@sveltejs/kit";

export const actions = {
    test: async () => {
        const result = await fetch(`${API_BASE_URL}`)

        console.log(result)
    }
} satisfies Actions;