import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Podcast = () =>{
    return (
        <div>
            <Nav />

            <div className="min-h-[60vh]">

              <div className="relative h-[60vh] mb-10 w-[100%] overflow-hidden" style={{backgroundImage: "url('/images/podcast.jpg')", backgroundPosition:'center right', backgroundSize: 'cover' }}>
                {/* <img src="" className="!object-cover object-bottom ob" alt="" /> */}
                <div className="absolute flex items-end z-10 text-white w-full h-full bg-[#0b0f14bf]">
                   <div className="p-10">
                        <h1 className="md:text-8xl text-4xl font-extrabold">KLSR PODCAST</h1>
                   </div>

                </div>
              </div>

              <div className="min-h-[300px] md:p-10 flex-wrap gap-10 flex">
               <div className="flex-1 min-w-[300px]">
                 <div className="" id="player">
                 <div className="shadow !mx-auto shadow-slate-300 min-w-[300px]  w-[80%] rounded" id="description">
                   <div className="p-5">
                    <i class="fa-solid w-max !mx-auto fa-image text-center text-4xl"></i>
                    <h1 className="font-extrabold text-2xl">We love the Evangelitic</h1>

                   </div>
                   
                 </div>
                 </div>
                 <div className="shadow !mx-auto my-4 shadow-slate-300 min-w-[300px] w-[80%] rounded" id="description">
                   <div className="p-5">
                    <h1 className="font-extrabold text-2xl">We love the Evangelitic</h1>
                    <p className="text-sm">Tempora corporis, maiores repellendus maxime, deleniti, aspernatur similique molestias eius tempore culpa vel reiciendis.</p>
                    <hr />
                    <div className="flex flex-wrap justify-between items-center pt-2">
                        <h1 className="text-[#383316] py-1"><i className="fa-solid fa-user-tie"></i> Ayodele Babajide</h1>
                        <p className="bg-slate-300 text-sm p-1 rounded-xl">2 hours ago</p>
                    </div>
                   </div>
                   
                 </div>
                 <div id="comments">
                 <div className="shadow !mx-auto mb-3 shadow-slate-300 min-w-[300px]  w-[80%] rounded" id="description">
                   <div className="p-5">
                    <h1 className="font-extrabold text-2xl pb-5">Comments</h1>

                    <div className="p-2 mb-2 border border-solid border-black rounded">
                        <h1 className="font-extrabold"><i class="fa-solid fa-user"></i> Tomiwa Martin</h1>
                        <p className="px-5 text-sm">I love your podcast it has always been ablessing sir</p>
                        <p className="text-right font-extrabold">- 4 min ago</p>
                    </div>

                    <div className="p-2 mb-2 border border-solid border-black rounded">
                        <h1 className="font-extrabold"><i class="fa-solid fa-user"></i> Steven Matthew</h1>
                        <p className="px-4 text-sm">I love your podcast it has always been ablessing sir</p>
                    </div>

                    <div className="p-2 mb-2 border border-solid border-black rounded">
                        <h1 className="font-extrabold"><i class="fa-solid fa-user"></i> Tomiwa Martin</h1>
                        <p className="px-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, in optio? Fugit magni rerum, earum aliquid facere quas incidunt modi ad ab quia.</p>
                        <p className="text-right font-extrabold">- 4 min ago</p>
                    </div>


                   </div>
                   
                 </div>
                 </div>
               </div>

               <div className="flex-1 max-[80%] min-w-[300px] shadow shadow-black" id="other-podcasts">
                    <div className="p-5 bg-[#880808] text-white"><h1>Other Podcast</h1></div>
             
                    <div className="p-5">

                      <div className="flex mb-5 items-center border-l-4 rounded border-lime-600">
                        <i class="fa-solid fa-podcast text-4xl px-2"></i> 
                        <div>
                          <h1 className="font-extrabold">Title</h1>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eaque.</p>
                        </div>
                      </div>

                      <div className="flex items-center border-l-4 rounded border-lime-600">
                        <i class="fa-solid fa-podcast text-4xl px-2"></i> 
                        <div>
                          <h1 className="font-extrabold">Title</h1>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eaque.</p>
                        </div>
                      </div>
                    </div>
               </div>


              </div>

            </div>


            <Footer />
        </div>
    )
}


export default Podcast;