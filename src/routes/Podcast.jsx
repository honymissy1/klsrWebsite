import { useEffect, useState, useRef } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import  XMLParser from 'react-xml-parser';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Podcast = () =>{

  const audioRef = useRef(null);
  const [podcastData, setPodcastData] = useState();
  let [currentPodcast, setCurrentPodcast] = useState(0);

    useEffect(() =>{
      const fetchPod = async () =>{
        fetch(`https://anchor.fm/s/1d6ad87c/podcast/rss`)
        .then(response => response.text())
        .then(str => {          
            const xml = new XMLParser().parseFromString(str);
            setPodcastData(xml.getElementsByTagName('item'))
           })  
           
          }
          
          fetchPod();
        },[])

        useEffect(() =>{
          if (audioRef.current) {
            audioRef.current.pause;
          }
        }, [])

        function stripHtmlTags(str) {
          return str.replace(/<\/?[^>]+(>|$)/g, " ");
        }
        

    const scrollToTop = (index) => {
      setCurrentPodcast(index)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    const clickNext = () =>{
      setCurrentPodcast(currentPodcast+1)
    }

    const clickPrev = () =>{
      if(currentPodcast > 0){
        setCurrentPodcast(currentPodcast-1)   
      }
    }


    return(

      <div>
        <Nav />

            <div className="min-h-[60vh]">

              <div className="relative h-[70vh] mb-10 w-[100%] overflow-hidden" style={{backgroundImage: "url('/images/designs/img2.jpeg')", backgroundPosition:'center bottom', backgroundSize: 'cover' }}>
                <div className="absolute flex items-end  text-white w-full h-full bg-[#0b0f14bf]">
                   <div className="p-10">
                        <h1 className="md:text-8xl text-4xl font-extrabold">KLSR PODCAST</h1>
                   </div>

                </div>
              </div>

              <div className="min-h-[300px] p-5 md:p-10 flex-wrap gap-10 flex">
 
                           {
                
                            <div className="flex-1 min-w-[300px]">
                              <div className="" id="player">
                              <div className="shadow p-3 !mx-auto shadow-slate-300 min-w-[300px]  w-[80%] rounded" id="description">
                                <div className="text-center">
                                <img className="w-full" src="/images/designs/img3.jpeg" alt="" />

                                </div>

                                <AudioPlayer
                                    ref={audioRef}
                                    onClickPrevious={clickPrev}
                                    onClickNext={clickNext}
                                    showDownloadProgress
                                    autoPlayAfterSrcChange={false}
                                    src={podcastData && podcastData[currentPodcast]?.children.find((child) => child.name === 'enclosure').attributes.url}
                                    onError={() => alert('Error playing podcast')}
                                />

                                <a href={podcastData && podcastData[currentPodcast].children.find((child) => child.name === 'enclosure').attributes.url} download={podcastData && podcastData[currentPodcast].children.find((child) => child.name === 'title').value+'.mp3'} type="audio/mpeg">

                                <div className="p-1 text-center rounded bg-green-600">
                                  <h1 className="text-white font-bold"><i className="fa-solid fa-download mr-5"></i> Download podcast</h1>
                                </div>
                                </a>

                              </div>
                              </div>

                              {
                                podcastData && (
                                  <div className="shadow !mx-auto my-4 shadow-slate-300 min-w-[300px] w-[80%] rounded" id="description">
                                    <div className="p-5">
                                      <h1 className="font-extrabold py-2 text-2xl">
                                      {podcastData && podcastData[currentPodcast].children.find((child) => child.name === 'title').value.slice(0, -1)}</h1>
                                      <p className="text-sm">{podcastData && stripHtmlTags(podcastData[currentPodcast].children.find((child) => child.name === 'description').value.slice(0, -1))}</p>
                                      <hr />
                                      <div className="flex flex-wrap justify-between items-center pt-2">
                                          <h1 className="text-[#985be3] font-extrabold py-1"><i className="fa-solid fa-user-tie"></i> Olalekan Oloyede</h1>
                                          <p className="bg-slate-300 text-sm p-1 rounded-xl">{podcastData && podcastData[currentPodcast].children.find((child) => child?.name == 'pubDate')?.value}</p>
                                      </div>
                                    </div>
                                    
                                  </div>

                                )
                              }
                          
                            </div>

        
              }

              {
              podcastData ? (
               <div className="flex-1 h-[100vh] overflow-y-auto rounded max-[80%] min-w-[300px]" id="other-podcasts">
                    <div className="p-5 sticky top-0 bg-[#083232] text-white"><h1>Other Podcast</h1></div>
             
                    <div className="py-3">

                          <div>
                            {podcastData?.map((item, index) => (
                              <div onClick={() => scrollToTop(index)} className={`p-2 mb-5 items-center border-l-4 rounded border border-black  ${currentPodcast === index ? 'bg-gray-300' : ''}`} key={index}>
                                <h2 className="p-2 font-extrabold">{item.children.find((child) => child.name === 'title').value.slice(0, -1)}</h2>
                                <p className="p-2 font-bold text-xs">{item.children.find((child) => child?.name == 'pubDate')?.value}</p>

                              </div>
                            ))}
                          </div>

                                 </div>
               </div>
              ): (
                 <div className="min-w-[300px] rounded-md text-center bg-teal-900 text-white h-max py-10 flex-1">
                   <h1 className="font-extrabold text-2xl">Could not get podcasts</h1>
                   <p className="text-red-100 text-xs mt-4 bg-red-800 w-max m-auto p-1 rounded-full">This could be due to:</p>
     
                   <ul className="list-disc  text-left w-max m-auto">
                    <li>Network Connectivity issue</li>
                    <li>Internal Server error</li>

      
                   </ul>

                   <p className='text-center'>Pull to refresh</p>
                 </div>
              )
              }



              </div>

            </div>
      </div>




    )
}



export default Podcast;