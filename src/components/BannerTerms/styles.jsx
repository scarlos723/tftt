import styled from 'styled-components';
import bannerImg from '@/images/terms/banner.png';
import { ResponsiveTo } from '@/hooks/useResponsive'

export const BannerTermsContainer = styled.div`
  height: 355px;
  background-image: url(${bannerImg});
  background-size: cover;
  background-position: right center;
  ${ResponsiveTo('md')} {
    height: 560px;
  }
  ${ResponsiveTo('xl')} {
    height: 922px;
  }
`
