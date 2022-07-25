import CampoTexto from '../Banner/campoTexto';
import './Formulario.css'


const Formulario = () => {
  return (
    <section className='formulario'>
      <form>
        <h2> Preencha o formulário</h2>
      <CampoTexto label="Nome" placeholder="Digite nome"/>
      <CampoTexto label="Cargo" placeholder="Digite o cargo"/>
      <CampoTexto label="Imagem" placeholder="endereço da imagem"/>
      </form>
    </section>
  )

}

export default Formulario;