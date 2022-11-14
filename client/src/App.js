import {Routes,Route,Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./views/Add";
import ViewAll from "./views/ViewAll";
import ViewOne from "./views/ViewOne";
import Edit from "./views/Edit";
function App() {
  return (
    <div className="container">
      <div className="row">
      <h1 className="col">Pet Shelter</h1>
      <Link to={'/'} className='col'>Home</Link>
      <Link to={'/add'} className='col'>Add a pet to the shelter</Link>
      </div>
      {/* <Link to={'/'}>ViewAll</Link>
      <Link to={'/add'}>Add</Link> */}

      <Routes>
            <Route path='/' element={<ViewAll/>}/>
            <Route path='/add' element={<Add/>}/>
            <Route path='/view/:id' element={<ViewOne/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
