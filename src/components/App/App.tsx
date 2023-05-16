import Layout from '@components/Layout';
import ROUTES from '@config/routes';

import Main from '@pages/Main';
import Weather from '@pages/Weather';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTES.index} element={<Layout />}>
          <Route path={ROUTES.main} element={<Main />} />
          <Route path={ROUTES.weather} element={<Weather />} />
          <Route path={ROUTES.all} element={<Navigate to={ROUTES.index} replace />} />
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
