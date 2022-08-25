import {Routes,Route,Navigate} from 'react-router-dom';
import NotFound from './Pages/404';
import Home from './Pages/Home';
import ItemDetails from './Pages/ItemDetails';
import Footer from './Pages/Static/Footer';
function App() {
  return (
    <div className='container'>
      <div className="content">
        <Routes>
            <Route path='/' element={<Navigate to={"/"+1} />} />
            <Route path='/:id' element={<Home />} />
            <Route path='/itemDetail/:id' element={<ItemDetails />} />
            <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
      <Footer />
    </div>
);
}

export default App;
