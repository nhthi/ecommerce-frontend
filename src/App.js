import { ThemeProvider } from '@mui/material';
import './App.css';
import AdminRouter from './Routers/AdminRouter';
import CustomerRouters from './Routers/CustomerRouters';
import { Route, Routes } from 'react-router-dom';
import { darkTheme } from './Theme/DarkTheme';
import Navigation from './customer/components/Navigation/Navigation';
import Admin from './admin/component/Admin';
import { useSelector } from 'react-redux';
import NotFound from './customer/components/NotFound.jsx/NotFound';

function App() {
  const auth = useSelector(store=>store.auth)
  return (
    // <ThemeProvider theme={darkTheme}>
      <div className="scroll-hidden overflow-scroll main">
        <div className='mb-16'>
          <Navigation />
        </div>
        <Routes>
          <Route path="/admin/*" element={auth.user?.role==='ROLE_ADMIN' ?<Admin/> : <NotFound/>} />
          <Route path='/*' element={<CustomerRouters />} />
        </Routes>
      </div>
      // {/* </ThemeProvider> */}
  );
}

export default App;
