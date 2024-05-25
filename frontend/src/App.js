import OrderComponent from './Components/OrderComponent'
import AdminOrderComponent from './Components/AdminOrderComponent';
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
