const Footer = () => {
    return(
        <div className="flex min-h-[300px] pb-[50px] gap-5 flex-wrap p-5 text-white bg-black">
            <div className="w-[100px]">
                <img src="/images/logo.png" style={{width: '100%'}} alt="" />
            </div>
            <div className="min-w-[200px] flex-1"> 
                <h1 className="text-xl font-extrabold text-white">KLSR</h1>
            </div>
            <div className="min-w-[200px] flex-1"> 
                <h1 className="text-xl font-extrabold text-white">Pages</h1>

                <div className="text-[#ddd]"><br/>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Article</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>

            <div className="min-w-[200px] flex-1"> 
                <h1 className="text-xl font-extrabold text-white">Top Article</h1>

                <div className="text-white"><br/>
                    <ul>

                    </ul>
                </div>
            </div>

            <div className="min-w-[200px] flex-1"> 
                <h1 className="text-xl font-extrabold text-white">Contact</h1><br />

                <div>
                  <i className="fa-solid fa-phone text-sm mx-3">+134 748 16604</i>
                  <i className="fa-solid fa-phone text-sm my-3 mx-3">+134 720 84052</i>

                  <div className="flex p-2 bg-[#FFD700] justify-evenly rounded">
                   <i className="fa-brands text-[#050601] text-2xl fa-whatsapp mx-1"></i>
                   <i className="fa-brands text-[#050601] text-2xl fa-facebook mx-1"></i>
                   <i className="fa-brands text-[#050601] text-2xl fa-youtube mx-1"></i>
                   <i className="fa-brands text-[#050601] text-2xl fa-twitter mx-1"></i>
                   <i className="fa-solid text-[#050601] text-2xl fa-envelope mx-1"></i>

                  </div>
                </div>

            </div>

        </div>
    )
}


export default Footer