import useGenerator from './hooks/useGenerator';

import Users from './component/users/Users';

import './App.css'

function App() {
  const userData = useGenerator()

  return <Users usersdata={userData}/>
}

export default App;
