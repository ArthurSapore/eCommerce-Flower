type Props ={
    checked?: true 
    disabled?: boolean;
    value: string;
}

export default function Checkbox({checked, disabled, value}:Props){
    return(
        <div className="flex items-center">
            <input type="checkbox" className="border border-black w-5 h-4"  checked={checked} disabled={disabled}/>
            <label className="ml-3 text-sm font-medium font-gilroy">{value}</label>
        </div>
    );
}