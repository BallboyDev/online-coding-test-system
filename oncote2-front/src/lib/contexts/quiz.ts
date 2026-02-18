import { writable } from "svelte/store"

export const quizKey = Symbol('quiz')

export const area = writable(1)