export type Challenge = {
    Description: MarkdownString;
    Title: string;
    Difficulty: Difficulty;
    SubChallenges: Challenge[];
}

export type MarkdownString = string;

export enum Difficulty {
    Easy,
    Intermediate,
    Hard
}
