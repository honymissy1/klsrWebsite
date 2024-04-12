import { Link } from "react-router-dom"

const Content = () =>{
    return (
        <div className="p-2 bg-[#050601] w-[100vw] py-[70px] min-h-[80vh]">
            <div style={{border: '1px solid', width: '90%', margin: '0px auto'}} className="rounded-xl overflow-hidden flex bg-[#091F2A] text-[#ddd] flex-wrap justify-evenly ">
                <div style={{border: '1px solid'}} className="p-8 min-w-[250px] flex-1">
                    <i class="fa-solid fa-radio text-4xl"></i> 
                    <h1 className="my-3 font-extrabold text-xl text-[#FFD700]">Multiligua Radio</h1>

                    <p>Radio rich in the word of God for you daily consumption both in English and Yoruba</p>
                    <i class="fa-solid fa-arrow-right mt-8 font-bold text-2xl"></i>
                 </div>

                 <div style={{border: '1px solid'}} className="p-8 min-w-[250px] flex-1">
                 <i class="fa-solid fa-podcast text-4xl"></i> 
                    <h1 className="my-3 text-xl font-extrabold text-[#FFD700]">Podcast</h1>

                    <p>Radio rich in the word of God for you daily consumption both in English and Yoruba</p>

                    <Link to={"/podcast"}> <i class="fa-solid fa-arrow-right mt-8 font-bold text-2xl"></i></Link>
                 </div>

                 <div style={{border: '1px solid'}} className="p-8 min-w-[250px] flex-1">
                 <i class="fa-solid fa-book-open-reader text-4xl"></i>
                    <h1 className="my-3 text-xl font-extrabold  text-[#FFD700]">Devotion</h1>

                    <p>Get you day running with daily devotions from KLSR that'll keep your spirit energized</p>

                    <i class="fa-solid fa-arrow-right mt-8 font-bold text-2xl"></i>
                    
                 </div>

                 <div style={{border: '1px solid'}} className="p-8 min-w-[250px]  flex-1">
                 <i class="fa-solid fa-book-open text-4xl"></i> 
                    <h1 className="my-3 text-xl font-extrabold text-[#FFD700]">Book Review</h1>

                    <p>In-depth Reviews to Illuminate Your Reading Path. Click and Explore with Us.</p>

                    <i class="fa-solid fa-arrow-right mt-8 font-bold text-2xl"></i>
                 </div>

            </div>
        </div>
    )
}


export default Content