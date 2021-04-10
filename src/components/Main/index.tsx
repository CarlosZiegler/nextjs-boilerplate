import React from 'react'
import * as S from './styles'

function Main() {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um atomo e React Avancado escrito ao lado"
      />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        Typescript, ReactJs, NextJs e Styled Componets
      </S.Description>
      <S.Illustration src="/img/hero-illustration.svg" />
    </S.Wrapper>
  )
}

export default Main
