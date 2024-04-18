import Nav from "../components/Nav";

const About = () =>{
    return (
        <div>
            <Nav />
            <div>
            <div className="relative h-[60vh] mb-10 w-[100%] overflow-hidden" style={{backgroundImage: "url('/images/podcast.jpg')", backgroundPosition:'center right', backgroundSize: 'cover' }}>
                {/* <img src="" className="!object-cover object-bottom ob" alt="" /> */}
                <div className="absolute flex items-end  text-white w-full h-full bg-[#0b0f14bf]">
                   <div className="p-10">
                        <h1 className="md:text-8xl text-4xl font-extrabold">About Us</h1>
                   </div>

                </div>
            </div>

            <div className="flex">
                <div className="flex-1">
                    <img src="/images" alt="" />
                </div>
                <div className="flex-1">
                    <h1>Content</h1>
                </div>

            </div>

            </div>

        </div>
    )
}

export default About;