import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Card from 'components/Card/Card';
import SideBar from 'components/SideBar/SideBar';
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
                        <SideBar />
                        <Card />
                    </MainPage>
                </ChooseСoursesProvider>
            </CardProvider>
        </QueryClientProvider>
    );
}

export default App;
