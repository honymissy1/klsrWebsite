import '../assets/styles/feature.css'

const Features = () =>{
    return(
        <div className="p-[50px] pb-0 flex gap-5" id="features-container">
            <h1 className='font-extrabold text-center text-white text-4xl absolute left-[80px]'>WHY KLSR</h1>
           <div className="flex p-10 gap-5 flex-wrap w-full lg:w-[50%]" style={{ height: 'auto' }}> 
                <div style={{ height: 'max-content'}} className="rounded p-5 text-center bg-[#880808] text-white min-w-[250px] flex-1 h-auto">
                    <h1 className="p-3 font-bold text-lg">Uplifting Content and Positive Messaging</h1>
                    {/* <hr /> */}
                    <p className="py-3 text-sm font-bold text-[#ddd]">Inspiring Messages for Daily Life</p>
    
                    <p className="text-xs text-center text-[#ddd]">KLSR offer constant uplifting content and positive messaging, fostering hope, encouragement, and guidance for navigating life's challenges</p>
                </div>

                <div style={{ height: 'max-content'}} className="rounded p-5 text-center bg-[#880808] text-white flex-1 min-w-[250px] h-auto">
                    <h1 className="p-3 font-bold text-lg">Strengthening Faith and Spiritual Growth</h1>
                    {/* <hr /> */}
                    <p className="py-3 text-sm font-bold text-[#ddd]">Nurturing Spiritual Development</p>
    
                    <p className="text-xs text-center text-[#ddd]"> Tuning in to <span className='bg-[#880808]'>KLSR</span>  deepens faith through diverse programming, fostering spiritual growth and a stronger connection with God.</p>
                </div>

                <div style={{height: 'max-content'}} className="rounded p-5 text-center bg-[#880808] text-white flex-1 min-w-[250px] h-auto">
                    <h1 className="p-3 font-bold text-lg">Preserving Cultural and Spiritual Heritage</h1>
                    {/* <hr /> */}
                    <p className="py-3 text-sm font-bold text-[#ddd]">Celebrating Yoruba Faith and Culture</p>
    
                    <p className="text-xs text-center text-[#ddd]">Yoruba Christian radio stations preserve cultural and spiritual heritage, providing programming in the Yoruba language that resonates deeply with listeners, reinforcing faith and identity. Reasons to Listen to an English Christian Radio Station</p>
                </div>
           </div>
           
            <div id="features-img" className="hide lg:block pb-0" style={{flex: 1, maxHeight: "500px"}}>
                {/* <img src="./features_img.png" alt="" style={{height: '100%', margin: '0px auto'}} /> */}
            </div>        
        </div>
    )
}

export default Features;