import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CgGym, CgChevronRight } from "react-icons/cg";
import myGymScheduler from "../../utils/data";
const WorkoutSchedule = () => {
  let { id } = useParams();
  if (!id) {
    id = new Date().getDay();
  }
  const day = myGymScheduler.filter((item) => item.id == id);
  const navigate = useNavigate();
  return (
    <div className="container-fluid ">
      {id != 0 && id != 7 ? (
        <div>
          <h1 className="text-center mb-4">{day[0].title}</h1>
          {day[0].excercise_content.map((ex) => (
            <div onClick={()=>navigate(`/${day[0].day.toLowerCase()}/${id}/${ex.id}`)} className="ex-container ">
              <CgGym size="30" />
              <h6>{ex.name}</h6>
              <div className="text-center">
                <p>{ex.sets} Sets</p>
                <p>{ex.reps}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-center">It's your Sunday</h1>
      )}
    </div>
  );
};

export default WorkoutSchedule;
