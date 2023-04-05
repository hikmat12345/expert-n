import Image from "next/image";
import styled from "styled-components";

const ImageWrap = styled.span`
  margin: 0px auto;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
  }
`;

const Img = ({
  alt = "image",
  src,
  width = "100%",
  height,
  inlineCss,
}: {
  alt?: string;
  src: string;
  width?: string;
  height?: string;
  inlineCss: any;
}) => {
  return (
    <ImageWrap>
      <img alt={alt} src={src} style={inlineCss} />
    </ImageWrap>
  );
};

export default Img;
