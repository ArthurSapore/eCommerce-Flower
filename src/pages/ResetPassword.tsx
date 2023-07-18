import Button from "../components/Button";

export default function ResetPassword(){
    return(
        <div className="flex flex-col h-[calc(100vh-50px)] border-x border-b border-black px-4 py-10 md:px-20 md:pt-20 md:pb-10">
            <div className='flex flex-col gap-1'>
                <h1 className="font-semibold font-Gilroy text-4xl leading-12 flex self-stretch leading-10">Reset your password</h1>
            </div>
            <div className="my-6">
                <label className="font-normal font-Gilroy text-base brightness-[90%]">Please provide your phone number below to receive a code for restoring access to your account</label>
            </div>
            <div>
                <div className='mb-3 mt-4'>   
                    <label className="font-medium font-gilroy text-base ">Enter your mobile number</label>
                    <input className="w-full px-4 py-3 border border-gray-200 mt-3" type="number" placeholder="+380 XX XXX XX XX" />
                </div>
                <button className="flex justify-center items-center px-6 py-4 h-12 w-full bg-black text-white text-sm tracking-wider uppercase">Continue</button>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center mt-auto gap-3 text-sm font-Gilroy underline divide-x divide-black'>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Conditions</a>
            </div>
        </div>

    );
}