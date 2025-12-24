<script lang="ts">
    import { InputGroup, Input, Button } from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";
    import DescArea from "./area/DescArea.svelte";
    import SettingArea from "./area/SettingArea.svelte";
    import { enhance } from "$app/forms";

    let area = $state(1);
    // 문제 이름
    let quizTitle = $state("");
    // 문제 설명
    let quizDesc = $state("");
    // 문제 내용
    let quizContent = $state("");
    // 사용 가능 언어
    let quizLang = $state<number[]>([]);
    // 난이도
    let quizLevel = $state("1");
    // 정답
    let quizAnswer = $state("");

    $inspect(quizTitle, quizDesc, quizContent, quizLang, quizLevel, quizAnswer);

    onMount(() => {
        console.log("onCote2 /main/(admin)/quiz/create Page");
    });

    const handleSave = ({ formData }: { formData: FormData }) => {
        console.log("저장된 퀴즈 데이터:", {
            quizTitle,
            quizDesc,
            quizContent,
            quizLang,
            quizLevel,
            quizAnswer,
        });

        formData.append("quizTitle", quizTitle);
        formData.append("quizDesc", quizDesc);
        formData.append("quizContent", quizContent);
        formData.append("quizLang", JSON.stringify(quizLang));
        formData.append("quizLevel", quizLevel);
        formData.append("quizAnswer", quizAnswer);
    };
</script>

<!-- 1. 퀴즈 제목 입력 -->
<!-- 2. 퀴즈 설명 입력 -->
<!-- 3. 퀴즈 문제 추가 (문제 유형 선택: 객관식, 주관식 등) -->
<!-- 4. 각 문제에 대한 선택지 및 정답 설정 -->
<!-- 5. 퀴즈 설정 (시간 제한, 점수 배분 등) -->
<!-- 6. 퀴즈 미리보기 -->
<!-- 7. 퀴즈 저장 및 게시 -->

<form
    class="d-flex px-3 py-2"
    method="post"
    use:enhance={handleSave}
    action="?/save"
>
    <InputGroup class="">
        <Button
            type="button"
            active={area === 1}
            color="primary"
            size="sm"
            onclick={() => {
                area = 1;
            }}
        >
            문제 설명
        </Button>
        <Button
            type="button"
            active={area === 2}
            color="primary"
            size="sm"
            onclick={() => {
                area = 2;
            }}
        >
            문제 설정
        </Button>
    </InputGroup>

    <InputGroup class="d-flex justify-content-end">
        <Button
            type="button"
            class=""
            color="primary"
            outline
            size="sm"
            onclick={() => {
                window.location.href = "/main/quiz/list";
            }}
        >
            메인페이지 돌아가기
        </Button>
        <Button
            type="button"
            class=""
            color="primary"
            outline
            size="sm"
            onclick={() => {
                quizTitle = "";
                quizDesc = "";
            }}
        >
            초기화
        </Button>
        <Button
            type="submit"
            class=""
            color="primary"
            outline
            size="sm"
            onclick={() => {
                console.log("저장된 퀴즈 데이터:", {
                    quizTitle,
                    quizDesc,
                    quizContent,
                    quizLang,
                    quizLevel,
                    quizAnswer,
                });
            }}>저장</Button
        >
    </InputGroup>
</form>

{#if area === 1}
    <DescArea bind:quizTitle bind:quizDesc bind:quizContent />
{:else if area === 2}
    <SettingArea
        bind:quizTitle
        bind:quizDesc
        bind:quizContent
        bind:quizLang
        bind:quizLevel
        bind:quizAnswer
    />
{/if}

<style lang="scss">
</style>
