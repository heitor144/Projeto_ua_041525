import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Back-End',
      cor: '#074173'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#BED7DC'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#5F0F40'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#E8C872'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#ECB159'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      nome: 'Paulo Jorge',
      cargo: 'Desenvolvedor Back-End',
      imagem: 'https://randomuser.me/api/portraits/men/30.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Ricardo Andre',
      cargo: 'Desenvolvedor Back-End',
      imagem: 'https://randomuser.me/api/portraits/men/49.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Renata Melo',
      cargo: 'Desenvolvedora Front-End',
      imagem: 'https://randomuser.me/api/portraits/women/43.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Aline Moura',
      cargo: 'Desenvolvedora Front-End',
      imagem: 'https://randomuser.me/api/portraits/women/89.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Maicon Junior',
      cargo: 'Analista de Dados',
      imagem: 'https://randomuser.me/api/portraits/men/39.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Alice Clark',
      cargo: 'Analista de Dados',
      imagem: 'https://randomuser.me/api/portraits/women/20.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Marcos Paulo',
      cargo: 'Analista Devops',
      imagem: 'https://randomuser.me/api/portraits/men/21.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'Erica Mariano',
      cargo: 'Analista Devops',
      imagem: 'https://randomuser.me/api/portraits/women/62.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'Mauro Silva',
      cargo: 'Analista UX Researcher',
      imagem: 'https://randomuser.me/api/portraits/men/15.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Luiza Barcelos',
      cargo: 'Analista UX Developer',
      imagem: 'https://randomuser.me/api/portraits/women/9.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Alicia Oliveira',
      cargo: 'Desenvolvedora Mobile',
      imagem: 'https://randomuser.me/api/portraits/women/13.jpg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'Jane Costa',
      cargo: 'Desenvolvedora Mobile',
      imagem: 'https://randomuser.me/api/portraits/women/19.jpg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'Augusto Hélio',
      cargo: 'Coordenador de Processos',
      imagem: 'https://randomuser.me/api/portraits/men/13.jpg',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      nome: 'Mariana Souto',
      cargo: 'Coordenadora de Inovação',
      imagem: 'https://randomuser.me/api/portraits/women/0.jpg',
      time: times[6].nome
    }

  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }

  return (
    <div>
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)}
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])}
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) =>
          <Time
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorDoTime}
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
          />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
