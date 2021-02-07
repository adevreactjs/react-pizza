import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components/';  
import { Home, Cart } from './pages';
import axios from 'axios'



function App() {

  const [pizzes, setPizzas] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:3001/db.json').then(({data}) => {
      setPizzas(data.pizzas)
    })
  },[])

  return (
    <div className="App">
          <div className="wrapper">
                  <Header/> 
            <div className="content">
              <Route path="/" render={()=> <Home items ={pizzes}/>} exact/>
              <Route path="/cart" component={Cart} />

             </div>
        </div>
        </div>
  );
}




export default App;
