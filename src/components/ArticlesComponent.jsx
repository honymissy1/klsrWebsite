const ArticleComponent = () =>{
    return (
        <div className="bg-neutral p-5 !min-h-[400px]">
            <h1 className="p-5 font-extrabold text-white text-4xl">Programs</h1>

            <div className="carousel rounded-box">
                <div className="carousel-item mx-2">
                    <img className="w-full" src="/images/designs/psalm61.png" alt="Burger" />
                </div> 
                <div className="carousel-item mx-2">
                    <img className="w-full" src="/images/designs/psalm61.png" alt="Burger" />
                </div> 

                <div className="carousel-item mx-2">
                    <img className="w-full" src="/images/designs/psalm61.png" alt="Burger" />
                </div> 

                <div className="carousel-item mx-2">
                    <img className="w-full" src="/images/designs/psalm61.png" alt="Burger" />
                </div> 
              
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
                </div> 
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
                </div>
                </div>
        </div>
    )
}


export default ArticleComponent;