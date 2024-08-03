import './App.css'
import Folder from './components/Folder'
import { explorer } from './data/explorer'
function App() {
  

  return (
    <div className='container'>
      <Folder explorer={explorer}/>
    </div>
  )
}

export default App
