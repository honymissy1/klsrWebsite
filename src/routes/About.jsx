import Nav from "../components/Nav";
import Footer from "../components/Footer";

const About = () =>{
    return (
        <div>
            <Nav />
            <div className="bg-teal-800">
            <div className="relative h-[60vh] w-[100%] overflow-hidden" style={{backgroundImage: "url('/images/podcast.jpg')", backgroundPosition:'center right', backgroundSize: 'cover' }}>
                {/* <img src="" className="!object-cover object-bottom ob" alt="" /> */}
                <div className="absolute flex items-end  text-white w-full h-full bg-[#0b0f14bf]">
                   <div className="p-10">
                        <h1 className="md:text-8xl text-4xl font-extrabold">About Us</h1>
                   </div>

                </div>
            </div>

            <div className="flex bg-teal-800 p-10 relative  md:w-[80%] flex-col gap-5 m-auto">
                <div className="w-[100%]">
                    <h1 className="pb-5 font-extrabold text-xl">What is KLSR</h1>
                    <p className="shadow p-4 text-white rounded bg-teal-900">
                      Kingdom lifestyle-Radio is a 24/7 internet gospel radio station established with the burden to reach out to people and nations with encouraging words from the Scripture. We are committed to the transmission of God’s word, powerful spirit and soul lifting messages from various ministers of the gospel, worship songs, and hymns. We do not compromise Scriptural standard, hence, the kingdom life-style template through the Scripture is our priority for all age brackets.
                    </p>
                    <br />
                    <div className="p-3 mb-5" style={{borderLeft: '7px solid'}}>
                        <p className="">
                         More so, among so many tools available in the toolbox of a Christian, faith, is an essential tool that helps a person to connect with God. We found this to be true in the book of <b className="">Hebrews 11:6</b> 
                        </p>
                    </div>

                    <div role="alert" className="alert bg-[#222020]">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> */}
                     <span className="text-xs text-[#d8c13e] font-extrabold">And it is impossible to please God without faith.  Anyone who wants to come to him must believe that God exists and that he rewards those who sincerely seek him.” <span className="text-white px-3">(Hebrews 11:6)</span></span>
                    </div>

                    <br /><br />

                    <p className="shadow p-4 text-white rounded bg-teal-900">
                       It is important to know that the word we hear, those we listen to, and the books we read, contribute as well as deposit some form of knowledge into a person. The effect of the words we listen to, and the books we read, usually create a lifestyle that multiplies along the line.
                    </p>

                    <p className="p-3 my-5" style={{borderLeft: '7px solid'}}>
                        Therefore, it is imperative to listen to the right people, the right word that comes in the form of songs, messages, exhortation, Christian based seminar, 
                        and sermons in order to build our faith. The Bible stated in <span className="text-white font-extrabold">Romans 10:17</span> thus;
                    </p>


                    <div role="alert" className="alert my-5 bg-[#222020]">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> */}
                        <span className="text-xs text-[#d8c13e] font-extrabold">So, then faith comes by hearing, and hearing by the word of God. <span className="text-white font-extrabold">Romans 10:17</span></span>
                    </div>

                    <p  className="shadow p-4 text-white rounded bg-teal-900">
                    Moreover, the word of God in the world we live in today is available in various versions which includes the print format, media, social media, electronic, and around our physical environment. All we have to do is to utilize every means or the most preferable means for our spiritual growth.
                    </p><br />

                    <p  className="shadow p-4 text-white rounded bg-teal-900">
                    Through the internet or physical representation, a person can be impacted, 
                    blessed, and receive healing in the area or areas where they trust God to visitation. 
                    Whatever information we receive, with time, we digest, and ultimately turns into an idea 
                    a person process on a daily basis.  In the long run, that information becomes 
                    part of us and eventually they become our lifestyle either consciously or unconsciously.
                    </p><br />

                    <p className="shadow p-4 text-white rounded bg-teal-900">
                    In regards to this, Kingdom Lifestyle-Radio, a division of Kingdom Access Media, is the right platform for audio and visual 24/7 presentation of gospel content in order for you to be blessed 24/7, without leaving behind the possibility of building and strengthening your inner man which is your spirit.
                    </p><br />

                    <p  className="shadow p-4 text-white rounded bg-teal-900">
                    Finally, as the body requires nutritious food to grow and glow, also, your spirit needs the word of God to grow spiritually and glow in all your dealings. Healing and testimony await you here on the Kingdom Lifestyle-Radio, and you are always welcome on this platform, giving you 24/7 Gospel on the go!
                    </p><br />
                </div>

                <div className="flex overflow-hidden bg-[#241111f3] w-full flex-wrap">
                    <div className="flex-1 max-w-[500px] min-w-[300px]">
                        <img className="w-full" src="/images/founder.png" alt="" />
                    </div>
                    <div className="flex items-center flex-1 max-w-[500px] min-w-[300px]">
                      <div className="w-max h-max">
                        <h1 className="text-4xl text-[#dec1c1] font-extrabold">Olalekan Oloyede</h1>
                        <p className="bg-white p-1">Founder, Kingdom Life Radio</p>
                      </div>
                    </div>

                </div>

            </div>

            </div>
            <Footer />
        </div>
    )
}

export default About;