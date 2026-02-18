<script lang="ts">
    import { Input, InputGroup, Label } from "@sveltestrap/sveltestrap";

    let {
        quizTitle = $bindable(),
        quizDesc = $bindable(),
        quizContent = $bindable(),

        quizLang = $bindable(),
        quizLevel = $bindable(),
        quizAnswer = $bindable(),
    } = $props();

    const setLang = (lang: string) => {
        if (quizLang.includes(lang)) {
            quizLang = quizLang.filter((l: string) => l !== lang);
        } else {
            quizLang = [...quizLang, lang];
        }
    };
</script>

<div class="d-flex flex-fill overflow-hidden">
    <div class="desc w-25 border-end px-5 py-3 flex-shrink-0">
        <h2>{quizTitle || "제목"}</h2>
        <div>{quizContent || "내용"}</div>
    </div>

    <div class="px-5 w-100 py-3 overflow-scroll">
        <Label>사용 언어 선택</Label>
        <InputGroup class="mb-3">
            <Input
                type="checkbox"
                class="me-2"
                label="javascript"
                onchange={(e) => {
                    setLang("1");
                }}
            />
            <Input
                type="checkbox"
                class="me-2"
                label="python"
                onchange={(e) => {
                    setLang("2");
                }}
            />
            <Input
                type="checkbox"
                class="me-2"
                label="java"
                onchange={(e) => {
                    setLang("3");
                }}
            />
            <Input
                type="checkbox"
                class="me-2"
                label="c/c++"
                onchange={(e) => {
                    setLang("4");
                }}
            />
            <Input
                type="checkbox"
                class="me-2"
                label="sql"
                onchange={(e) => {
                    setLang("5");
                }}
            />
        </InputGroup>

        <Label>난이도</Label>
        <Input type="select" class="mb-3" bind:value={quizLevel}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </Input>

        <Label>정답</Label>
        <Input
            type="text"
            placeholder="정답을 입력하세요."
            bind:value={quizAnswer}
        />
    </div>
</div>

<style lang="scss">
    .desc {
        min-width: 20rem;
    }
</style>
