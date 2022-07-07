import { Carousel } from './components/carousel'
import { Header } from './components/header'

export default function Home() {
  return (
    <div>
      <Header />

      <section className='banner'>
        <div className='area'>
          <p className='texto'>
            “Invista bem, invista com cuidado, invista STEC”
          </p>
        </div>
      </section>

      <section className='home'>
        <div className='area'>
          <h1 className='title'>
            Notícias relevantes sobre tecnologia e educação
          </h1>
          <div className='cards'>
            <div className='card'>
              <h1 className='title'>
                Ação em shopping no Recife conscientiza e faz coleta de lixos
                elétricos e eletrônicos
              </h1>
              <a className='botão' href='#'>
                {' '}
                saiba mais
              </a>
              <img src='/assets/kid.webp' alt='criança' />
            </div>
            <div className='card'>
              <h1 className='title'>
                Professora da Rede Municipal do Recife recebe troféu do Prêmio
                Educador Nota 10
              </h1>
              <a className='botão' href='#'>
                {' '}
                saiba mais
              </a>
              <img src='/assets/mirtes.webp' alt='mirtes' />
            </div>
            <div className='card'>
              <h1 className='title'>
                EducaRecife: programa de ensino remoto completa seu primeiro ano
                oferecendo suporte e aprendizagem para os estudantes da Rede
                Municipal
              </h1>
              <a className='botão' href='#'>
                {' '}
                saiba mais
              </a>
              <img src='/assets/lixo-eletronico.webp' alt='lixo eletronico' />
            </div>
          </div>
          <footer>
            <button className='button'>Veja mais</button>
          </footer>
        </div>
      </section>

      <section className='base-section pilar-information' id='sobre'>
        <h1 className='title emphasis'>
          "Comunidade do Pilar, em Recife (PE), luta por reconhecimento desde a
          sua fundação"
        </h1>
        <div className='container'>
          <div className='text'>
            <p>
              “Após a restauração das invasões holandesas no Recife, entre as
              ruínas do Forte de São João Batista do Brum e da Igreja de Nossa
              Senhora do Pilar, a menos de um quilômetro do Marco Zero, uma
              comunidade com pessoas que trabalhavam no Porto foi se formando.
            </p>
            <p>
              O lugar por muito tempo era chamado de C, já que até 1630, o
              Recife oficialmente terminava no início da Rua do Bom Jesus. Mesmo
              com o conflito, a comunidade permaneceu na região, mas com o nome
              de Pilar, em referência a santa padroeira da igreja.” -
              brasildefatospe
            </p>
          </div>

          <div className='img-box'></div>
        </div>
      </section>

      <section className='team-members base-section'>
        <h1 className='title'>Integrantes do Projeto</h1>

        <div className='carousel' id='carousel'>
          <Carousel />
        </div>
      </section>

      <section className='doacoes' id='doações'>
        <div className='area'>
          <h1 className='texto1'>Doação</h1>
          <p className='texto2'>
            Ajude a causa, doando para transformar a educação e a realidade da
            Comunidade do Pilar
          </p>
          <div className='opcoes'>
            <div className='opcao'>
              <h1>Doe Alimentos</h1>
              <img src='/assets/comida-saudavel.svg' alt='comida saudavel' />
              <a className='bnt-transparente' href='#'>
                {' '}
                saiba o porquê
              </a>
              <a className='bnt-branco' href='#'>
                {' '}
                Doe aqui
              </a>
            </div>
            <div className='opcao'>
              <h1>Doe Eletrônicos</h1>
              <img src='/assets/Eletro-P.svg' alt='dispositivos eletronicos' />
              <a className='bnt-transparente' href='#'>
                {' '}
                saiba o porquê{' '}
              </a>
              <a className='bnt-branco' href='#'>
                Doe aqui
              </a>
            </div>
            <div className='opcao'>
              <h1>Doe dinheiro</h1>
              <img src='/assets/Money-P.svg' alt='saco de dinheiro' />
              <a className='bnt-transparente' href='#'>
                {' '}
                saiba o porquê
              </a>
              <a className='bnt-branco' href='#'>
                {' '}
                Doe aqui
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='donation'>
        <h1 className='title'>Doação de Alimentos</h1>
        <div className='container'>
          <div className='text'>
            <h2>Porquê doar alimento ?</h2>
            <p>
              Ao contribuir com alimentos você nos ajuda com a necessidade
              básica dos estudantes, ajudando eles a se concentrarem em seus
              estudos
            </p>
            <p>
              Contribuindo para uma alimentação mais equilibrada. De acordo com
              o Lumaensino “ doenças, que podem ser causadas pela má
              alimentação, têm consequências secundárias e impactam de forma
              direta no desempenho escolar e aprendizagem.”
            </p>
          </div>
          <div className='img-box'>
            <img src='/assets/comida-saudavel-b.svg' alt='comida saudável' />
            <button className='button'>doe aqui</button>
          </div>
        </div>
      </section>

      <section className='donation'>
        <h1 className='title'>Doação de Eletrônicos</h1>
        <div className='container'>
          <div className='text'>
            <h2>Porquê doar Eletrônicos ?</h2>

            <p>
              Os eletrônicos doados serão usados para aprendizagem, com eles os
              participantes terão todos as devidas orientações de como
              conserta-lós.
            </p>
            <p>
              Após a devida orientação, todos os aparelhos doados e consertados
              serão repostos a venda nesses mesmo site.
            </p>
          </div>
          <div className='img-box'>
            <img
              src='/assets/eletronicos-b.svg'
              alt='dispositivos eletrônicos'
            />
            <button className='button'>doe aqui</button>
          </div>
        </div>
      </section>

      <section className='donation'>
        <h1 className='title'>Doação de Dinheiro</h1>
        <div className='container'>
          <div className='text'>
            <h2>Porquê doar Dinheiro ?</h2>
            <p>
              Através da doação de dinheiro, podemos comprar melhores
              equipamentos, além ajudar no pagamento da bolsa permanencia dos
              estudantes do curso.
            </p>
            <p>
              Com todas as necessidades dos alunos participantes, o dinheiro
              arrecadado será usado somente em prol do curso, tentando da melhor
              forma suprir preocupações e necessidades.
            </p>
          </div>

          <div className='img-box'>
            <img src='/assets/money-b.svg' alt='saco de dinheiro' />
            <button className='button'>doe aqui</button>
          </div>
        </div>
      </section>

      <section className='join-section base-section' id='participe'>
        <h1 className='title'>Faça parte do projeto</h1>
        <p>
          Você pode ajudar o projeto de diversas maneiras, nos acompanhe pelo
          insta <span className='emphasis'>@siennotec</span> e confira nossas
          novidades, se inscreva no nosso site e saiba tudo que estamos fazendo
          pelo recebendo um <span className='emphasis'>email</span>.
        </p>
        <div className='content'>
          <div>
            <h1 className='title'>Por que apoiar e participar?</h1>
            <p>
              Nosso projeto busca levar uma chance para os jovens da comunidade
              do pilar, levando o conhecimento para integrar eles ao mercado de
              trabalho e contribuir no crescimento educacional. Nosso pojeto
              está inteiramente ligado as ODS 1 e 4 da ONU.
            </p>
          </div>
          <div className='ods'>
            <img src='/assets/educacao-ods.webp' alt='educação ods' />

            <img src='/assets/pobreza-ods.jpg' alt='pobreza ods' />

            <a className='button' href='https://brasil.un.org/pt-br/sdgs'>
              saiba sobre as ods e onu aqui
            </a>
          </div>
        </div>
      </section>

      <section className='participants base-section'>
        <h1 className='title'>Saiba quem já faz parte!!</h1>

        <div className='container'>
          <div className='grid'>
            <div className='item'>
              <div className='example'></div>
              <div className='example'></div>
            </div>
            <div className='item'>
              <div className='example'></div>
              <div className='example'></div>
            </div>
            <div className='item'>
              <div className='example'></div>
              <div className='example'></div>
            </div>
            <div className='item'>
              <div className='example'></div>
              <div className='example'></div>
            </div>
            <div className='item'>
              <div className='example'></div>
              <div className='example'></div>
            </div>
            <div className='item'>
              <div className='example'></div>
              <div className='example'></div>
            </div>
          </div>
        </div>
      </section>

      <section className='contact base-section'>
        <div className='box'>
          <div className='logo'>
            <img src='/assets/logo.svg' alt='sienno tecnologia' />
            <div>
              <h1>STEC</h1>
              <h2>sienno tec</h2>
            </div>
          </div>
          <div className='button-wrapper'>
            <button className='button purple'>entrar</button>
            <button className='button'>cadastre-se</button>
          </div>
          <footer>
            <span>Deseja falar conosco diretamente?</span>
            <a href='#'>clique aqui</a>
          </footer>
        </div>
      </section>
    </div>
  )
}
