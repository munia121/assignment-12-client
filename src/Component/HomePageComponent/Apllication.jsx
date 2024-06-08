import img1 from '../../assets/mobile_app.png'
import img2 from '../../assets/app_store.svg'
import img3 from '../../assets/google_play.svg'
const Apllication = () => {
    return (
        <div className='lg:flex justify-center gap-16 mt-44 items-center bg-blue-400 py-20 '>
            <div className=''>
                <img className='lg:w-[250px] h-[300px]' src={img1} alt="" />
            </div>
            <div>
                <h2 className='text-5xl lg:w-[850px] font-bold'>Get easy access of all features using One Health Application</h2>
                <div className='lg:flex mt-5'>
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Apllication;