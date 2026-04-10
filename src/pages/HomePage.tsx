import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { TopAppBar } from '../components/layout/TopAppBar';
import { BottomNavBar } from '../components/layout/BottomNavBar';
import { Footer } from '../components/layout/Footer';
import { useStore } from '../store/useStore';

export const HomePage = () => {
    const { categories, products, fetchCategories, fetchProducts, isLoading, addToCart } = useStore();

    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, [fetchCategories, fetchProducts]);

    return (
        <div className="min-h-screen flex flex-col">
            <TopAppBar />
            <main className="pt-24 pb-12 flex-grow w-full max-w-[1600px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-12 gap-8">
                    <aside className="col-span-3 hidden lg:block">
                        <div className="bg-surface-container-low rounded-3xl p-6 sticky top-28">
                            <h3 className="font-headline font-bold text-lg mb-6 text-primary tracking-tight">Departamentos</h3>
                            <nav className="space-y-1">
                                {categories.length === 0 && isLoading ? (
                                    <div className="animate-pulse space-y-4">
                                        {[1,2,3,4,5,6].map((i) => <div key={i} className="h-10 bg-surface-container-highest rounded-xl"></div>)}
                                    </div>
                                ) : (
                                    categories.map((dept) => (
                                        <Link key={dept.id} to={`/catalog?category=${dept.slug}`} className="flex items-center justify-between group px-4 py-3 rounded-xl hover:bg-surface-container-highest transition-colors">
                                            <div className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">{dept.icon}</span>
                                                <span className="text-on-surface-variant group-hover:text-on-surface font-medium">{dept.name}</span>
                                            </div>
                                            <span className="material-symbols-outlined text-outline-variant text-sm">chevron_right</span>
                                        </Link>
                                    ))
                                )}
                            </nav>
                            <div className="mt-12 p-6 bg-primary rounded-2xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <p className="text-primary-fixed font-headline font-bold text-sm uppercase tracking-widest mb-2">Club Futuro</p>
                                    <p className="text-white font-headline text-lg font-bold leading-tight mb-4">Ahorra hasta un 20% en cada compra</p>
                                    <button className="bg-tertiary-fixed-dim text-on-tertiary-fixed font-bold py-2 px-4 rounded-xl text-sm active:scale-95 duration-150">Unirme Ahora</button>
                                </div>
                                <div className="absolute -bottom-4 -right-4 opacity-20">
                                    <span className="material-symbols-outlined text-8xl" style={{fontVariationSettings: "'FILL' 1"}}>loyalty</span>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <div className="col-span-12 lg:col-span-9 space-y-12">
                        <section className="relative min-h-[480px] h-auto md:h-[480px] py-12 md:py-0 rounded-3xl overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-primary via-primary/80 md:via-primary/60 to-transparent z-10"></div>
                            <img alt="Mercado orgánico premium" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy2gHjRQ7KKAWMwM0LkzDH2vJmA6ohkWLrWvE4t2RpdYTE6PkPYFzcaF-Cf2ouD3pDSmDG7XH4sWqh-kbVz8c1niVZ0K7IGQjM7o71usMYmTX7AwoK5duR6HQ9OZs87guL9JX6Irr3rQW_I_DnMW03N8PJotIjKvsEuo3TpuPhp3n-Es9PU_JpWd5ypfwRImJZFJzQUXco5WjsZJ0dCtFYG1tFSEqww8gx3ZD5SYK5R94ZiGvck_-6kIBGZCcxK0LBwXHg081oJtTi"/>
                            <div className="relative z-20 h-full flex flex-col justify-end md:justify-center px-6 md:px-12 lg:px-16 max-w-2xl mt-auto md:mt-0">
                                <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-bold font-label uppercase tracking-widest mb-4 md:mb-6 w-fit">Selección de Temporada</span>
                                <h1 className="text-white font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.1] mb-4 md:mb-6">Calidad que transforma <br className="hidden sm:block" /> tu <span className="text-primary-fixed">mañana</span>.</h1>
                                <p className="text-primary-fixed-dim font-body text-base md:text-lg mb-8 max-w-md">Productos locales seleccionados a mano por expertos para garantizar la frescura desde el campo hasta su mesa.</p>
                                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                    <Link to="/catalog" className="bg-tertiary-fixed-dim text-on-tertiary-fixed font-bold py-4 px-8 rounded-xl text-base md:text-lg active:scale-95 duration-200 shadow-xl shadow-black/20 text-center flex-1 sm:flex-none">Ver Ofertas</Link>
                                    <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-8 rounded-xl text-base md:text-lg hover:bg-white/20 transition-colors flex-1 sm:flex-none">Nuestras Sedes</button>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="flex justify-between items-end mb-6 md:mb-8">
                                <div>
                                    <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tight text-on-surface">Ofertas de la Región</h2>
                                    <p className="text-on-surface-variant text-sm md:text-base mt-1">Apoyando a productores locales de Sonora</p>
                                </div>
                                <Link className="text-primary font-bold flex items-center gap-2 hover:underline" to="/catalog">
                                    Ver todo <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {products.length === 0 && isLoading ? (
                                    <div className="col-span-1 md:col-span-2 lg:col-span-4 text-center py-12 text-on-surface-variant">Cargando increíbles ofertas...</div>
                                ) : (
                                    products.map((prod) => {
                                        const deptName = categories.find(c => c.id === prod.categoryId)?.name || 'Especialidades';
                                        return (
                                            <div key={prod.id} className="bg-surface-container-lowest p-5 rounded-3xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-300 group">
                                                <Link to={`/product/${prod.id}`} className="block relative mb-4 bg-surface-container rounded-2xl overflow-hidden aspect-square">
                                                    <img alt={prod.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={prod.image}/>
                                                    {prod.tag && <span className="absolute top-3 left-3 bg-error-container text-on-error-container px-2 py-1 rounded-lg text-xs font-bold font-label">{prod.tag}</span>}
                                                </Link>
                                                <p className="text-on-surface-variant text-xs font-bold font-label uppercase tracking-wider mb-1">{deptName}</p>
                                                <h4 className="font-headline font-bold text-on-surface mb-4 group-hover:text-primary transition-colors leading-tight min-h-[40px]">{prod.title}</h4>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex flex-col">
                                                        {prod.oldPrice && <span className="text-outline-variant text-xs line-through">${prod.oldPrice}</span>}
                                                        <span className="text-on-surface font-extrabold text-xl font-headline">${prod.price}</span>
                                                    </div>
                                                    <button onClick={() => { addToCart(prod); toast.success(`${prod.title} al carrito`); }} className="bg-primary text-white w-10 h-10 rounded-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform" aria-label="Añadir al carrito">
                                                        <span className="material-symbols-outlined">add_shopping_cart</span>
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    })
                                )}
                            </div>
                        </section>
                        <section className="grid grid-cols-12 gap-6 h-auto md:h-[400px]">
                            <div className="col-span-12 md:col-span-8 bg-surface-container-highest rounded-3xl relative overflow-hidden flex flex-col justify-center p-8 md:p-12">
                                <div className="relative z-10">
                                    <h3 className="font-headline font-extrabold text-2xl md:text-3xl text-on-surface mb-3 md:mb-4">Gourmet a tu Puerta</h3>
                                    <p className="text-on-surface-variant text-sm md:text-base max-w-sm mb-6">Entrega premium en menos de 60 minutos con nuestro servicio de logística privada.</p>
                                    <button className="bg-primary text-white font-bold py-3 px-6 rounded-xl active:scale-95 transition-all w-full sm:w-auto">Pedir Ahora</button>
                                </div>
                                <img alt="Reparto premium" className="hidden md:block absolute right-0 top-0 h-full w-1/2 object-cover mask-gradient-l" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSpHMDnCB-QmmMCK2AbqoEEQEfus9FGBUMbrN1vzZwEviLhFlwGEJKfhRnimBDYF-Yqq-h4RXoe3QJ4a3ENcAAiSY1Q7m_zrrKsZ7lAuqSjblhrniEFu8fwc8EB4kJtQcS5wjWjtU8-wEQwEtCwcNqXPakjYUtO_EMgrDVC0PriMPKx8h-xM0QkD3S8nqGpIBbbyHMw0kAAJZ7QhLi6iv0VSjBPBdP3fy2PSVZcoe2PNjkxUOM_Cy1WuC6demHeWSAePLkw_0Uu1x2"/>
                            </div>
                            <div className="col-span-12 md:col-span-4 bg-primary text-white rounded-3xl p-8 flex flex-col justify-between min-h-[250px] md:min-h-0">
                                <div className="flex justify-between items-start">
                                    <span className="material-symbols-outlined text-4xl text-primary-fixed" style={{fontVariationSettings: "'FILL' 1"}}>eco</span>
                                    <span className="bg-white/20 text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded">Eco-Friendly</span>
                                </div>
                                <div>
                                    <h3 className="font-headline font-bold text-2xl mb-2 leading-tight">Compromiso Sustentable</h3>
                                    <p className="text-primary-fixed-dim text-sm opacity-80">Bolsas 100% compostables y procesos de residuo cero en todas nuestras tiendas.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
            <BottomNavBar />
        </div>
    );
};
