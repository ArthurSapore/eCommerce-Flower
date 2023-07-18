import Google from '../images/Google.svg'
import Apple from '../images/Apple.svg'

export default function SignIn(){
    return(
        <div className="flex flex-col h-[calc(100vh-50px)] border-x border-b border-black px-4 py-4 md:px-20 md:pt-20 md:pb-10">
            <div className='flex flex-col md:flex-row gap-1'>
                <h1 className="font-semibold font-Gilroy text-4xl leading-12 flex self-stretch leading-10">Greetings!</h1>
                <h1 className="font-semibold font-Gilroy text-4xl leading-12 flex self-stretch leading-10">Welcome to luxury gift shop.</h1>
            </div>
            <div>
                <div className="flex gap-3 flex-col my-6" id="login-signup">
                    <label className="font-medium font-Gilroy text-base">Use your mobile number to sign up or log in</label>
                    <input className="flex px-4 py-3 border border-gray-500" type="number" placeholder="+380 XX XXX XX XX"/>
                    <button className="flex justify-center items-center px-6 py-4 h-12 w-full bg-black text-white text-sm tracking-wider uppercase">continue</button>
                </div>
                <div className="relative flex items-center">
                    <div className="border-t border-gray-300 flex-grow"></div>
                    <div className='px-2 text-gray-300'>or</div>
                    <div className="border-t border-gray-300 flex-grow"></div>
                </div>
                <div className="flex flex-col my-6 gap-3">
                    <label className="font-medium font-Gilroy text-base">Instantly login or sign up via Google</label>
                    <div className='flex flex-col md:flex-row gap-3'>
                        <button className="flex justify-center items-center px-6 py-4 h-12 w-full border border-black text-sm tracking-wider uppercase">
                            <figure className='pr-2'><img src={Google} alt="" /></figure>
                            continue with google
                        </button>
                        <button className="flex justify-center items-center px-6 py-4 h-12 w-full border border-black text-sm tracking-wider uppercase">
                            <figure className='pr-2'><img src={Apple} alt="" /></figure>
                            continue with apple 
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center mt-auto gap-3 text-sm font-Gilroy underline'>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Conditions</a>
            </div>
        </div>
    );
}