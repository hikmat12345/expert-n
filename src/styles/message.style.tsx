import styled from "styled-components";
export const Message = styled.div<{ type?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: ${({ type }) => (type == true ? "green" : "red")};
  padding: 8px;
  text-align: center;
  padding: 8px;
  animation: message 5s infinit;

  display: block;
  animation: show 0.01s forwards, pop-word 1.5s forwards;
  animation-timing-function: cubic-bezier(0.14, 1.23, 0.33, 1.16);
  opacity: 0;
  transform: rotateX(120deg);
  transform-origin: 50% 100%;

  @keyframes pop-word {
    to {
      transform: rotateX(0);
    }
  }

  @keyframes show {
    to {
      opacity: 1;
    }
  }

  @keyframes bar-scale {
    to {
      transform: scaleY(1);
    }
  }

  @keyframes sparkle {
    0% {
      transform: scale(0);
    }

    60% {
      transform: scale(1) translate(4px, 1px) rotate(8deg);
    }

    100% {
      transform: scale(0) translate(4px, 1px) rotate(8deg);
    }
  }

  @keyframes shimmer {
    to {
      text-shadow: 0 0 8px red;
    }
  }

  .word:nth-of-type(2) {
    padding: 0 2rem;
    animation-delay: 1.5s;
    color: gold;
  }

  .superscript {
    position: relative;
    animation-delay: 3.6s;
    animation-duration: 0.25s;
    animation-name: shimmer;
    vertical-align: text-top;
  }

  .superscript::before {
    --bar-width: 25%;
    position: absolute;
    top: 37%;
    left: 47%;
    width: 14%;
    height: 48%;
    animation: bar-scale 0.25s linear 3s 1 forwards;
    background: linear-gradient(
      to right,
      white var(--bar-width),
      transparent var(--bar-width) calc(100% - var(--bar-width)),
      white calc(100% - var(--bar-width))
    );
    content: "";
    transform: scaleY(var(--bar-scale-y));
  }

  .superscript::after {
    --size: 10rem;

    position: absolute;

    top: -5%;
    left: -85%;
    width: var(--size);
    height: var(--size);
    animation: sparkle 0.4s linear 3.5s 1 forwards;
    border-radius: 50%;
    clip-path: polygon(
      50% 0,
      59.13% 26.64%,
      85.13% -2.35%,
      100% 50%,
      50% 100%,
      0 50%,
      31.39% 34.86%
    );
    content: "";
    filter: blur(1px);
    transform: scale(0);
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;

    ::after {
      --size: 6rem;
    }
  }
`;
