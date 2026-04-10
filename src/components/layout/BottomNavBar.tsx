import { Link, useLocation } from 'react-router-dom';

export const BottomNavBar = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;
    
    return (
        <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#fbf9f4]/80 dark:bg-stone-950/80 backdrop-blur-xl border-t border-[#bec9be]/20 flex justify-around items-center px-4 pb-6 pt-3 shadow-[0_-4px_24px_rgba(27,28,25,0.06)]">
            <Link to="/" className={`flex flex-col items-center justify-center rounded-xl px-5 py-2 active:scale-90 duration-150 ${isActive('/') ? 'bg-[#006036] text-[#ffffff]' : 'text-[#3f4941] dark:text-stone-400'}`}>
                <span className="material-symbols-outlined">home</span>
                <span className="font-inter text-[10px] font-semibold uppercase tracking-wider mt-1">Home</span>
            </Link>
            <Link to="/catalog" className={`flex flex-col items-center justify-center rounded-xl px-5 py-2 active:scale-90 duration-150 ${isActive('/catalog') ? 'bg-[#006036] text-[#ffffff]' : 'text-[#3f4941] dark:text-stone-400'}`}>
                <span className="material-symbols-outlined">category</span>
                <span className="font-inter text-[10px] font-semibold uppercase tracking-wider mt-1">Categorías</span>
            </Link>
            <Link to="/catalog" className="flex flex-col items-center justify-center text-[#3f4941] dark:text-stone-400 px-5 py-2 active:scale-90 duration-150">
                <span className="material-symbols-outlined">local_offer</span>
                <span className="font-inter text-[10px] font-semibold uppercase tracking-wider mt-1">Ofertas</span>
            </Link>
            <Link to="/cart" className={`flex flex-col items-center justify-center rounded-xl px-5 py-2 active:scale-90 duration-150 ${isActive('/cart') ? 'bg-[#006036] text-[#ffffff]' : 'text-[#3f4941] dark:text-stone-400'}`}>
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="font-inter text-[10px] font-semibold uppercase tracking-wider mt-1">Cart</span>
            </Link>
        </nav>
    );
};
