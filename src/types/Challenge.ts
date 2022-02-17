export type Challenge = {
    Description: MarkdownString;
    Title: string;
    Difficulty: Difficulty;
    SubChallenges: Challenge[];
};

export type MarkdownString = string;

export const DIFFICULTIES = ["Easy", "Intermediate", "Hard"] as const;

export type Difficulty = typeof DIFFICULTIES[number];
