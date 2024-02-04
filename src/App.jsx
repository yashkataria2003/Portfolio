import './App.css'
import AnimatedRoutes from './components/Animated/AnimatedRoutes.jsx'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <div className="flex flex-row justify-between items-center w-[100vw] min-h-[100vh] bg-[#bac4cd] appMainContainer max-md:flex-col max-md:gap-y-[1vh]">
        <div className="flex flex-col justify-center items-center w-[5%] h-full max-lg:[7%] max-sm:flex-row max-sm:w-full max-sm:h-[10%] z-20">
          <Navbar />
        </div>
        <div className="flex flex-col justify-start items-center w-[95%] h-full">
          <AnimatedRoutes/>
        </div>
      </div>
    </>
  )
}

export default App
