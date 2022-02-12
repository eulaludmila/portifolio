
import './styles/global.scss';
import eu from './assets/images/eu.jpg';

function App() {
  return (
    <>

      <header></header>
      <section className='content-infos'>
        <figure>
          <img src={eu} alt="Eula"/>
        </figure>
        <div className='infos-name'>
          <h1>Eula Ludmila</h1>
          <h2>Desenvolvedora Front-End Júnior</h2>
          <p className='infos-idade'>20 anos</p>
          <p className='infos-idade'>Brasileira - Solteira</p>
          <p className='infos-habilidades'>React | HTLM | CSS | JavaScript | PHP | Java | MySql</p>
        </div>
      </section>
      <main>
        <section className='content-about'>
          <h2>Sobre</h2>
          <p className='about-text'>
            Me chamo Eula e tenho 20 anos e ingressei na área de tecnologia a partir do curso Técnico de Informática que conclui em 2019 no SENAI e até então não larguei mais essa área. Atualmente trabalho como Desenvolvedora Fron-End Jr. e estou cursando Análise e Desenvolvimento de Sistemas na Fatec Carapicuíba.
          </p>
        </section>
        {/* <section className='content-about'>
          <h2>Projetos e Participações</h2>
          <p className='about-text'>
            Me chamo Eula e tenho 20 anos e ingressei na área de tecnologia a partir do curso Técnico de Informática que conclui em 2019 no SENAI e até então não larguei mais essa área. Atualmente trabalho como Desenvolvedora Fron-End Jr. e curso Análise e Desenvolvimento de Sistemas na Fatec Carapicuíba.
          </p>
        </section>
        <section className='content-about'>
          <h2>Histórico</h2>
          <div className='grid-historico'>
            <div>
              <h3>Empresa</h3>
              <span>01/2020 | até o presente</span>

              <ul>
                <li>Teste</li>
                <li>Teste</li>
                <li>Teste</li>
              </ul>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}

export default App;
