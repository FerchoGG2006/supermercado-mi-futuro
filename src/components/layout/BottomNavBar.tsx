import { Link, useLocation } from 'react-router-dom';
import { useStore } from '../../store/useStore';

export const BottomNavBar = () => {
    const location = useLocation();
    const { cart } = useStore();
    const isActive = (path: string) => location.pathname === path;
    
    return (
        <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#fbf9f4]/80 dark:bg-stone-950/80 backdrop-blur-xl border-t border-[#bec9be]/20 flex justify-around items-center px-4 pb-6 pt-3 shadow-[0_-4px_24px_rgba(27,28,25,0.06)]">
            <Link to="/" className={`flex flex-col items-center justify-center rounded-xl px-5 py-2 active:scale-90 duration-150 ${isActive('/') ? 'bg-[#006036] text-[#ffffff]' : 'text-[#3f4941] dark:text-stone-400'}`}>
                <span className="material-symbols-outlined">home</span>
                <span className="font-inter text-[10px] font-semibold uppercase tracking-wider mt-1">Inicio</span>
            </Link>
            <Link to="/catalog" className={`flex flex-col items-center justify-center rounded-xl px-5 py-2 active:scale-90 duration-150 ${isActive('/catalog') ? 'bg-[#006036] text-[#ffffff]' : 'text-[#3f4941] dark:text-stone-400'}`}>
                <span className="material-symbols-outlined">category</span>
                <span className="font-inter text-[10px] font-semibold uppercase tracking-wider mt-1">Categorías</span>
            </Link>
            <Link to="/catalog?search=" className="flex flex-col items-center justify-center text-[#3f4941] dark:text-stone-400 px-5 py-2 active:scale-90 duration-150 relative">
                <span className="material-symbols-outlined">search</span>
                <span className="font-inter text-[10px] font-semibold uppercase tracking-wider mt-1">Buscar</span>
            </Link>
            <Link to="/cart" className={`relative flex flex-col items-center justify-center rounded-xl px-5 py-2 active:scale-90 duration-150 ${isActive('/cart') ? 'bg-[#006036] text-[#ffffff]' : 'text-[#3f4941] dark:text-stone-400'}`}>
                <span className="material-symbols-outlined">shopping_cart</span>
                {cart.length > 0 && (
                    <span className="absolute top-1 right-3 bg-[#1a6639] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm border-2 border-surface">
                        {cart.reduce((acc, item) => acc + item.quantity, 0)}
                    </span>
                )}
                <span className="font-inter text-[10px] font-semibold uppercase tracking-wider mt-1">Carrito</span>
            </Link>
        </nav>
    );
};
