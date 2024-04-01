import { MdOutlineDashboard,MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GoHome,GoProjectRoadmap } from "react-icons/go";
import { FiMail,FiPlus } from "react-icons/fi";
import { CgFeed } from "react-icons/cg";
import Tabs from "./Tabs";
import { GrTask } from "react-icons/gr";
import { PiUsersThree } from "react-icons/pi";
import { HiUserCircle } from "react-icons/hi2";


const Horizontal = ()=>{
    return <hr className="w-[70%] border-neutral-600 my-4"/>
}

const firstData = [
    {
        key:1,
        icon: <MdOutlineDashboard/>,
        text : 'Board',
    },
    {
        key:2,
        icon: <GoHome/>,
        text : 'Home'
    },
    {
        key:3,
        icon: <FiMail/>,
        text : 'Mail'
    },
    {
        key:4,
        icon: <CgFeed/>,
        text : 'Feed'
    },
]

const secondData = [
    {
         key:1,
         icon: <GoProjectRoadmap/>,
         text : 'Roadmap',
    },
    {
         key:2,
         icon: <GrTask/>,
         text : 'Task',
    },
    {
         key:3,
         icon: <PiUsersThree/>,
         text : 'Members',
    },
]

const Sidebar = () => {
    
  return (
    <aside className="w-1/6 bg-neutral-900 mr min-h-screen flex flex-col items-center text-neutral-300 hidden sm:flex">
        <img src="/IMG/trello2.webp" alt="" loading="lazy" className="w-[70%]"/>
        <Horizontal/>
        <Tabs data={firstData}/>
        <Horizontal/>

        <div className="flex items-center justify-between w-5/6">
            <h3>BOARDS</h3>
            <div className=" bg-neutral-700 rounded-full"><FiPlus/></div>
        </div>

        <div className="flex w-5/6 justify-between items-center py-4 ">
            <div className="flex items-center">
            <HiUserCircle className="text-xl"/>
            <h5 className="ml-2">Name</h5>
            </div>
            <MdOutlineKeyboardArrowDown/>
        </div>

        <Tabs data={secondData}/>
        <Horizontal/>

    </aside>
  )
}

export default Sidebar