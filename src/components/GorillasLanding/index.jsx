import {
  BannerContainer,
  SectionText,
  GridSection,
  FootBanner,
  AboutSection,
  Title
} from './styles'
import useSigns from '../../hooks/useSigns'
import signTitle from '../../assets/icons/symbolGorillasLanding.svg'
export default function GorillasLanding ({ dataInfo }) {
  const signs = useSigns()
  return (
    <div>
      <BannerContainer
        bgImg ={dataInfo.images.banner}
        gorilla={dataInfo.images.gorilla}
        color={dataInfo.halloColor}
      >
        <div>
          <article />
          <div
            className={(dataInfo.nameGorilla === 'Green' || dataInfo.nameGorilla === 'Dj Grill') ? 'gorilla-img bg-pos-x-50' : 'gorilla-img'} />
        </div>
      </BannerContainer>

      <SectionText>
        <Title>
          <h2>Meet  &nbsp;
            <span className={dataInfo.isGeneral ? 'style-border-gold' : 'style-border-white'}>
              {dataInfo.nameGorilla}
            </span> {!dataInfo.isGeneral && <img src={signTitle} alt="sign dollar" /> }
          </h2>
          {
            dataInfo.isGeneral &&
            <p>
              {dataInfo.description}
            </p>
          }
        </Title>
      </SectionText>
      {
        !dataInfo.isGeneral &&
        <AboutSection>
          <h3><span>{dataInfo.subtitle}</span>  </h3>
          <div>
            <h5>
              About {dataInfo.nameGorilla}$
            </h5>
            <p>
              {dataInfo.about}
            </p>
          </div>
          <div className='grid'>
            <div>
              <h5>Positive characteristics </h5>
              <ul>
                {
                  dataInfo.posChars.map((item, index) => {
                    return (
                      <li key={index}>
                        {item}
                      </li>
                    )
                  })
                }
              </ul>

            </div>
            <div>
              <h5>Negative Characteristics:</h5>
              <ul>
                {
                  dataInfo.negChars.map((item, index) => {
                    return (
                      <li key={index}>
                        {item}
                      </li>
                    )
                  })
                }
              </ul>
            </div>

          </div>
          <div>
            <h5>Related Star Signs</h5>

            <div className='signs-box'>
              {
                dataInfo.relSigns.map((nameSign, index) => {
                  return (
                    <article key={index}>
                      <img src={signs[nameSign].icon}/>
                      <p>{signs[nameSign].name}</p>
                    </article>
                  )
                })
              }
            </div>
          </div>

        </AboutSection>
      }
      <GridSection isGeneral={dataInfo.isGeneral}>
        <div className='grid'>

          <div className='text-box'>
            <h2>
              <span>{dataInfo.gridText.redText} </span>
              <em>{dataInfo.gridText.whiteText} </em>
              <em>{dataInfo.gridText.whiteText1} </em>
              <span>{dataInfo.gridText.middleRedText} </span>
              <em>{dataInfo.gridText.whiteText2} </em>
            </h2>
            <p>
              {dataInfo.gridText.parragraph}
            </p>
          </div>
          <article className='available-card'>
            <h2>
              {dataInfo.isGeneral ? 'Only' : ''}
              {dataInfo.isGeneral && <br />}
              {dataInfo.gridText.quantity}
            </h2>
            <h3><span>Available</span></h3>
          </article>

        </div>
      </GridSection>
      <FootBanner bgImg = {dataInfo.images.footer}/>
    </div>

  )
}
