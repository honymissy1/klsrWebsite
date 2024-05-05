import '../assets/styles/feature.css'

const Features = () =>{
    return(
        <div className="flex" id="features-container">
            <h1 className='font-extrabold text-center p-10 text-white text-4xl'>WHY KLSR</h1>
            <div className='flex'>
                    <div className="flex p-10 gap-5 flex-1 flex-wrap lg:w-[50%]" style={{ height: 'auto' }}> 
                            <div style={{ height: 'max-content'}} className="rounded p-5 text-center bg-[#0d3243] text-white min-w-[250px] flex-1 h-auto">
                            <div>
                                <i className="fa-solid fa-paper-plane text-4xl"></i>
                                <h1 className="p-3 font-bold text-lg"> Uplifting Content and Positive Messaging</h1>

                            </div>
    
                                <p className="py-3 text-sm font-bold text-[#ddd]">Inspiring Messages for Daily Life</p>
                
                                <p className="text-xs text-center text-[#ddd]"> <span className='text-[#FFD700] font-extrabold'>KLSR</span>  offer constant uplifting content and positive messages, fostering hope, encouragement, and guidance for navigating life's challenges</p>
                            </div>

                            <div style={{ height: 'max-content'}} className="rounded p-5 text-center bg-[#0d3243] text-white flex-1 min-w-[250px] h-auto">
                            <div>
                                <i class="fa-solid fa-dumbbell text-4xl"></i>
                                <h1 className="p-3 font-bold text-lg">Strengthening Faith and Spiritual Growth</h1>
                            </div>
                                {/* <hr /> */}
                                <p className="py-3 text-sm font-bold text-[#ddd]">Nurturing Spiritual Development</p>
                
                                <p className="text-xs text-center text-[#ddd]"> Tuning in to <span className='text-[#FFD700] font-extrabold'>KLSR</span>  deepens faith through diverse programmes, fostering spiritual growth and a stronger connection with God.</p>
                            </div>

                            <div style={{height: 'max-content'}} className="rounded p-5 text-center bg-[#0d3243] text-white flex-1 min-w-[250px] h-auto">
                            <div>
                                <i className="fa-solid fa-people-pulling text-4xl"></i>
                                <h1 className="p-3 font-bold text-lg">Preserving Cultural and Spiritual Heritage</h1>
                            </div>
                                {/* <hr /> */}
                                <p className="py-3 text-sm font-bold text-[#ddd]">Celebrating Yoruba Faith and Culture</p>
                
                                <p className="text-xs text-center text-[#ddd]">Yoruba Christian radio stations preserve cultural and spiritual heritage, providing programming in the Yoruba language that resonates deeply with listeners, reinforcing faith and identity.</p>
                            </div>
                    </div>
                
                    <div id="features-img" className="hidden lg:block pb-0" style={{flex: 1, maxHeight: "100%"}}>
                    </div>        

            </div>
        </div>
    )
}

export default Features;