import HomeContainer from "../components/homeContainer/HomeContainer"
import Navbar from "../components/Navbar"
import Sidebar from "../components/sidebar/Sidebar"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const HomePage = () => {
  return (
    <div className="flex">
      <Sidebar/>

      <div className="w-full lg:w-5/6 ">
        <Navbar/>

        <DndProvider backend={HTML5Backend}>
        <HomeContainer/>
        </DndProvider>
        
      </div>
    </div>
  )
}

export default HomePage