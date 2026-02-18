<script lang="ts">
    import { Button, ButtonGroup } from "@sveltestrap/sveltestrap";

    const { exam } = $props();
</script>

<div class="w-100 border d-flex p-4 mb-3 rounded-4 align-items-center">
    <div class="e-index text-start">{exam.index}</div>
    <div class="e-title text-start">{exam.title}</div>
    <div class="e-period text-center">
        <div>{exam.period?.start || "-"}</div>
        <div>~</div>
        <div>{exam.period?.end || "-"}</div>
    </div>
    <div class="e-count text-center">
        {exam.count}
        <!-- {exam.examinee.finish} / {exam.examinee.total} -->
    </div>
    <div class="e-btn text-center">
        <ButtonGroup vertical>
            <Button>시험관리</Button>
            <Button>시험결과</Button>
        </ButtonGroup>
    </div>
</div>

<style lang="scss">
    .e-index {
        flex-basis: 3rem;
    }
    .e-title {
        flex-basis: 55%;
    }
    .e-period {
        flex-basis: 15%;
    }
    .e-count {
        flex-basis: 15%;
    }
    .e-btn {
        flex-basis: 15%;
    }
</style>
