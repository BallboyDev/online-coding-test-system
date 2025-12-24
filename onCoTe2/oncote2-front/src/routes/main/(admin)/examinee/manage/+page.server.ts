import type { Actions } from "@sveltejs/kit";
import { API_BASE_URL } from "$env/static/private";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    console.log('admin/examinee/manage +page.server.ts load function called');

    const res = await fetch(`${API_BASE_URL}/examinee`)

    const examinees = await res.json();

    return {
        examinees
    }
}

export const actions = {
    regist: async (e) => {
        console.log('ademin/examinee/manage +page.server.ts regist action called');

        const data = await e.request.formData();

        const name = data.get('name');
        const email = data.get('email');
        const password = data.get('password');
        const phone = data.get('phone');
        const group = data.get('group');

        if (!name || !email || !password || !phone) {
            return { success: false, error: 'Missing required fields' };
        }

        // dev: 입력 데이터 타입에 대한 유효성 검사 기능 추가 필요

        const res = await fetch(`${API_BASE_URL}/examinee`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password,
                phone,
                group
            })
        })

        return { success: true }

    },
    delete: async (e) => {
        console.log('admin/examinee/manage +page.server.ts delete action called');

        const data = await e.request.formData();
        const ids = data.get('ids') as string;
        const idArray = ids.split(',');

        for (const id of idArray) {
            const res = await fetch(`${API_BASE_URL}/examinee/${id}`, {
                method: 'DELETE'
            })
        }

        return { success: true }
    }
} satisfies Actions;
