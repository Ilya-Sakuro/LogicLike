import { ChooseСoursesContext, СoursesContextValue } from 'context/ChooseСoursesContext';
import { useContext } from 'react';

export const useChooseСourses = (): СoursesContextValue => {
    const context = useContext(ChooseСoursesContext);
    if (context === null) {
        throw new Error('SomeComponent must be used within a ChooseCoursesProvider');
    }
    return context;
};
