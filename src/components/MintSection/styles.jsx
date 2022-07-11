import styled from "styled-components";
import { Link } from "react-router-dom";
import mintImg from "@/images/home/mint.png"
import { ResponsiveTo } from "../../hooks/useResponsive";

export const Container = styled.div`
  padding: 5rem 0 2rem 0;
`


export const Image = styled.img.attrs({
  src: mintImg,
  alt: "Gorillas",
  role: "presentation"
})
  `
  width: 100%;
  height: 249px;
  max-width: 320px;
  display: block;
  margin: 0 auto;
  ${ResponsiveTo('md')}{
    max-width: 768px;
    height: 371px;
  }
  ${ResponsiveTo('lg')}{
    max-width: 1024px;
    height: 495px;
  }
  ${ResponsiveTo('xl')}{
    max-width: 1280px;
    height: 619px;
  }
`

export const Button = styled(Link)
.attrs({ className: "custom-btn" })`
  text-decoration: none;
  display: block;
  max-width: 206px;
  margin: 0 auto;
  ${ResponsiveTo('md')}{
    max-width: 386px;
  }
  ${ResponsiveTo('lg')}{
    max-width: 506px;
  }
  ${ResponsiveTo('xl')}{
    max-width: 658px;
  }
`