<script lang="ts">
    import {
        Button,
        Column,
        Input,
        InputGroup,
        Label,
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
        Table,
    } from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";

    const { form, data } = $props();

    let modalOpen = $state(false);
    let examinees: any[] = $state([]);
    let checkedList: number[] = $state([]);

    onMount(() => {
        examinees = data.examinees;
    });

    const modalTogle = () => {
        modalOpen = !modalOpen;
    };
</script>

<div class="d-flex justify-content-between mb-3">
    <div>
        <InputGroup class="search">
            <Input name="test" placeholder="이름 검색" />
            <Button color="primary">검색</Button>
        </InputGroup>
    </div>
    <div>
        <Button color="primary" size="md" onclick={modalTogle}
            >응시자 등록</Button
        >
        {#if checkedList.length > 0}
            <form method="post" class="d-inline">
                <input type="hidden" name="ids" value={checkedList.join(",")} />
                <Button
                    color="danger"
                    size="md"
                    class="ms-2"
                    type="submit"
                    formaction="?/delete">선택 삭제</Button
                >
            </form>
        {/if}
    </div>
</div>

<Table rows={examinees} let:row>
    <Column width="2rem">
        <Input
            type="checkbox"
            checked={checkedList.includes(row?.index)}
            onchange={(e) => {
                if (checkedList.includes(row?.index)) {
                    checkedList = checkedList.filter((i) => i !== row?.index);
                } else {
                    checkedList = [...checkedList, row?.index];
                }
            }}
        />
    </Column>
    <Column header="번호">
        {row?.index}
    </Column>
    <Column header="이름">
        {row?.name}
    </Column>
    <Column header="연락처">{row?.phone}</Column>
    <Column header="이메일">{row?.email}</Column>
    <Column header="참여 시험">...</Column>
</Table>

<Modal isOpen={modalOpen}>
    <form method="post">
        <ModalHeader>새 응시자 등록</ModalHeader>
        <ModalBody>
            <Label>이름</Label>
            <Input class="mb-3" name="name" />
            <Label>이메일</Label>
            <Input class="mb-3" name="email" />
            <Label>패스워드</Label>
            <Input class="mb-3" name="password" />
            <Label>연락처</Label>
            <Input class="mb-3" name="phone" />
            <Label>그룹</Label>
            <Input class="mb-3" name="group" />
        </ModalBody>
        <ModalFooter>
            <Button type="button" color="danger" onclick={modalTogle}>
                취소
            </Button>
            <Button
                color="primary"
                onclick={modalTogle}
                type="submit "
                formaction="?/regist"
            >
                등록
            </Button>
        </ModalFooter>
    </form>
</Modal>
