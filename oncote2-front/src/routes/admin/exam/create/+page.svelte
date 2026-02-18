<script lang="ts">
    import { enhance } from "$app/forms";
    import type { ActionResult, SubmitFunction } from "@sveltejs/kit";
    import {
        Badge,
        Button,
        Column,
        Input,
        Label,
        Table,
    } from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";

    const { form, data } = $props();

    // 시험 이름
    let examTitle: string = $state("");

    // 시험 설명
    let examDesc: string = $state("");

    // 시험 기간
    let checkFree = $state(true);
    let dtStart: string | null = $state(null);
    let dtEnd: string | null = $state(null);

    // 시험 인원수
    let examNumber: number = $state(0);

    // 사용 문제 선택 데이터
    let quizList: any[] = $state([]);
    let selectQuizList: any[] = $state([]);
    let searchQuiz: string = $state("");

    onMount(() => {
        quizList = data.quizzes;
    });

    const search = () => {
        return async ({ result }: { result: ActionResult }) => {
            if (result.type === "success") {
                const temp = result.data?.quizList;
                quizList = temp;
            } else {
                console.error("failure");
            }
        };
    };

    const saveExam: SubmitFunction = async ({ formData }) => {
        formData.append("description", examDesc);
        formData.append("dtStart", dtStart || "");
        formData.append("dtEnd", dtEnd || "");
        formData.append("count", `${examNumber}`);
        formData.append("quizList", JSON.stringify(selectQuizList));

        return () => {};
    };
</script>

<!-- 
1. 시험 타이틀
2. 사용 문제 리스트
3. 기간
4. 인원
-->

<div>
    <form
        class="d-flex mb-5"
        method="post"
        action="?/saveExam"
        use:enhance={saveExam}
    >
        <Input
            class="me-3 "
            type="text"
            name="title"
            placeholder="시험의 이름을 입력해주세요."
            bind:value={examTitle}
        />
        <Button type="submit" class="flex-shrink-0" color="primary">
            시험 생성
        </Button>
    </form>

    <div class="d-flex">
        <div class="w-50 pe-3 border-end">
            <div class="mb-5">
                <Label>시험 설명</Label>
                <Input type="text" bind:value={examDesc} />
            </div>
            <div class="mb-5">
                <div class="d-flex justify-content-between">
                    <Label>시험 운영 기간</Label>
                    <Input
                        type="switch"
                        label="기간 무제한"
                        reverse
                        bind:checked={checkFree}
                        onchange={() => {
                            if (checkFree) {
                                dtStart = null;
                                dtEnd = null;
                            }
                        }}
                    />
                </div>

                <Input
                    type="datetime-local"
                    disabled={checkFree}
                    bind:value={dtStart}
                />
                ~
                <Input
                    type="datetime-local"
                    disabled={checkFree}
                    bind:value={dtEnd}
                />
            </div>
            <div class="mb-5">
                <Label>응시자 인원수</Label>
                <Input type="number" bind:value={examNumber} />
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
                        {#each selectQuizList as item}
                            <Badge
                                class="me-1"
                                color="primary"
                                role="button"
                                onclick={() => {
                                    selectQuizList = selectQuizList.filter(
                                        (v) => {
                                            return v.index !== item.index;
                                        },
                                    );
                                }}
                            >
                                {item.title}
                            </Badge>
                        {/each}
                    </div>
                    <Table rows={quizList} let:row>
                        <Column>
                            <Input
                                type="checkbox"
                                checked={selectQuizList.some(
                                    (v) => v.index === row.index,
                                )}
                                onchange={() => {
                                    const exists = selectQuizList.some((v) => {
                                        return v.index === row.index;
                                    });

                                    if (exists) {
                                        selectQuizList = selectQuizList.filter(
                                            (v) => {
                                                return v.index !== row.index;
                                            },
                                        );
                                    } else {
                                        selectQuizList = [
                                            ...selectQuizList,
                                            row,
                                        ];
                                    }
                                }}
                            />
                        </Column>
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
