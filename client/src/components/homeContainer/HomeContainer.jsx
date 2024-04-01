import { CiFilter } from "react-icons/ci";
import {useSelector,useDispatch} from 'react-redux'
import { FiPlus } from "react-icons/fi";
import { useCallback, useState } from "react";
import { addNewCard } from "../../Redux/CardSlice";
import Card from "./Card";


const HomeContainer = () => {

  const cards = useSelector((state)=> state.card);
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState('');
  const [showInput, setShowInput] = useState(false);


  const handleShowInput = useCallback(()=>{
    setShowInput(!showInput)
  },[showInput]);


  const handleAddCard = useCallback(()=>{
    if(inputData == ''){
      return window.alert('please add anything')
   }
    dispatch(addNewCard(inputData))
    setInputData('')
  },[dispatch, inputData])
  

  return (
    <div className="text-neutral-300 bg-black min-h-screen">
      <div className="flex justify-between p-4">
        <h4 className="font-bold">My Board</h4>
        <div className="flex items-center bg-neutral-600 rounded py-1 px-3 gap-1">
          <CiFilter/> Filter
        </div>
      </div>

      <div className="flex items-start justify-around ml-5">
      {
        cards.map((card)=>(
          <Card card={card} inputData={inputData} setInputData={setInputData} draggable  key={card.id}/>
        ))
      }
      <div className=" bg-purple-500 px-3 py-2 rounded-lg flex flex-col items-center">
        <div className="flex items-center justify-between w-full gap-3">
        <h6 className=" font-semibold text-sm">Add Another List</h6>
        <div className=" bg-neutral-900 rounded-full cursor-pointer" onClick={handleShowInput}><FiPlus/></div>  
        </div>

        { showInput &&
         <div className="mt-2 w-min">
        <input type="text" placeholder="Enter list title" className="rounded" onChange={(e)=>setInputData(e.target.value)} value={inputData}/>
        <button className="bg-sky-600 py-1 px-2 rounded-lg mt-1 font-semibold text-sm" onClick={handleAddCard}>Add</button>
        </div>
        }
      </div>
      </div>
    </div>
  )
}

export default HomeContainer