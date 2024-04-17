import { useParams } from "react-router-dom";
import Nav from '../components/Nav'
const Article = () =>{
   return(
    <div> 
        <Nav />
        <div>
            <div className="bg-[gold] p-2 flex-wrap flex justify-between">
                <h1 className="ml-5 font-bold">Devotion</h1>
                <h1 className="font-extrabold text-white">By Akinsola Kingsley</h1>
            </div>

            <div id="container" className="lg:p-10 p-5 flex min-h-[400px] flex-col md:flex-row">
                <div className="flex-1 p-2 lg:p-10">
                    <div className={`object-cover w-full pb-10 ${1 == 1 ? 'm-auto md:m-0 w-1/3' : ''}`}>
                        <img className="w-full" src="/images/hero.png" alt="" />
                    </div>

                    <div>
                        <h1 className="font-extrabold text-xl">The Power of God</h1>
                        <p>Author: <span className="font-bold text-green-500">Lawrence Oyor</span></p>
                    </div>
                    <h1 className="mt-5">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae similique itaque unde, debitis nesciunt exercitationem laborum temporibus officia dolorem facere ut error voluptate vel atque nobis eaque fugiat illo labore necessitatibus! Molestias assumenda ullam, nihil
                         nulla id atque officiis sed cum. Numquam, nulla modi!
                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae similique itaque unde, debitis nesciunt exercitationem laborum temporibus officia dolorem facere ut error voluptate vel atque nobis eaque fugiat illo labore necessitatibus! Molestias assumenda ullam, nihil
                         nulla id atque officiis sed cum. Numquam, nulla modi!
                         <br /><br />

                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae similique itaque unde, debitis nesciunt exercitationem laborum temporibus officia dolorem facere ut error voluptate vel atque nobis eaque fugiat illo labore necessitatibus! Molestias assumenda ullam, nihil
                         nulla id atque officiis sed cum. Numquam, nulla modi!
                    </h1>
                    <p className="mt-5 text-right">20 days ago</p>

                    <div id="share" className="my-10">
                        <div>
                            <h1>Share Review on</h1>
                            <div className="flex gap-3">
                                <div className="w-7 h-7 bg-black"></div>
                                <div className="w-7 h-7 bg-black"></div>
                                <div className="w-7 h-7 bg-black"></div>
                                <div className="w-7 h-7 bg-black"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="comment" className="md:max-w-[300px] border flex-1 ">
                    <h1 className="bg-teal-900 text-white p-2">Comments</h1>

                    <div className="border rounded w-full p-2">
                        <textarea className="outline p-2 rounded w-full" placeholder="Leave a comment" name="Area" id="" cols="10" rows="5"></textarea>
                        <button className="p-2 border bg-green-600 rounded w-full">Send</button>
                    </div>

                   
                    <div className="p-2 flex">
                        <div className="w-[50px] h-[50px] bg-black rounded-full"></div>
                        <div className="flex-1 ml-3">
                            <div className="flex flex-wrap justify-between mb-2">
                                <h1 className="font-bold">Name and Surname</h1>
                                <p className="text-sm text-orange-700">2h ago</p>
                            </div>
                            <p className="text-sm">Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem deleniti tempore, labore quo possimus, eaque, eveniet ducimus veritatis fuga optio fugiat? </p>
                        </div>
                    </div>

                    <div className="p-2 flex">
                        <div className="w-[50px] h-[50px] bg-black rounded-full"></div>
                        <div className="flex-1 ml-3">

                            <h1 className="font-bold">Joy Anosike</h1>
                            <p className="text-sm">Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem deleniti tempore, labore quo possimus, eaque, eveniet ducimus veritatis fuga optio fugiat? </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   )
}


export default Article;