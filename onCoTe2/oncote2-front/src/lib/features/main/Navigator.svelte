<script lang="ts">
    import { Nav, NavItem, NavLink } from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";
    const adminNavi = [
        {
            title: "관리자 - 시험 관리",
            items: [
                { title: "시험관리", link: "/main/exam/list" },
                { title: "시험제작", link: "/main/exam/create" },
            ],
        },
        {
            title: "관리자 - 문제 관리",
            items: [
                { title: "문제관리", link: "/main/quiz/list" },
                { title: "문제제작", link: "/main/quiz/create" },
            ],
        },
        {
            title: "관리자 - 응시자 관리",
            items: [{ title: "응시자 관리", link: "/main/examinee/manage" }],
        },
    ];
    const examineeNavi = [
        {
            title: "응시자",
            items: [
                { title: "시험응시", link: "" },
                { title: "응시결과", link: "" },
            ],
        },
    ];
</script>

<div class="navi overflow-scroll py-3">
    <!-- 관리자 메뉴 -->
    {#each adminNavi as group}
        <p class="text-center m-0">{group.title}</p>
        <Nav class="navi" vertical>
            {#each group.items as item}
                <NavItem>
                    <NavLink
                        href={item.link}
                        onclick={() => {
                            // pageTitle = `관리자 페이지 - ${item.title}`;
                        }}>{item.title}</NavLink
                    >
                </NavItem>
            {/each}
        </Nav>
        <hr />
    {/each}

    <!-- 응시자 메뉴 -->
    {#each examineeNavi as group}
        <p class="text-center m-0">{group.title}</p>
        <Nav class="navi" vertical>
            {#each group.items as item}
                <NavItem>
                    <NavLink
                        active
                        href={item.link}
                        onclick={() => {
                            // pageTitle = `응시자 페이지 - ${item.title}`;
                        }}>{item.title}</NavLink
                    >
                </NavItem>
            {/each}
        </Nav>
        <hr />
    {/each}
</div>

<style lang="scss">
    .navi {
        width: 15rem;
        background-color: var(--bs-tertiary-bg);
    }
</style>
