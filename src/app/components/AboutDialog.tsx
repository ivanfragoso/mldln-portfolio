
interface AboutDialogProps {
  showAbout: boolean
  onClickOutside: () => void
}

export default function AboutDialog({ showAbout, onClickOutside }: AboutDialogProps) {
  return (
    <>
      {showAbout && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-30 transition-opacity duration-500" onClick={onClickOutside}></div>
      )}

      <div className={`absolute ${showAbout ? "bounce-up" : "bounce-down"} z-40 left-0 right-0 mx-auto inset-0 w-[866px] bg-background h-[380px] p-11`}>
        <h3 className="uppercase text-primary text-[64px] font-blurweb leading-[3rem] mb-5">Hi!</h3>
        <p className="mb-4">
          Soy <span className="text-primary">Marta López de la Nieta</span>, diseñadora gráfica establecida en Barcelona!
        </p>
        <p className="mb-4">
          A lo largo de mi formación como diseñadora he tenido la oportunidad de experimentar con varias <br />
          disciplinas dentro del mundo del diseño gráfico, con proyectos que iban desde la <span className="text-primary">identidad de marca, <br />
          como la fabricación digital realizando maquetas o proyectos audiovisuales.</span>
        </p>
        <p className="mb-3.5">
          Al venir del mundo de la publicidad, lo que más me apasiona es <span className="text-primary">el branding, packaging y la identidad <br />
          de marca</span>, y al haber realizado proyectos desde varios enfoques, tengo la facilidad de adaptarme al <br />
          proyecto buscando la manera más creativa de comunicar un mensaje.
        </p>
        <a href="mailto:marta.00.design@gmail.com" className="text-xs font-blurweb float-right">marta.00.design@gmail.com</a>
      </div>
    </>
  )
}