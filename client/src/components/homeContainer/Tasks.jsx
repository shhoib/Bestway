/* eslint-disable react/prop-types */
import { useDrag } from 'react-dnd'


const Tasks = ({task,cardId,isOver}) => {
    const [{isDragging}, dragRef] = useDrag({
        type: 'pet',
        item: { task,cardId },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

  return (
    <>
     <h6 ref={dragRef} className={`font-semibold text-sm rounded-lg p-3 mt-3 ${isDragging ? 'bg-yellow-600' : 'bg-neutral-700'}
     ${isOver? 'w-[90%] m-auto': null}`}>{task.task}</h6>
    </>
  )
}

export default Tasks;