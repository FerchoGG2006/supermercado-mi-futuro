import { Link } from 'react-router-dom';

interface TopAppBarProps {
  cartCount?: number;
}

export const TopAppBar = ({ cartCount = 3 }: TopAppBarProps) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#fbf9f4]/80 dark:bg-stone-950/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-6 lg:px-12 py-4 w-full max-w-[1600px] mx-auto">
        <Link to="/" className="flex items-center gap-4">
          <img src="/logo.jpg" alt="Mi Futuro Logo" className="h-8 md:h-10 object-contain rounded" />
        </Link>
        <div className="hidden md:flex flex-1 max-w-2xl mx-12">
          <div className="relative w-full">
            <input 
              className="w-full bg-surface-container-highest border-none rounded-full py-2.5 px-6 pl-12 focus:ring-2 focus:ring-primary text-on-surface-variant font-body" 
              placeholder="Buscar productos, marcas y más..." 
              type="text"
            />
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 mr-6">
          <Link to="/" className="text-[#006036] font-semibold transition-opacity hover:opacity-80">Inicio</Link>
          <Link to="/catalog" className="text-[#3f4941] font-semibold transition-opacity hover:opacity-80">Categorías</Link>
          <Link to="/catalog" className="text-[#3f4941] font-semibold transition-opacity hover:opacity-80">Ofertas</Link>
        </nav>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-[#3f4941] hover:opacity-80 transition-opacity font-medium">
            <span className="material-symbols-outlined">person</span>
            <span className="hidden lg:inline text-sm">Mi Cuenta</span>
          </button>
          <Link to="/cart" className="relative flex items-center gap-2 text-[#3f4941] hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">{cartCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
