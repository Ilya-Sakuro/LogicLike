import { Dispatch, SetStateAction } from 'react';

export type СoursesContextValue = {
    tagCurses: string;
    setTagCurses: Dispatch<SetStateAction<string>>;
};
