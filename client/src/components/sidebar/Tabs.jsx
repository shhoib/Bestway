
// eslint-disable-next-line react/prop-types
const Tabs = ({data}) => {

    return (
    <div className="w-[100%]">
        {
         // eslint-disable-next-line react/prop-types
         data.map((item)=>(
            <div key={item.key} className="flex items-center p-3 border-l-4 rounded  border-transparent transition-colors duration-800
             hover:border-purple-500 cursor-pointer hover:bg-neutral-600">
              <div className="text-neutral-300 text-xl">{item.icon}</div>
              <h6 className="ml-5 text-neutral-300">{item.text}</h6>
            </div>
         ))
        }

    </div>
  )
}

export default Tabs