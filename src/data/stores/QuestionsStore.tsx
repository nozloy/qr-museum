import create from 'zustand'
import { persist } from 'zustand/middleware'
import Questions from './Questions.json'

interface question {
    id: number;
    qcaption: string;
    answers: string[];
    rightanswer: number;
    isAnswered: boolean;

}

interface QuestionStore {
    questions: question[];
    setAnswered: (id: number) => void;
    resetAnswered: () => void;


}


export const useQuestionStore = create(persist<QuestionStore>((set, get) => ({
    questions: Questions,
    setAnswered: (id: number) => {
        const { questions } = get();
        set({
            questions: questions.map((question) => ({...question, isAnswered: question.id === id ? true : question.isAnswered})) })
    },
    resetAnswered: () => {
        const { questions } = get();
        set({
            questions: questions.map((question) => ({...question, isAnswered: false}))   
        })
        }
}),
    {
        name: 'QuestionStore',
        version: 1
}))