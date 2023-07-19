import { MouseEventHandler } from "react";

type Props = {
    variant?: 'secondary' | 'tertiary';
    value: React.ReactNode;
    event?: MouseEventHandler;
}


export default function Button ({variant, value, event}:Props){

    

    let style= "w-full bg-black hover:bg-[#424245] focus:bg-black text-white flex items-center gap-2 justify-center px-6 py-4 text-center uppercase text-base font-Gilroy";
    if(variant ==='secondary'){
        style = 'w-full border border-black hover:bg-black hover:text-white focus:bg-white focus:text-black flex items-center gap-2 justify-center px-6 py-4 text-center uppercase text-base font-Gilroy'
    }else if(variant ==='tertiary'){
        style = 'w-full border border-white bg-[#121212] text-white hover:bg-white hover:text-black hover:border hover:border-black flex items-center gap-2 justify-center px-6 py-4 text-center uppercase text-base font-Gilroy'
    }

    return(
        <button className={ style } onClick={event}> {value} </button>
    );

}