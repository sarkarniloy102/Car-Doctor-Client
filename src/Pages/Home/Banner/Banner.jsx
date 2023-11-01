
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'




const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full  h-[600px]">
                <img src={img1} className="w-full" />
                <div className="absolute flex items-center bottom-0 top-0 gap-4 text-white  w-1/3   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='space-y-10 ml-10 '>
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    
                    <div className='space-x-5'>
                        <button className='btn bg-[#FF3811] text-white'>Discover More</button>
                        <button className="btn btn-outline btn-info">Latest Project</button>
                    </div>
                    </div>



                </div>
                <div className="absolute flex  transform -translate-y-1/2 justify-end left-5 right-5 bottom-0 gap-4">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full  h-[600px]">
                <img src={img2} className="w-full" />
                <div className="absolute flex items-center bottom-0 top-0 gap-4 text-white  w-1/3   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='space-y-10 ml-10 '>
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    
                    <div className='space-x-5'>
                        <button className='btn bg-[#FF3811] text-white'>Discover More</button>
                        <button className="btn btn-outline btn-info">Latest Project</button>
                    </div>
                    </div>


                </div>
                <div className="absolute flex  transform -translate-y-1/2 justify-end left-5 right-5 bottom-0 gap-4">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full  h-[600px]">
                <img src={img3} className="w-full" />
                <div className="absolute flex items-center bottom-0 top-0 gap-4 text-white  w-1/3   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='space-y-10 ml-10 '>
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    
                    <div className='space-x-5'>
                        <button className='btn bg-[#FF3811] text-white'>Discover More</button>
                        <button className="btn btn-outline btn-info">Latest Project</button>
                    </div>
                    </div>



                </div>
                <div className="absolute flex  transform -translate-y-1/2 justify-end left-5 right-5 bottom-0 gap-4">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full  h-[600px]">
                <img src={img4} className="w-full" />
                <div className="absolute flex items-center bottom-0 top-0 gap-4 text-white  w-1/3   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='space-y-10 ml-10 '>
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    
                    <div className='space-x-5'>
                        <button className='btn bg-[#FF3811] text-white'>Discover More</button>
                        <button className="btn btn-outline btn-info">Latest Project</button>
                    </div>
                    </div>



                </div>
                <div className="absolute flex  transform -translate-y-1/2 justify-end left-5 right-5 bottom-0 gap-4">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
           
            {/* <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full h-[600px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;