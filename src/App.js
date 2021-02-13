import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components/';  
import { Home, Cart } from './pages';
import { useDispatch } from 'react-redux'
import { fetchPizzas } from './redux/actions/pizzas'



function App() {

  const dispatch = useDispatch()
 

  React.useEffect(() => {
   
  },[])

  return (
    <div className="App">
          <div className="wrapper">
                  <Header/> 
            <div className="content">
              <Route path="/" component={Home} exact/>
              <Route path="/cart" component={Cart} exact />
             </div>
        </div>
        </div>
  );
}




export default App;
