import { useState } from 'react'
import './App.css'

function App() {
  const [currentForm, setCurrentForm] = useState('login'); 
  const [authenticated, setauthenticated] = useState(true); 

  const toggleForm = (formName) => {
    setCurrentForm(formName); 
  }

  return (
    <Router>
    {/* {authenticated && <Navbar />} */}
    <Routes>
        <Route exact path='/'  element = {currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} />} />
        <Route path='/Simulator' element={<Simulator/>} />
        <Route path='/News' element={<News/>} />
        <Route path='/Account' element={<Account/>} />
    </Routes>
    </Router>
  ); 
}

export default App
