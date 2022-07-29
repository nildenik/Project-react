import Botao from '../Botao';
import CampoTexto from '../campoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = () => {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e gestão'
  ]

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('form foi submetido')
  }
  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2> Preencha o formulário</h2>
      <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite nome"/>
      <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o cargo"/>
      <CampoTexto  label="Imagem" placeholder="endereço da imagem"/>
      <ListaSuspensa obrigatorio={true} label='Time' itens={times} />
      <Botao>
        Criar card
      </Botao>
      </form>
    </section>
  )

}

export default Formulario;