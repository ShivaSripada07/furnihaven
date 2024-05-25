import OrderComponent from './components/OrderComponent'
import AdminOrderComponent from './components/AdminOrderComponent';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/orders" element={<OrderComponent/>}></Route>
          <Route path="/admin/orders" element={<AdminOrderComponent/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
