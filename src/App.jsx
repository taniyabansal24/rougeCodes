// App.jsx

import HeroSection from './components/HeroSection'
import Navbar from './Layout/Navbar'
// import other components

function App() {
  return (
    <div className="App">
     <Navbar/>
      <HeroSection />
      {/* other components */}
    </div>
  )
}

export default App