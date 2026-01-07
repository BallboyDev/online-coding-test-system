<script lang="ts">
    import { Button, ButtonGroup } from "@sveltestrap/sveltestrap";
    import SplitHorizon from "$lib/images/splitHorizon.svg";
    import SplitVerticalRight from "$lib/images/splitVerticalRight.svg";
    import SplitVerticalLeft from "$lib/images/splitVerticalLeft.svg";
    import CodeMirror from "$lib/features/codeMirror/CodeMirror.svelte";

    let excutePos = $state(true);
    let showQuizArea = $state(true);
    let showExcuteArea = $state(true);
    let quizAreaWidth = $state(300);
    let excuteArea = $state(600);
</script>

<div class="d-flex flex-fill overflow-hidden">
    <div
        class={`quiz position-relative ${showQuizArea ? "d-flex" : "d-none"}`}
        style="width: {quizAreaWidth}px"
    >
        <div>quizArea</div>
        <div
            role="button"
            tabindex="0"
            class="drag position-absolute top-50 end-0"
            draggable="true"
            ondrag={(e) => {
                if (e.clientX !== 0) {
                    quizAreaWidth = e.clientX;
                }
            }}
        ></div>
    </div>
    <div
        class={`d-flex ${excutePos ? "flex-column" : "flex-row"} flex-fill position-relative`}
    >
        <div class="code flex-fill position-relative overflow-hidden">
            <ButtonGroup class="position-absolute top-0 end-0 m-2 z-3">
                <Button
                    size="sm"
                    onclick={() => {
                        showQuizArea = !showQuizArea;
                    }}
                    color={showQuizArea ? "primary" : "secondary"}
                >
                    <img
                        src={SplitVerticalLeft}
                        alt="split vertical left"
                        width="20"
                        height="20"
                    />
                </Button>
                <Button
                    size="sm"
                    onclick={() => {
                        showExcuteArea = !showExcuteArea;
                    }}
                    color={showExcuteArea ? "primary" : "secondary"}
                >
                    <img
                        src={SplitHorizon}
                        alt="split horizon"
                        width="20"
                        height="20"
                    />
                </Button>
            </ButtonGroup>

            <div class=" h-100 overflow-scroll">
                <CodeMirror />
            </div>
        </div>
        <div
            class={`excute ${excutePos ? "eh" : "ew"} position-relative  ${showExcuteArea ? "d-flex" : "d-none"}`}
            style={`${excutePos ? `height: calc(100vh - ${excuteArea}px)` : `width: calc(100vw - ${excuteArea}px)`}`}
        >
            {#if excutePos}
                <div
                    tabindex="0"
                    role="button"
                    class={`drag-h position-absolute start-50 top-0`}
                    draggable="true"
                    ondrag={(e) => {
                        if (e.clientY !== 0) {
                            excuteArea = e.clientY;
                        }
                    }}
                ></div>
            {:else}
                <div
                    tabindex="0"
                    role="button"
                    class={`drag-w position-absolute top-50 start-0`}
                    draggable="true"
                    ondrag={(e) => {
                        if (e.clientX !== 0) {
                            excuteArea = e.clientX;
                        }
                    }}
                ></div>
            {/if}
            <ButtonGroup class="position-absolute top-0 end-0 m-2">
                <Button
                    size="sm"
                    onclick={() => {
                        excutePos = true;
                    }}
                    color={excutePos ? "primary" : "secondary"}
                >
                    <img
                        src={SplitHorizon}
                        alt="split horizon"
                        width="20"
                        height="20"
                    />
                </Button>
                <Button
                    size="sm"
                    onclick={() => {
                        excutePos = false;
                    }}
                    color={!excutePos ? "primary" : "secondary"}
                >
                    <img
                        src={SplitVerticalRight}
                        alt="split vertical right"
                        width="20"
                        height="20"
                    />
                </Button>
            </ButtonGroup>
        </div>
    </div>
</div>

<style lang="scss">
    .quiz {
        max-width: 50% !important;
        min-width: 10% !important;
        background-color: var(--bs-tertiary-bg);

        & > .drag {
            width: 2px;
            height: 2rem;
            background-color: var(--bs-light);
        }
    }

    .code {
    }
    .excute {
        flex: none;

        &.eh {
            max-height: 50% !important;
            min-height: 10% !important;
        }
        &.ew {
            max-width: 50% !important;
            min-width: 10% !important;
        }
        background-color: #181818;

        & > .drag-h {
            height: 2px;
            width: 2rem;
            background-color: var(--bs-light);
        }
        & > .drag-w {
            height: 2rem;
            width: 2px;
            background-color: var(--bs-light);
        }
    }
</style>
