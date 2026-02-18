<script>
    import { TabContent, TabPane } from "@sveltestrap/sveltestrap";
    import Member from "./tabs/Member.svelte";

    const { data } = $props();
    $inspect(data);
</script>

<div class="p-2">
    <h3>Developer Page</h3>

    <TabContent>
        <TabPane tabId="member" tab="멤버 관리" active>
            <Member members={data.members} />
        </TabPane>
    </TabContent>
</div>
