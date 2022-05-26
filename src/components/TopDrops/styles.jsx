import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'
export const Container = styled.div`
  margin-top: 64px;
  h3{
    margin-bottom: 16px;
  }
  ${ResponsiveTo('md')}{
    h3{
      margin-bottom: 37px;
    }
  }
  ${ResponsiveTo('lg')}{
    h3{
      margin-bottom: 40px;
    }
  }
  ${ResponsiveTo('xl')}{
    h3{
      margin-bottom: 47px;
    }
  }

`
export const Section = styled.section`  
  display: grid; 
  grid-template-columns: 1fr 6fr 1fr;
  width: 90%;
  max-width: 283px;
  margin: 0 auto;
  ${ResponsiveTo('md')}{
    grid-template-columns: 0.25fr 6fr 0.25fr;
    max-width: 610px;
  }
  ${ResponsiveTo('lg')}{
    max-width: 896px;
  }
  ${ResponsiveTo('xl')}{
    max-width: 1000px;
  }
`
export const CardsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  margin-top: 16px;
  width: 241px;
  overflow: hidden;
  ${ResponsiveTo('md')}{
    width: 100%;
    justify-content: center;
    gap: 30px;
  }
  ${ResponsiveTo('lg')}{
    gap: 36px;
  }
  ${ResponsiveTo('xl')}{
    gap: 48px;
  }
`
export const RowButton = styled.button`
  color: rgba(199, 199, 199, 0.87);
  font-size: 30px;
  font-stretch: expanded;
`
export const Article = styled.article`
  width: 116.18px;
  min-width: 116.18px;
  height: 179px;
  background: #545454;
  border-radius: 10px;
  img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
  ${ResponsiveTo('md')}{
    width: 166.03px;
    height: 255.81px;
    border-radius: 20px;
    img{
      border-radius: 20px;
    }
  }
  ${ResponsiveTo('lg')}{
    width: 239.24px;
    height: 368.61px;
  }
  ${ResponsiveTo('xl')}{
    width: 270px;
    height: 416px;
  }
`
