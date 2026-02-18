import { API_BASE_URL } from "$env/static/private";
import { redirect } from "@sveltejs/kit";


export const actions = {
    save: async (e) => {

        const data = await e.request.formData();

        const quizTitle = data.get('quizTitle');
        const quizDesc = data.get('quizDesc');
        const quizContent = data.get('quizContent');
        const quizLang = data.get('quizLang');
        const quizLevel = data.get('quizLevel');
        const quizAnswer = data.get('quizAnswer');


        if (!quizTitle || !quizContent || !quizLang || !quizLevel || !quizAnswer) {
            return { success: false, error: 'Missing required fields' };
        }

        // dev: 입력 데이터 타입에 대한 유효성 검사 기능 추가 필요

        const res = await fetch(`${API_BASE_URL}/quiz`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: quizTitle,
                description: quizDesc,
                content: quizContent,
                language: JSON.parse(quizLang as string),
                level: quizLevel,
                answer: quizAnswer
            })
        })


        // return { success: true }

        throw redirect(303, '/main/quiz/list')
    }
}