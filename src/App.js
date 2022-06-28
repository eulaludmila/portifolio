
import './styles/global.scss';
import eu from './assets/images/eu.jpg';

function App() {
  return (
    <>

      <header></header>
      <section className='content-infos'>
        <figure>
          <img src={eu} alt="Eula" />
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
        <section className='content-about'>
          <h2>Histórico</h2>
          <div className='grid-historico'>
            <div>
              <h3>Corebiz</h3>
              <span>01/2021 | até o presente</span>

              <ul>
                <li>Acompanhamento de projeto desde o início de sua concepção juntamente com o cliente</li>
                <li>Manutenção de layouts nos sistemas utilizando HTML e CSS</li>
                <li>Contribuição no desenvolvimento de websites na parte de e-commerce
utilizando VTEX e ReactJS;</li>
              </ul>
            </div>
            <div>
              <h3>Alphacode It Solutions</h3>
              <span>Programadora Web Júnior - </span>
              <span>06/2020 | 12/2020</span>

              <ul>
                <li>Responsável pela implementação do layout em aplicativos, utilizando
                  pré-processador SASS e a tecnologia Ionic;</li>
                <li>Contribuição no desenvolvimento de websites responsivos utilizando
                  PHP, HTML e CSS, utilizando o conceito mobile first com foco em
                  velocidade e SEO</li>
              </ul>
            </div>
            <div>
              <h3>Alphacode It Solutions</h3>
              <span>Estagiária de desenvolvimento - </span>
              <span>01/2020 | 06/2020</span>

              <ul>
                <li>Modelagem de banco de dados utilizando MYSQL e manutenção de 
sistemas administrativos utilizando a linguagem PHP</li>
                <li>Desenvolvimento de layouts para aplicativos Ionic, utilizando pré-processador SAS</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <section className='content-projects'>
        <h2>Projetos</h2>
      </section>
    </>
  );
}

export default App;
