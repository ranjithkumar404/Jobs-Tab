import { useEffect, useState } from "react";
import { FaRegHandPointRight } from 'react-icons/fa'
import { AiFillRightCircle } from 'react-icons/ai'

function App() {
  const url = 'https://course-api.com/react-tabs-project';
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState([]);
  const [value,setValue]=useState(0)
  const fetchData = async () => {
    const res = await fetch(url);
    const obj = await res.json();
    setJob(obj);
    setLoading(false)
  }
  useEffect(() => {
    fetchData();
  },[])
  if (loading) {
   return(
     <p className="w-[500px] h-[500px] font-extrabold text-5xl flex justify-center items-center mx-auto">Loading...</p>
   )
  
  }
  const { company, title, duties, dates } = job[value];
  return (
    <>
      <div className="App  w-[700px]  mx-auto flex space-x-8 items-center">
        <div className="grid gap-4">
          {
            job.map((i,a)=>{
              return(
                 <div>
                  <button onClick={()=>setValue(a)}>{i.company}</button>
                 </div>
              )
            })
          }
        </div>
        <div className="  w-[700px]  h-[600px] mx-auto grid place-content-center  p-5 gap-4">
          <p className="text-5xl text-center">Experience</p>
<p className="text-3xl font-semibold">{title}</p>
<p className="text-xl bg-slate-500/30 text-white rounded-md text-center w-[90px] p-2">{company}</p>
<p className="text-slate-400 text-2xl">{dates}</p>
    {
      duties.map((i,index)=>{
        return(
          <div key={index} className=" flex ">
            <AiFillRightCircle size={30} />
             {i}
              
              
              
                {/* <FaRegHandPointRight/> */}
           
          </div>
        )
      })
    }

</div>
      </div>
    </>
  );
}

export default App;
