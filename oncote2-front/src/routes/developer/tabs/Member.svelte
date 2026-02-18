<script>
    import {
        Button,
        Col,
        Column,
        Input,
        InputGroup,
        InputGroupText,
        Table,
    } from "@sveltestrap/sveltestrap";

    const { members } = $props();

    let id = $state("");
    let pw = $state("");
    let name = $state("");
    let email = $state("");
    let auth = $state(1);
</script>

<div class="d-flex gap-2 m-2">
    <div class="w-50">
        <Table rows={members} let:row>
            <Column header="순서">{row.index}</Column>
            <Column header="이름">{row.name}</Column>
            <Column header="이메일">{row.email}</Column>
            <Column header="권한">{row.auth}</Column>
        </Table>
    </div>
    <div class="w-50">
        <form
            class="d-flex gap-2 flex-column"
            method="post"
            action="?/createMember"
        >
            <InputGroup>
                <InputGroupText>ID</InputGroupText>
                <Input bind:value={id} name="id" />
            </InputGroup>
            <InputGroup>
                <InputGroupText>PW</InputGroupText>
                <Input bind:value={pw} name="pw" />
            </InputGroup>
            <InputGroup>
                <InputGroupText>이름</InputGroupText>
                <Input bind:value={name} name="name" />
            </InputGroup>
            <InputGroup>
                <InputGroupText>이메일</InputGroupText>
                <Input bind:value={email} name="email" />
            </InputGroup>
            <InputGroup>
                <InputGroupText>권한</InputGroupText>
                <Input bind:value={auth} name="auth" />
            </InputGroup>

            <Button type="submit">save</Button>
        </form>
    </div>
</div>
