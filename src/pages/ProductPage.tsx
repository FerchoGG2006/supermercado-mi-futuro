import { Link, useNavigate } from 'react-router-dom';
import { TopAppBar } from '../components/layout/TopAppBar';
import { BottomNavBar } from '../components/layout/BottomNavBar';
import { Footer } from '../components/layout/Footer';

export const ProductPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col">
            <TopAppBar />
            <main className="pt-24 pb-32 w-full max-w-[1600px] mx-auto px-6 lg:px-12 flex-grow">
                <nav className="mb-8 flex items-center gap-2 text-on-surface-variant text-sm">
                    <Link to="/" className="hover:text-primary transition-colors">Groceries</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <Link to="/catalog" className="hover:text-primary transition-colors">Produce</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="font-semibold text-on-surface">Organic Avocados</span>
                </nav>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-7 space-y-6">
                        <div className="aspect-square bg-surface-container-low rounded-[2rem] overflow-hidden group relative">
                            <img alt="Avocado" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3-btzEDFRhVi4SWnqaGekMNMPPhuLdHlOSt8BP1SVyvHyyoPCe-DHRM2czAcLQqS2HaJtgCLDJCa_INiGbYyTcgB1OXEY_HfPFwcfryjsI0wrSZxRK-63-mv1gK89xPvxbeVB3tBY4ImyGvH_i6gTDSTXkv-TQB2xzPrgSIdHpqukwn5KbcoC-SwoXalaLGe4fji8RZYUibmf2ZgCnyTz26MUSNiEmF1RbUa7XWJIktHc_jUv5Xwc6-kt0TKgbZvG0jDWGG19YVXd"/>
                            <div className="absolute top-6 left-6 flex flex-col gap-2">
                                <span className="bg-tertiary-fixed text-tertiary px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">Organic</span>
                                <span className="bg-error-container text-on-error-container px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">Fresh Arrival</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            <button className="aspect-square rounded-2xl overflow-hidden ring-2 ring-primary">
                                <img alt="Thumb 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOglyMvTvan8DtNARG9P-74E_ykzsslfXsjHZL2zPjBxjostzg05vHN93KFsjo-e79Z4pIT5REkwJhbGnvC_dhZS6htQ73rtIOLP8yLMl15cMfpactCGdujuOY927Cxq6MHBYUND_GnXWIFZeORTcUaYEG70HcW7B2HizFh1FIPC9fqAgClvSeIAySna3LYEF6k6EUyUtunje6W7nhQQUFQ3_MKjtcwqzG_bnXut_a-K1cYhytap04ASHUs16bu0NYk3Dq3GioLPGi"/>
                            </button>
                            <button className="aspect-square rounded-2xl overflow-hidden hover:opacity-80 transition-opacity bg-surface-container-low">
                                <img alt="Thumb 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz-qqVY0cXio5Y4dL8FyhKWT1M-2DyLZ7swOmGIr9nh6v4dzv3zSW5Y0HOqon5PR-ayGBMyYwWT9tUokMYRJ0g0lapiR3kAZhsZevKmnsr5-22ydvk2KGc7iUiWTF1tmdGJpEQKKkYD60PkINfjOOmlCzhXxQIVEedO2S7vXeA0kGumOyO-xNM7ZTV_Ql4Ld3Tu59C61Xv3Lt2zVUdGcLrkyPfQneyfF2vEROjNp4SWQuYQ8yKRG4M9H0tiSTYoNakS2AK_A1VsfDV"/>
                            </button>
                            <button className="aspect-square rounded-2xl overflow-hidden hover:opacity-80 transition-opacity bg-surface-container-low">
                                <img alt="Thumb 3" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn6vtnF2BPRhwr4-JYh6BdbBSV732WLJO36OiCH7Fudl2utQf00iApYvHZfHGQoLnMIYzpbDDLJLmSNEYOqhufYVrEB7DCnSCkhUFLEBKLaRSGRMI3plNI8jnFZNHYKXgHq56YPobA7FUFipOzGT1TIH0GbEalap4C7rg_nEgMTmxFFYD_qINP3ISpi0AUoR6x_RZMzN90zydmpdOa-4FGtu_39F49LWT9RCnzGE0MZJy3nUWdiyk6F6Kst80hsRJDX_K7J9a32p2J"/>
                            </button>
                            <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container-highest flex items-center justify-center cursor-pointer hover:bg-outline-variant/30 transition-colors">
                                <span className="material-symbols-outlined text-on-surface-variant">more_horiz</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 space-y-10">
                        <section>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex text-tertiary-fixed-dim">
                                    {[1,2,3,4].map(s => <span key={s} className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
                                    <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star_half</span>
                                </div>
                                <span className="text-sm font-semibold text-on-surface-variant">(128 reviews)</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-extrabold font-headline tracking-tight text-on-surface mb-4 leading-[1.1]">Hass Organic Avocados, Large</h2>
                            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">Sourced directly from certified organic farms in Michoacán. Perfect for artisan sourdough toast or a smooth, homemade guacamole.</p>
                        </section>
                        <div className="p-6 md:p-8 rounded-[2rem] bg-surface-container-low space-y-6 md:space-y-8">
                            <div className="flex flex-wrap items-baseline gap-3 md:gap-4">
                                <span className="text-3xl md:text-4xl font-extrabold font-headline text-primary">$4.99</span>
                                <span className="text-on-surface-variant line-through">$6.50</span>
                                <span className="text-sm font-bold text-on-error-container bg-error-container px-2 py-0.5 rounded">23% OFF</span>
                            </div>
                            <div className="space-y-4">
                                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant">Quantity</label>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center bg-surface-container-lowest rounded-full p-1 ring-1 ring-outline-variant/20">
                                        <button className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-low rounded-full transition-colors"><span className="material-symbols-outlined">remove</span></button>
                                        <span className="w-12 text-center font-bold text-lg">2</span>
                                        <button className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-low rounded-full transition-colors"><span className="material-symbols-outlined">add</span></button>
                                    </div>
                                    <span className="text-sm text-on-surface-variant">4 units available</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <button onClick={() => navigate('/cart')} className="bg-primary text-on-primary py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all">
                                    <span className="material-symbols-outlined text-xl">shopping_basket</span> Add to Cart
                                </button>
                                <button onClick={() => navigate('/cart')} className="bg-tertiary-fixed-dim text-on-tertiary-fixed py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <BottomNavBar />
        </div>
    );
};
