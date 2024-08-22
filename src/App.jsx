import './App.css'
import CardList from './components/Card'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-start justify-center lg:px-32 md:px-12 px-4'>
        <SearchBar/>
        <CardList />
      </div>
    </>
  )
}

export default App
