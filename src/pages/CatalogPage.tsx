import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { TopAppBar } from '../components/layout/TopAppBar';
import { BottomNavBar } from '../components/layout/BottomNavBar';
import { Footer } from '../components/layout/Footer';
import { useStore } from '../store/useStore';
import { useEffect } from 'react';
import { formatPrice } from '../utils/format';

export const CatalogPage = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const categorySlug = searchParams.get('category');
    const searchQuery = searchParams.get('search');
    const { products, categories, fetchProducts, fetchCategories, isLoading, addToCart } = useStore();

    useEffect(() => {
        if (products.length === 0) fetchProducts();
        if (categories.length === 0) fetchCategories();
    }, [products.length, categories.length, fetchProducts, fetchCategories]);

    const filteredProducts = products.filter(p => {
        let match = true;
        if (categorySlug) {
            const cat = categories.find(c => c.slug === categorySlug);
            if (cat && p.categoryId !== cat.id) match = false;
        }
        if (searchQuery) {
            if (!p.title.toLowerCase().includes(searchQuery.toLowerCase())) match = false;
        }
        return match;
    });

    const activeCategoryName = categorySlug ? categories.find(c => c.slug === categorySlug)?.name || 'Categoría' : searchQuery ? `Resultados para "${searchQuery}"` : 'Todos los productos';

    return (
        <div className="min-h-screen flex flex-col">
            <TopAppBar />
            <main className="pt-24 pb-20 w-full max-w-[1600px] mx-auto px-6 lg:px-12 flex-grow">
                <section className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <nav className="flex items-center text-sm font-medium text-on-surface-variant gap-2">
                        <Link className="hover:text-primary" to="/">Inicio</Link>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <span className="text-on-surface">{activeCategoryName}</span>
                    </nav>
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-semibold text-on-surface-variant">Sort by:</span>
                        <select className="bg-surface-container-highest border-none rounded-xl text-sm font-medium py-2 px-4 focus:ring-2 focus:ring-primary">
                            <option>Newest Arrivals</option>
                            <option>Price: Low to High</option>
                        </select>
                    </div>
                </section>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <aside className="md:col-span-3 space-y-8">
                        <div className="bg-surface-container-low rounded-3xl p-6">
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><span className="material-symbols-outlined">filter_list</span> Filtros</h3>
                            <div className="mb-8">
                                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Departamentos</p>
                                <div className="space-y-3">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input 
                                            onChange={() => setSearchParams({})} 
                                            checked={!categorySlug && !searchQuery} 
                                            className="rounded-lg border-outline text-primary focus:ring-primary bg-surface-container-lowest" 
                                            type="radio" name="dept"
                                        />
                                        <span className="text-sm font-medium group-hover:text-primary">Todos</span>
                                    </label>
                                    {categories.map((cat) => (
                                        <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                                            <input 
                                                onChange={() => setSearchParams({ category: cat.slug })} 
                                                checked={categorySlug === cat.slug} 
                                                className="rounded-lg border-outline text-primary focus:ring-primary bg-surface-container-lowest" 
                                                type="radio" name="dept"
                                            />
                                            <span className="text-sm font-medium group-hover:text-primary">{cat.name}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                    <div className="md:col-span-9">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {isLoading ? (
                                <div className="col-span-full text-center py-12 text-on-surface-variant">Cargando catálogo...</div>
                            ) : filteredProducts.length === 0 ? (
                                <div className="col-span-full text-center py-12 text-on-surface-variant">No se encontraron productos coincidentes.</div>
                            ) : (
                                filteredProducts.map((prod) => (
                                    <div key={prod.id} className="bg-surface-container-lowest rounded-3xl overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
                                        <div onClick={() => navigate(`/product/${prod.id}`)} className="cursor-pointer relative aspect-square overflow-hidden bg-surface-container-low m-2 rounded-2xl">
                                            <img alt={prod.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={prod.image}/>
                                            {prod.tag && <div className="absolute top-4 left-4 bg-error-container text-on-error-container px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">{prod.tag}</div>}
                                        </div>
                                        <div className="p-6 pt-2">
                                            <h3 className="text-lg font-bold text-on-surface mb-2 leading-tight">{prod.title}</h3>
                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex flex-col">
                                                    {prod.oldPrice && <span className="text-xs text-on-surface-variant line-through">{formatPrice(prod.oldPrice)}</span>}
                                                    <span className="text-xl font-extrabold text-primary">{formatPrice(prod.price)}</span>
                                                </div>
                                                <button onClick={() => { addToCart(prod); toast.success(`${prod.title} al carrito`); }} className="bg-primary text-white w-12 h-12 rounded-xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all font-bold">
                                                    <span className="material-symbols-outlined">add_shopping_cart</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <BottomNavBar />
        </div>
    );
};
