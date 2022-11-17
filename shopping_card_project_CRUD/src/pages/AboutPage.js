import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero   title='about'/>
    <Wrapper className={'page section section-center'}>
      <img src={aboutImg} alt={'nice desk'}/>

        <div className="title">
          <h2>our story</h2>
          <div className="underline"></div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ab eos excepturi fuga nesciunt omnis quibusdam temporibus! Atque
          commodi cumque dolorum eius error, eum fuga harum impedit incidunt
          ipsa labore quod rem repellat repudiandae similique voluptate voluptatem.
          Adipisci assumenda beatae deserunt dolore ea earum, enim error illum in
          ipsa ipsam minima non obcaecati odit officiis pariatur
          quibusdam repellendus sint temporibus vero.
          Accusantium aut doloremque eius et,
          explicabo impedit in magnam maxime odio perspiciatis quam q
          uibusdam sed suscipit tempore veritatis! Labore, nesciunt.</p>

    </Wrapper>
      </main>

}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
