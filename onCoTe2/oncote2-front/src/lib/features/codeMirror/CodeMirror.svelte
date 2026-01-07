<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { EditorView, keymap, lineNumbers } from "@codemirror/view";
    import { EditorState } from "@codemirror/state";
    import { javascript } from "@codemirror/lang-javascript";
    import { oneDark } from "@codemirror/theme-one-dark";
    import { basicSetup } from "codemirror";

    export let value = "";
    export let readOnly = false;

    let container: HTMLDivElement;
    let view: EditorView;

    onMount(() => {
        const state = EditorState.create({
            doc: value,
            extensions: [
                basicSetup,
                javascript(),
                lineNumbers(),
                oneDark,
                EditorView.lineWrapping,
                EditorView.editable.of(!readOnly),
                EditorView.updateListener.of((update) => {
                    if (update.docChanged) {
                        value = update.state.doc.toString();
                    }
                }),
            ],
        });

        view = new EditorView({
            state,
            parent: container,
        });
    });

    onDestroy(() => {
        view?.destroy();
    });
</script>

<div class="editor" bind:this={container}></div>

<style lang="scss">
    .editor {
        height: 100%;
        overflow: scroll;

        & .cm-content {
            height: 100%;
        }
    }
</style>
