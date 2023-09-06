import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center place-content-center gap-8 p-24">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-5xl">
        <div className="text-center lg:text-left ml-8">
          <h1 className="text-5xl font-bold mb-4">
            Olá, bem vindo a <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ">
              Tech Social
            </span>
          </h1>
          <ul className="flex flex-col list-disc pl-8 gap-4">
            <li>
              INOVAÇÕES TECNOLÓGICAS - desenvolvemos soluções em software,
              aplicativos, integrações e FUVs(Fontes Únicas de Verdade), RPAs
              (Robotic Process Automation), recuperação de dados em fontes
              públicas;
            </li>

            <li>
              CONSULTORIA EM SUSTENTABILIDADE E ESG - estruturamos sistemas de
              gestão baseados, ou não, em padrões normativos certificáveis;
              modelos e estrutura de gestão por indicadores; relatórios de
              sustentabilidade; desenvolvimento e avaliações de aderência a
              critérios ESG - Environmental, Social and Corporate Governance.
            </li>

            <li>
              SERVIÇOS EM GESTÃO - nos relacionamentos com cadeias de valor,
              cadastro e homologação de fornecedores, monitoramos requisitos e
              documentos legais de empresas e pessoas e tratamos expectativas de
              partes interessadas.
            </li>
          </ul>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                value={'demouser'}
                placeholder="email"
                className="input "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Senha</span>
              </label>
              <input
                type="text"
                value={'demopass'}
                placeholder="password"
                className="input "
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Esqueceu sua senha?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <Link href={'/dashboard'}>
                <button className="btn btn-primary">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
