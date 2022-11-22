import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import myGymScheduler from '../../utils/data';

const Instruction = () => {
    const params = useParams();
  const navigate = useNavigate();

    let { id,ex } = useParams();
    if (!id) {
      id = new Date().getDay();
    }
    const day = myGymScheduler.filter((item) => item.id == id);
    const currentEx = day[0].excercise_content.filter(a=>a.id == ex)
    console.log(currentEx[0])
  return (
    <div className="container-fluid">
        <iframe  width="100%" src={`https://www.youtube.com/embed/${currentEx[0].instructions}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h4 className="text-center">{currentEx[0].name}</h4>
        <div className="ex-container px-5 ">
        <div className="text-danger" >
            <p>{currentEx[0].sets}</p>
            <p>{currentEx[0].reps}</p>
        </div>
        <p class="play-btn" onClick={()=>{+ex +1 > day[0].excercise_content.length ? navigate(`/${day[0].day.toLowerCase()}/${id}/1`) : navigate(`/${day[0].day.toLowerCase()}/${id}/${(+ex)+1}`)} } ></p>
        <h5 className="text-warning">{currentEx[0].id}</h5>
        </div>
    </div>
  )
}

export default Instruction  