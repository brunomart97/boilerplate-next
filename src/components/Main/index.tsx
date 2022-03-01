import * as SC from './styles'

const Main = () => {
  return (
    <SC.Wrapper>
      <SC.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e Ract Avançado escrito ao lado"
      />
      <SC.Title>Advanced Next</SC.Title>
      <SC.Description>
        A simple project starter to work with TypeScript, NextJS, ReactJS and
        Styled Components
      </SC.Description>
    </SC.Wrapper>
  )
}

export default Main
