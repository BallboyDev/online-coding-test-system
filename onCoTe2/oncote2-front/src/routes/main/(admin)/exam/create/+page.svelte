<script lang="ts">
    import { enhance } from "$app/forms";
    import type { ActionResult } from "@sveltejs/kit";
    import {
        Button,
        Column,
        Input,
        Label,
        Table,
    } from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";

    let quizList: any[] = $state([]);
    let examTitle: string = $state("");
    let searchQuiz: string = $state("아주");

    $inspect(searchQuiz, examTitle, quizList);

    onMount(() => {
        console.log("onCote2 /main/(admin)/exam/create Page");
    });

    const search = () => {
        return async ({ result }: { result: ActionResult }) => {
            if (result.type === "success") {
                const data = result.data?.quizList;
                quizList = data;
            } else {
            }

            // const data = result.data.quizList;

            // console.log(data);

            // quizList = data;
        };
    };
</script>

<!-- 
1. 시험 타이틀
2. 사용 문제 리스트
3. 기간
4. 인원
-->

<div>
    <div class="d-flex mb-5">
        <Input
            class="me-3 "
            type="text"
            placeholder="시험의 이름을 입력해주세요."
            bind:value={examTitle}
        />
        <Button class="flex-shrink-0" color="primary">시험 생성</Button>
    </div>

    <div class="d-flex">
        <div class="w-50 pe-3 border-end">
            <div class="mb-5">
                <Label>시험 설명</Label>
                <Input type="text" />
            </div>
            <div class="mb-5">
                <Label>시험 운영 기간</Label>
                <Input type="datetime-local" />
                ~
                <Input type="datetime-local" />
            </div>
            <div class="mb-5">
                <Label>응시자 인원수</Label>
                <Input type="number" />
            </div>
        </div>
        <div class="w-50 ps-3">
            <div class="mb-5">
                <Label>사용 문제</Label>

                <div>
                    <form
                        class="d-flex"
                        method="post"
                        action="?/search"
                        use:enhance={search}
                    >
                        <Input
                            type="search"
                            name="search"
                            class="me-3"
                            bind:value={searchQuiz}
                        />
                        <Button
                            class="flex-shrink-0"
                            color="primary"
                            type="submit"
                        >
                            검색
                        </Button>
                    </form>
                    <div>
                        <Button size="sm">1</Button>
                        <Button size="sm">2</Button>
                        <Button size="sm">3</Button>
                        <Button size="sm">4</Button>
                    </div>
                    <Table rows={quizList} let:row>
                        <Column header="index">
                            {row?.index}
                        </Column>
                        <Column header="title">
                            {row?.title}
                        </Column>
                        <Column header="level">{row.level}</Column>
                    </Table>
                </div>
            </div>
        </div>
    </div>
</div>
