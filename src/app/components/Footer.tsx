export default function Footer() {
    return (
        <footer className="w-full h-[242px] flex flex-col items-start justify-center bg-background sticky bottom-0 z-30">
            <div className="flex flex-col justify-center flex-grow">
                <h3 className="text-5xl italic text-primary text-[64px] ml-[22px]">Marta López de la Nieta</h3>
                <h3 className="text-5xl uppercase text-[64px] -mt-10 font-blurweb">Hit Me Up!</h3>
            </div>
            <div className="flex items-center justify-between w-full mt-auto pb-3">
                <p className="text-xs">Este portfolio se presenta con fines educativos y no comerciales. Todos los derechos de autor pertenecen a sus respectivos autores.</p>
                <a href="mailto:iH2Dg@example.com" className="text-2xl italic">marta.00.design@gmail.com</a>
            </div>
        </footer>
    )
}