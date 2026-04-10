export const Footer = () => (
    <footer className="bg-surface-container-low mt-12 py-12 border-t border-outline-variant/10">
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                    <img src="/logo.jpg" alt="Mi Futuro Logo" className="h-10 object-contain rounded" />
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                    Elevando los estándares del supermercado tradicional hacia una experiencia de bienestar y calidad absoluta.
                </p>
            </div>
            <div>
                <h4 className="font-headline font-bold mb-6 text-on-surface">Compañía</h4>
                <ul className="space-y-3 text-sm text-on-surface-variant">
                    <li><a className="hover:text-primary transition-colors" href="#">Sobre Nosotros</a></li>
                    <li><a className="hover:text-primary transition-colors" href="#">Sustentabilidad</a></li>
                    <li><a className="hover:text-primary transition-colors" href="#">Bolsa de Trabajo</a></li>
                    <li><a className="hover:text-primary transition-colors" href="#">Prensa</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-headline font-bold mb-6 text-on-surface">Servicio al Cliente</h4>
                <ul className="space-y-3 text-sm text-on-surface-variant">
                    <li><a className="hover:text-primary transition-colors" href="#">Facturación</a></li>
                    <li><a className="hover:text-primary transition-colors" href="#">Preguntas Frecuentes</a></li>
                    <li><a className="hover:text-primary transition-colors" href="#">Contacto</a></li>
                    <li><a className="hover:text-primary transition-colors" href="#">Garantía de Frescura</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-headline font-bold mb-6 text-on-surface">Boletín</h4>
                <p className="text-sm text-on-surface-variant mb-4">Recibe nuestras ofertas exclusivas.</p>
                <div className="flex gap-2">
                    <input className="bg-surface-container-highest border-none rounded-xl text-sm px-4 flex-1" placeholder="Email" type="email"/>
                    <button className="bg-primary text-white p-2 rounded-xl">
                        <span className="material-symbols-outlined">send</span>
                    </button>
                </div>
            </div>
        </div>
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-outline-variant/10 text-center text-xs text-outline font-medium tracking-wide">
            © 2024 Mi Futuro Supermercados S.A. de C.V. Todos los derechos reservados.
        </div>
    </footer>
);
