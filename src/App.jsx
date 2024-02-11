import BookList from "./components/BookList"
import Navbar from "./components/Navbar"
import AuthContextProvider from "./contexts/AuthContext"
import BookContextProvider from "./contexts/BookContext"
import ThemeContextProvider from "./contexts/ThemeContext"
import ThemeToggle from "./contexts/ThemeToggle"

// import SongList from "./components/SongList"


function App() {

  

  return (
    <div className='App'>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
      {/* <SongList/> */}
    </div>
  )
}

export default App
