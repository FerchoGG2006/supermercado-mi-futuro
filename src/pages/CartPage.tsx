import { TopAppBar } from '../components/layout/TopAppBar';
import { BottomNavBar } from '../components/layout/BottomNavBar';
import { Footer } from '../components/layout/Footer';

export const CartPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <TopAppBar />
            <main className="pt-24 pb-32 px-6 lg:px-12 w-full max-w-[1600px] mx-auto flex-grow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8 space-y-8">
                        <section className="bg-surface-container-low rounded-xl p-8">
                            <div className="flex justify-between items-baseline mb-8">
                                <h1 className="text-3xl font-extrabold tracking-tight">Tu Carrito</h1>
                                <span className="text-on-surface-variant font-medium">2 Artículos</span>
                            </div>
                            <div className="space-y-6">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-surface-container-lowest p-4 rounded-xl shadow-sm">
                                    <img alt="Veg" className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8mjApCNbDg65msfHKAhPJZuHsojp_b6ANdjb3AUto9Bf4fxkhzxnuRRfvg1NC4382_rpGY46cx3sJetaiS5sneVYDeBIQFHt2Fz_3j7WOMMIGpJR4b6KB8dKAQTRK3hYUwohGtbLg1NTJX8oqrxwS4Cmyn9sEjhEdP4L08JF95TSKh_Va3YboJE6T5MdHnmVlGMpwEmZ7ZgoRrm6s6JGOdVYinLM7OD9Mu9f7r0sz_BmDwcQWK1j9GZ-nX6dBJE-7mGM0I7BFgl14"/>
                                    <div className="flex-grow w-full">
                                        <h3 className="font-bold text-lg">Espárragos Orgánicos</h3>
                                        <p className="text-on-surface-variant text-sm mb-4">Manojo de 500g</p>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center bg-surface-container-high rounded-full px-3 py-1">
                                                <button className="material-symbols-outlined text-sm p-1 hover:text-primary">remove</button>
                                                <span className="px-4 font-bold">2</span>
                                                <button className="material-symbols-outlined text-sm p-1 hover:text-primary">add</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right w-full sm:w-auto mt-4 sm:mt-0">
                                        <p className="font-bold text-xl">$8.50</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="bg-surface-container-low rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-primary">local_shipping</span>
                                <h2 className="text-2xl font-bold">Horario de Entrega</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <label className="relative flex flex-col p-4 bg-surface-container-lowest rounded-xl border-2 border-primary cursor-pointer">
                                    <input defaultChecked className="hidden" name="delivery" type="radio"/>
                                    <span className="font-bold text-sm">Hoy</span>
                                    <span className="text-lg font-bold text-primary mt-1">18:00 - 20:00</span>
                                </label>
                                <label className="relative flex flex-col p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/20 hover:border-primary/50 cursor-pointer">
                                    <input className="hidden" name="delivery" type="radio"/>
                                    <span className="font-bold text-sm">Mañana</span>
                                    <span className="text-lg font-bold mt-1">09:00 - 11:00</span>
                                </label>
                            </div>
                        </section>
                        <section className="bg-surface-container-low rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-primary">payments</span>
                                <h2 className="text-2xl font-bold">Método de Pago</h2>
                            </div>
                            <div className="space-y-6">
                                <input className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary" placeholder="Nombre en la tarjeta" type="text"/>
                                <input className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary" placeholder="**** **** **** 4421" type="text"/>
                            </div>
                        </section>
                    </div>
                    <aside className="lg:col-span-4 sticky top-28">
                        <div className="bg-surface-container-highest rounded-3xl p-8 shadow-sm">
                            <h2 className="text-xl font-bold mb-6">Resumen del Pedido</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-on-surface-variant"><span>Subtotal</span><span className="font-semibold text-on-surface">$27.40</span></div>
                                <div className="flex justify-between text-on-surface-variant"><span>Gastos de envío</span><span className="font-semibold text-on-surface">$4.50</span></div>
                                <div className="pt-4 mt-4 border-t border-outline-variant/20 flex justify-between items-baseline">
                                    <span className="text-lg font-bold">Total</span>
                                    <span className="text-3xl font-extrabold text-primary">$34.00</span>
                                </div>
                            </div>
                            <button className="w-full bg-primary text-on-primary py-5 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                                Finalizar Compra <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </aside>
                </div>
            </main>
            <Footer />
            <BottomNavBar />
        </div>
    );
};
