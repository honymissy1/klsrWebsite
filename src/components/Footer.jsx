const Footer = () => {
    return(
        <div className="flex min-h-[300px] gap-5 flex-wrap p-5 text-white bg-black">
            <div className="min-w-[200px] flex-1" style={{border: '1px solid white'}}> 
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
                  <i class="fa-solid fa-phone text-sm"> 01-4434034503</i>
                  <div>
                   <i class="fa-brands text-2xl fa-whatsapp mx-1"></i>
                   <i class="fa-brands text-2xl fa-facebook mx-1"></i>
                   <i class="fa-brands text-2xl fa-youtube mx-1"></i>
                   <i class="fa-brands text-2xl fa-twitter mx-1"></i>
                  </div>
                </div>

            </div>

        </div>
    )
}


export default Footer