export interface StateSchema {
    test: TestPageSchema;
    result: ResultPageSchema;
}

export interface TestPageSchema {
    id: string;
    title: string;
    possibleAnswer: string[];
    rightAnswer: string
    checked: string;
    limit: number;
    hasMore: boolean;
}

export interface  ResultPageSchema {
    "id": string,
    "title": string,
    "usersAnswer": string,
    "rightAnswer": string,
    "wasDone": boolean,
    "hasMore": boolean
}
