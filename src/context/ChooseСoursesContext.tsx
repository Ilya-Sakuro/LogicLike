import React, { Dispatch, SetStateAction, useState } from 'react';

export type СoursesContextValue = {
    tagCurses: string;
    setTagCurses: Dispatch<SetStateAction<string>>;
};

export const ChooseСoursesContext = React.createContext<СoursesContextValue | null>(null);

const ChooseСoursesProvider = ({ children }: { children: React.ReactNode }) => {
    const [tagCurses, setTagCurses] = useState('');

    return (
        <ChooseСoursesContext.Provider value={{ tagCurses, setTagCurses }}>
            {children}
        </ChooseСoursesContext.Provider>
    );
};

export default ChooseСoursesProvider;
