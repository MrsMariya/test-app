import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import PrivateRoute from './hoc/PrivateRoute';
import CardPage from './pages/CardPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import SignInPage from './pages/SignInPage';
import './scss/app.scss';
import { RoutersMap } from './utils/constants';

function App() {
  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route path={RoutersMap.signIn} element={<SignInPage />} />
          <Route
            path={RoutersMap.main}
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          />
          <Route
            path={RoutersMap.card}
            element={
              <PrivateRoute>
                <CardPage />
              </PrivateRoute>
            }
          />
          <Route path={RoutersMap.notFound} element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
