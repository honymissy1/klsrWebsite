const Partnership = () =>{
    return(
        <div className="min-h-[400px] h-max mb-10 px-10 w-full" id="partnership">
            <h1 className="text-center font-extrabold text-4xl mt-10">Partner with Us</h1>
            <p className="text-center my-10 text-xl m-auto w-full md:w-[500px]">You can partner or Support this mission by sending your seeds to the account numbers below anywhere around the world</p>
            <div className="flex justify-evenly gap-10 flex-wrap">
                <div className="w-max shadow p-5 text-center dark:bg-white bg-[#32ff9fd7]">
                    <img className="w-[50px] m-auto" src="/images/Zenith-logo.png" alt="" />
                    <h1 className="font-extrabold text-2xl">1229216755</h1>
                    <p className="text-[#435ca5]">Kingdom Lifestyle & Diamond Charities</p>
                </div>

                <div className="dark:bg-white w-max p-5 text-center relative shadow">
                    <h1 className="top-0 right-0 absolute p-2 text-white bg-green-800">Naira</h1>
                    <img className="w-[50px] m-auto" src="/images/gtb-logo.png" alt="" />
                    <h1 className="font-extrabold text-2xl">0892125365</h1>
                    <p className="text-[#3272bc]">Kingdom Lifestyle & Diamond Charities</p>
    
                </div>

                <div className="dark:bg-white w-max p-5 text-center shadow relative">
                <h1 className="top-0 right-0 absolute p-2 text-white bg-red-500">USD</h1>

                    <img className="w-[50px] m-auto" src="/images/gtb-logo.png" alt="" />
                    <h1 className="font-extrabold text-2xl">0892172060</h1>
                    <p className="text-[#E3000F]">Kingdom Lifestyle & Diamond Charities</p>
    
                </div>

            </div>
        </div>
    )
}

export default Partnership;