import { PiNotificationDuotone } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { CgCalendarDates } from "react-icons/cg";
import { AiOutlineUserAdd } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";


const navData = [
    {
        key: 1,
        icon: <CgCalendarDates/>,
        text: 'Calender'
    },
    {
        key: 2,
        icon: <PiNotificationDuotone/>,
        text: 'Notification'
    },
    {
        key: 3,
        icon: <IoMailOutline/>,
        text: 'Inbox'
    },
    {
        key: 4,
        icon: <CiCalendarDate/>,
        text: 'Leave'
    },
    {
        key: 4,
        icon: <AiOutlineUserAdd/>,
        text: 'Attendance'
    },
]
const Navbar = () => {
  return (
    <nav className="bg-neutral-900 flex gap-2 lg:justify-end justify-center items-center text-neutral-300 w-full">
      {
        navData.map((items)=>(
            <div key={items.key} className="flex flex-col items-center lg:p-3 p-1 cursor-pointer border-b-2 border-transparent 
            transition-colors duration-800 hover:border-purple-500 hover:bg-neutral-600 rounded">
                <div className="lg:text-base text-xs">{items.icon}</div>
                <h5 className="lg:text-base text-xs">{items.text}</h5>
            </div>
        ))
      }
      <img src="/IMG/user.webp" alt="" loading="lazy" className="rounded-full lg:h-10 h-7 mr-5"/>
    </nav>
  )
}

export default Navbar