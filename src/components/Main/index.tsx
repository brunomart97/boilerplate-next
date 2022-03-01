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
        A advanced project starter to work with Next
      </SC.Description>
      <SC.LinkContainer>
        <SC.Link href="https://nextjs.org/" target="_blank">
          <SC.LinkBox>Next JS</SC.LinkBox>
        </SC.Link>
        <SC.Link href="https://reactjs.org/" target="_blank">
          <SC.LinkBox>React JS</SC.LinkBox>
        </SC.Link>
        <SC.Link href="https://www.typescriptlang.org/" target="_blank">
          <SC.LinkBox>TypeScript</SC.LinkBox>
        </SC.Link>
        <SC.Link href="https://jestjs.io/pt-BR/" target="_blank">
          <SC.LinkBox>Jest</SC.LinkBox>
        </SC.Link>
        <SC.Link
          href="https://testing-library.com/docs/react-testing-library/intro/"
          target="_blank"
        >
          <SC.LinkBox>React Testing Library</SC.LinkBox>
        </SC.Link>
        <SC.Link href="https://eslint.org/" target="_blank">
          <SC.LinkBox>ESLint</SC.LinkBox>
        </SC.Link>
        <SC.Link href="https://prettier.io/" target="_blank">
          <SC.LinkBox>Prettier</SC.LinkBox>
        </SC.Link>
        <SC.Link href="https://github.com/typicode/husky" target="_blank">
          <SC.LinkBox>Husky</SC.LinkBox>
        </SC.Link>
        <SC.Link href="https://editorconfig.org/" target="_blank">
          <SC.LinkBox>EditorConfig</SC.LinkBox>
        </SC.Link>
        <SC.Link href="https://styled-components.com/" target="_blank">
          <SC.LinkBox>Styled Components</SC.LinkBox>
        </SC.Link>
      </SC.LinkContainer>
    </SC.Wrapper>
  )
}

export default Main
