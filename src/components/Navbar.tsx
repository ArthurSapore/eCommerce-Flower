

import Menu from '../images/Menu.svg'
import Shopping_bag from   '../images/shopping_bag.svg'


export default function Navbar (){
    return(
        <nav className='flex content-between border-y border-black'>
            <button className='p-3 border-x border-black'>
                <figure><img src={Menu} alt="menu"/></figure>
            </button>
            <button className='p-3 ml-auto border-x border-black'>
                <figure><img src={Shopping_bag} alt="shopping_bag"/></figure>
            </button>
        </nav>
    );
}