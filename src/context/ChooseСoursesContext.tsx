import React, { useState } from 'react';
import { СoursesContextValue } from 'types/ChooseСoursesContext';

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
