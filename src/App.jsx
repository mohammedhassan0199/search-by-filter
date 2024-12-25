import { useState } from "react"
import { Data } from "./Data"

function App (){
  const[store,setStore] = useState(Data)
  const[search,setSearch] = useState("")

  const searchData = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value)
  }

 let filter = store.filter((currVal) => {
      return currVal.name.toLowerCase().includes(search) ||  currVal.brand.toLowerCase().includes(search)
  })

  return(
    <>
    
       <div className="flex flex-col justify-center items-center mx-[20%] my-10 shadow-2xl p-10 lg:mx-[15%] md:mx-[10%] sm:mx-[5%] md:p-5 sm:p-5 h-[90vh]  ">

         <div className="w-[70%] lg:w-[80%] md:w-[85%] sm:w-[95%]">
            <input type="text" placeholder="search by filter" className="border-black border-[1px] w-full px-4 py-1 text-lg outline-none" onChange={searchData}></input>
         </div>

         <div className="w-[70%] my-5 lg:w-[80%] md:w-[85%] sm:w-[95%]">

          <div className="flex font-semibold text-lg justify-between items-center text-center md:text-base sm:text-base">
            <h2>Name</h2>
            <h2>Brand</h2>
            <h2>Images</h2>
          </div>

            {
              filter.map((curVal,index) => {

                return(

                  <div key={index} className="flex justify-between items-center text-center md:text-sm sm:text-sm">

                      <div className="flex items-center justify-center text-center">{curVal.name}</div>
                      <div className="flex items-center justify-center text-center">{curVal.brand}</div>
                      <div className="flex items-center justify-center text-center"><img src={curVal.img} className="w-24 mt-4 md:w-12 sm:w-12" alt="" /></div>

                  </div>

                )

              })
            }

         </div>

       </div>
    
    </>
  )
}
export default App