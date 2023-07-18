import edit_square from '../images/edit_square.svg'
import check from '../images/check_FILL0_wght300_GRAD0_opsz24.svg'

export default function SignUp(){
    return(
        <div className="flex flex-col h-[calc(100vh-50px)] border-x border-b border-black px-4 py-10 md:px-20 md:pt-20 md:pb-10">
            <div className='flex flex-col gap-1'>
                <h1 className="font-semibold font-Gilroy text-4xl leading-12 flex self-stretch leading-10">Sign up</h1>
            </div>
            <div>
                <div className="flex gap-3 flex-col my-6" id="login-signup">
                    <label className="font-normal font-Gilroy text-base brightness-[90%]">Become a member and enjoy personalized gift recommendations, fast checkout, and more.</label>
                    <div className='flex items-center border-b border-black'>
                        <figure><img src={check} alt="" /></figure>
                        <input className="flex px-4 py-3  " type="number" placeholder="+380 XX XXX XX XX"/>
                        <figure className='ml-auto'><img src={edit_square} alt="" /></figure>
                    </div>
                </div>
                <div className='mb-3 mt-4'>   
                    <label className="font-normal font-gilroy text-base brightness-[90%]">Enter code from sms</label>
                    <input className="w-full px-4 py-3 border border-gray-200 mt-3" type="number" placeholder="XX XX XX" />
                    <p className='text-xs text-gray-400 font-Gilroy leading-3 pt-2'>Please check your phone for a message containing a code to enter</p>
                </div>
                <button className="flex justify-center items-center px-6 py-4 h-12 w-full bg-black text-white text-sm tracking-wider uppercase">join us</button>
                <div className="flex items-center my-6 gap-3">
                    <p className='text-xs text-gray-400 font-Gilroy leading-3 pt-2'>Didn't receive a code?</p>
                    <a className='text-xs font-Gilroy leading-3 pt-2'>Resend code</a>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center mt-auto gap-3 text-sm font-Gilroy underline divide-y'>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Conditions</a>
            </div>
        </div>
    );
}