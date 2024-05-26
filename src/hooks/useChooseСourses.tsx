import { ChooseСoursesContext } from 'context/ChooseСoursesContext';
import { СoursesContextValue } from 'types/ChooseСoursesType';
import { useContext } from 'react';

export const useChooseСourses = (): СoursesContextValue => {
    const context = useContext(ChooseСoursesContext);
    if (context === null) {
        throw new Error('SomeComponent must be used within a ChooseCoursesProvider');
    }
    return context;
};
