import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CardContainer from 'components/Card/CardContainer';
import SideBarContainer from 'components/SideBar/SideBarContainer';
import CardProvider from 'context/CardContext';
import ChooseСoursesProvider from 'context/ChooseСoursesContext';
import MainPage from 'Pages/MainPage';
import './App.scss';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <CardProvider>
                <ChooseСoursesProvider>
                    <MainPage>
                        <SideBarContainer />
                        <CardContainer />
                    </MainPage>
                </ChooseСoursesProvider>
            </CardProvider>
        </QueryClientProvider>
    );
}

export default App;
