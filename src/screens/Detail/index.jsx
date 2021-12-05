import React, { useState, useEffect, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks'
import {
  Text,
  CustomModal
} from '../../components/index'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
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
import {GET_POKEMON_DETAIL} from '../../services/pokemon-detail'
import { PokemonContext } from '../../context/PokemonContext'
import { convert } from '../../helpers/index';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';

const Detail = props => {
  const param = useParams()
  const pokemonContext = useContext(PokemonContext)
  const [isFailed, setIsFailed] = useState(false)
  const [topNav, setTopNav] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [errSameName, setErrSameName] = useState(false)
  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name: param.name },
  })
  const [dataMain, setDataMain] = useState([])
  const [dataType, setDataType] = useState('')
  const [dataImage, setDataImage] = useState({})
  const [nick, setNick] = useState('')

  const Row = (props) => {
    const {text, desc, className, isType} = props
    return (
      <RowContainer
        className={className ?? ''}
      >
        {
          isMobile && isType
          ?
            <>
            </>
          :
            <Text
              styling={
                FontStyles.boldM
              }
              text={(!desc ? '- ' : '') + text}
              color={ Colors.black.default }
            />
        }
        {
          desc &&
          <Text
            styling={
              FontStyles.mediumM
            }
            text={`${isType ? '' : ': '}${desc}`}
            color={ Colors.black.default }
            className={`${isType ? 'customDesc' : ''}`}
          />
        }
      </RowContainer>
    )
  }

  useEffect(() => {
    let temp = []
    let type = ''
    let image = {}
    if(!loading) {
      image = data.pokemon.sprites
      if(topNav === 0) {
        temp = data.pokemon.stats.map((el, i) => {
          return {
            text: el.stat.name.toUpperCase(),
            desc: el.base_stat
          }
        })
        type = data.pokemon.types.map((el) => {
          return el.type.name
        }).join(', ')
      } else {
        temp = data.pokemon.moves.map((el, i) => {
          return {
            text: el.move.name.toUpperCase(),
          }
        })
      }
    }
    setDataMain(temp)
    setDataType(loading ? '' : type)
    setDataImage(image)
  }, [topNav, loading])

  const topNavData = [
    {
      text: 'Info'
    },
    {
      text: 'Skill'
    }
  ]

  const handleCatch = () => {
    pokemonContext.catchPokemon()
    .then (res => {
      setIsFailed(!res)
    })
  }

  useEffect(() => {
    setErrSameName(false)
  }, [nick])

  const handleSave = () => {
    let payload = {
      id: data.pokemon.id,
      name: data.pokemon.name,
      image: data.pokemon.sprites.front_default,
      nickname: nick,
    }
    pokemonContext.savePokemon(payload)
    .then (res => {
      if(res) {
        pokemonContext.setMyPokemon((prevState) => ({
          catchedPokemon: [...prevState.catchedPokemon, payload]
        }))
        toast.success("Success Adding Pokemon!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
        });
        setOpenModal(false)
        setNick('')
      } else {
        setErrSameName(true)
      }
    })
    .catch((err) => {

    })
  }

  if(loading) {
    return (
      <Container>
        <div className="content-wrapper">
          <DetailCard
            className='loading'
          >
            <div className="wrapper-image">
              <div className="container-img">
              </div>
              <div className="container-img">
              </div>
            </div>
          </DetailCard>
        </div>
      </Container>

    )
  } else {
    return (
      <Container>
        <div className="content-wrapper">
          <DetailCard>
            <div className="wrapper-image">
              <div className="container-img">
                <img src={dataImage.front_default} alt="" />
              </div>
              <div className="container-img">
                <img src={dataImage.back_default} alt="" />
              </div>

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
                {
                  topNav === 0 &&
                  dataType &&
                  <Row
                    text={'TYPE'}
                    desc={dataType}
                    className='customText'
                    isType={true}
                  />
                }
                <div className="text">
                  {
                    dataMain && dataMain.map((el, i) => {
                      return (
                        <Row
                          key={i}
                          text={el.text ?? ''}
                          desc={el.desc ?? ''}
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
                onClick={() => handleCatch()}
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
                    <input
                      type="text"
                      value={nick}
                      onChange={(e) => setNick(e.target.value)}
                    />
                    {
                      errSameName &&
                      <Text
                        styling={
                          FontStyles.boldS
                        }
                        text={'Nickname has been taken'}
                        color={ Colors.red.default }
                      />
                    }
                  </>
                }
                <div
                  className={`btn-save ${isFailed ? 'failed' : ''}`}
                  onClick={() => {
                    if(isFailed) {
                      setOpenModal(false)
                    } else {
                      handleSave()
                    }
                  }}
                >
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

  }


};

export default Detail;
