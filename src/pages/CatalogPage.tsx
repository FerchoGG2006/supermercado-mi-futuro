import { Link, useNavigate } from 'react-router-dom';
import { TopAppBar } from '../components/layout/TopAppBar';
import { BottomNavBar } from '../components/layout/BottomNavBar';
import { Footer } from '../components/layout/Footer';

export const CatalogPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col">
            <TopAppBar />
            <main className="pt-24 pb-20 w-full max-w-[1600px] mx-auto px-6 lg:px-12 flex-grow">
                <section className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <nav className="flex items-center text-sm font-medium text-on-surface-variant gap-2">
                        <Link className="hover:text-primary" to="/">Home</Link>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <span className="text-on-surface">Fresh Produce</span>
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
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><span className="material-symbols-outlined">filter_list</span> Filters</h3>
                            <div className="mb-8">
                                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Categories</p>
                                <div className="space-y-3">
                                    {['Fresh Vegetables', 'Organic Fruits', 'Dairy & Eggs', 'Bakery'].map((cat, i) => (
                                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                            <input defaultChecked={i===0} className="rounded-lg border-outline text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
                                            <span className="text-sm font-medium group-hover:text-primary">{cat}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                    <div className="md:col-span-9">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "Heirloom Tomato Mix", price: "$4.99", old: "$6.50", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADz9xS36b7fK-CdVecbw2oogTDooQXa4_7na-alzqnSELoMYeUgC_4FvWiYCly7qVosjYbEYPgWXgTu2jeWHv8zbWP-QtHrYfoYMkh_9Rk50AqoQ_DqQCKgfjdWuNKb0eEXVCWayp992rfpnjQoVPxrauZxwWc6YCFNxqne36F5Yl2DAmkOwlD2MZ82KrCcjOu-Ancr6NNqjuE1ALAvzA6CzuIT41DPqvWOKejXKxuh0_OGAmxDTjlA54RscE5Z17dOzYKd8JKtUNv", badge: "Sale", badgeColor: "bg-error-container text-on-error-container" },
                                { title: "Pure Almond Milk", price: "$5.25", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfMkmX2fJbwMrQRr77Ksvz9e3l2vIuiJsUszODkQnzbGmTZIJk7Ttcb9nSCPSwQOQbzioKVMOUrUh-kaY28va4-ybMw3yZh42P-f82zYJLaCPuaF5AXXsjgxu-jgoxRj8jDRr9fG26WKFpfoQVJvUDN09Sbgl0-efUvU4tf2-hjadrPShcCI72h6ioxfntVadOtaW5xQ3QBu_0IWgraE0YJtlCkMaIjEYjHxKpYN7lkr0yFG6h3gPM9bMCRf32BEPN4KStMeY2CqRd", badge: "New", badgeColor: "bg-tertiary-fixed text-tertiary" },
                                { title: "Hass Avocados (2pk)", price: "$3.50", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd3XZ8BbNoU4hp-3LTwp2YKmVUdbFIom92fT2RT7iMi4DSyfAQ58GizILiyJLUvZjrTDnU8GM_5Kz5UCHHejgfHsUhbIjsPoD12ctsgsxpc_5c3CWKl0iEdSOdXq2L6cjZJBGRhVXdIX7knnacZNvC5xr9fwVoIp_aqHhUrLmBZBF0rXKXMmSj0zsnQkneUUNNpk6R1Kw25CuERl1JXT4elywK-lxZ5tO6MZ0r2BHAB6qmzH1b9S8RX6bwlLzxSn4UoPaUA_xK-xNC", link: "/product" },
                            ].map((prod, i) => (
                                <div key={i} className="bg-surface-container-lowest rounded-3xl overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
                                    <div onClick={() => navigate(prod.link || '/catalog')} className="cursor-pointer relative aspect-square overflow-hidden bg-surface-container-low m-2 rounded-2xl">
                                        <img alt={prod.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={prod.img}/>
                                        {prod.badge && <div className={`absolute top-4 left-4 ${prod.badgeColor} px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest`}>{prod.badge}</div>}
                                    </div>
                                    <div className="p-6 pt-2">
                                        <h3 className="text-lg font-bold text-on-surface mb-2">{prod.title}</h3>
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex flex-col">
                                                <span className="text-xl font-extrabold text-primary">{prod.price}</span>
                                                {prod.old && <span className="text-xs text-on-surface-variant line-through">{prod.old}</span>}
                                            </div>
                                            <button className="bg-primary text-on-primary w-12 h-12 rounded-xl flex items-center justify-center hover:bg-primary-container active:scale-90 transition-all">
                                                <span className="material-symbols-outlined">add_shopping_cart</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <BottomNavBar />
        </div>
    );
};
