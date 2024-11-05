export default function Footer() {
    return (
        <footer className="flex px-5 mb-16">
            <div className="flex flex-col justify-center">
                <h3 className="font-editorialNew text-[2rem] italic text-primary mb-3.5 leading-8">Marta López de la Nieta</h3>
                <p className="text-[0.5rem]">Este portfolio se presenta con fines educativos y no comerciales. Todos los derechos pertenecen a sus respectivos autores.</p>
            </div>
            <div className="flex flex-col items-end justify-start pb-3">
                <a href="mailto:marta.00.design@gmail.com" className="text-[1.75rem] uppercase font-blurweb leading-8">Hit Me Up!</a>
                <a href="mailto:marta.00.design@gmail.com" className="text-xs font-blurweb">marta.00.design@gmail.com</a>
            </div>
        </footer>
    )
}