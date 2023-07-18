import bouquet from '../images/bouquet.png'
import Button from './Button';

export default function PlanCard(){
    return(
        <div className="flex flex-col md:flex-row md:max-h-72border w-72 border-black">
            <div>
                <figure className='border border-b-black'><img src={bouquet} alt="" /></figure>
            </div>
            <div className='p-4'>
                <h1 className="text-lg font-medium">Classic</h1>
                <ul className="max-w-md space-y-1 list-disc list-inside mt-4 text-base">
                    <li>
                        Price $45  
                    </li>
                    <li>
                        Free Delivery
                    </li>
                    <li>
                        Best for a budget
                    </li>
                    <li>
                        Glass vase with first delivery
                    </li>
                    <li>
                        Save up to 25%
                    </li>
                </ul>
            </div>
            <Button value="select"/>
        </div>
    );

}