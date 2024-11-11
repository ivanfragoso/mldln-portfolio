interface FooterProps {
    onNameClick: () => void
}

export default function Footer({ onNameClick }: FooterProps) {
    return (
        <footer className="flex px-5 mb-6 justify-between">
            <div className="flex flex-col justify-center cursor-pointer" onClick={onNameClick}>
                <h3 className="font-editorialNew text-[2rem] italic text-primary mb-3.5 leading-8">Marta López de la Nieta</h3>
                <p className="text-[0.5rem]">
                    Este portfolio se presenta con fines educativos y no comerciales. Todos los derechos pertenecen <br></br>
                    a sus respectivos autores.
                </p>
            </div>
            <div className="flex flex-col items-end justify-start pb-3">
                <a href="mailto:marta.00.design@gmail.com" className="text-[1.75rem] uppercase font-blurweb leading-8">Hit Me Up!</a>
                <a href="mailto:marta.00.design@gmail.com" className="text-xs font-blurweb">marta.00.design@gmail.com</a>
            </div>
        </footer>
    )
}