import React, { useState, useEffect } from 'react';
import {
  Text,
  CustomModal
} from '../../components/index'
import {
  Images,
  Colors,
  Fonts,
  FontStyles
} from '../../constant/index'
import {
  Container,
  DetailCard,
  ContentCardDetail,
  RowContainer,
  BtnCatch,
  ModalInfo
} from './style';
import { convert } from '../../helpers/index';

const Detail = props => {
  const [isFailed, setIsFailed] = useState(false)
  const [topNav, setTopNav] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [dataMain, setDataMain] = useState([])

  const Row = (props) => {
    const {text, desc} = props
    return (
      <RowContainer>
        <Text
          styling={
            FontStyles.boldM
          }
          text={text}
          color={ Colors.black.default }
        />
        <Text
          styling={
            FontStyles.mediumM
          }
          text={`: ${desc}`}
          color={ Colors.black.default }
        />
      </RowContainer>
    )
  }

  useEffect(() => {
    let data = []
    if(topNav === 0) {
      data = [1,2,3,4,5,6,7]
    } else if(topNav === 1) {
      data = [1,2,3]
    } else {
      data =[1,2]
    }
    setDataMain(data)
  }, [topNav])

  const topNavData = [
    {
      text: 'Info'
    },
    {
      text: 'Skill'
    }
  ]

  return (
    <Container>
      <div className="content-wrapper">
        <DetailCard>
          <div className="wrapper-image">
            <img src={Images.pokemonLogo} alt="" />
            <img src={Images.pokemonLogo} alt="" />
          </div>
          <ContentCardDetail>
            <div className="top-nav">
              {
                topNavData.map((el, i) => {
                  return (
                    <Text
                      key={i}
                      styling={
                        topNav === i
                        ?
                        FontStyles.boldL
                        :
                        FontStyles.mediumL
                      }
                      text={el.text}
                      color={ Colors.black.default }
                      className={`key ${topNav === i ? 'active' : ''}`}
                      onClick={() => setTopNav(i)}
                    />
                  )
                })
              }
            </div>
            <div className="info-detail">
              <Text
                styling={
                  FontStyles.heading1
                }
                text={'IVYSAUR'}
                color={ Colors.black.default }
              />
              <div className="text">
                {
                  dataMain && dataMain.map((el, i) => {
                    return (
                      <Row
                        text='IVYSAUR'
                        desc='80'
                      />
                    )
                  })
                }
              </div>
            </div>
          </ContentCardDetail>
          <BtnCatch
            onClick={() => setOpenModal(true)}
          >
            <Text
              styling={
                FontStyles.heading3
              }
              text={'CATCH'}
              color={ Colors.white.default }
            />
          </BtnCatch>
        </DetailCard>
      </div>

      <CustomModal
        isOpen={ openModal }
        closeModal={ () => { setOpenModal(false) } }
      >
        <ModalInfo
          isFailed={isFailed}
        >
          <img
            className='xIcon'
            src={ Images.x }
            alt=''
            onClick={ () => { setOpenModal(false)} }
          />
          <Text
            styling={
              FontStyles.heading1
            }
            text={isFailed ? 'FAILED' : 'SUCCESS'}
            color={ isFailed ? Colors.red.default : Colors.green.default }
            className='text-heading'
          />
          <div className="content-wrapper">
            <img src={isFailed ? Images.failedImg : Images.successImg} alt="" />
            <div className="input-text">
              {
                isFailed
                ?
                  <Text
                    styling={
                      FontStyles.boldM
                    }
                    text={<span>You have failed to catch this pokemon.<br/> Try again?</span>}
                    color={ Colors.black.default }
                    className='text-label'
                  />
                :
                <>
                  <Text
                    styling={
                      FontStyles.boldM
                    }
                    text={'Nickname:'}
                    color={ Colors.black.default }
                    className='text-label'
                  />
                  <input type="text" />
                </>
              }
              <div className={`btn-save ${isFailed ? 'failed' : ''}`}>
                <Text
                  styling={
                    FontStyles.boldM
                  }
                  text={isFailed ? 'Try' :'Save'}
                  color={ Colors.white.default }
                />
              </div>
            </div>
          </div>
        </ModalInfo>
      </CustomModal>
    </Container>
  );

};

export default Detail;
