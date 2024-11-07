import styled from "styled-components";

const Container = styled.div`
.footer {
  background-color: var(--footer);
}

.footer1 {
  background-color: var(--footer1);
  min-height: 50px;
}

.footer > img {
  padding: 1rem 0px 1rem 15rem
}

@media (max-width: 768px) {

  .footer > img {
  padding: 1rem 0px 1rem 5rem
  }

}

@media (max-width: 480px) {
  .footer > img {
  padding: 1rem 0px 1rem 3rem
  }
}

`

export { Container }