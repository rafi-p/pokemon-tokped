import { Colors, Sizes } from '../../constant';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;

    .content-wrapper {
        display: flex;
        justify-content: center;
        width: calc(100% - 500px);
        margin-top: 180px;

        @media ${Sizes.sm} {
            margin-top: 135px;
            width: 100%;
        }
    }
`;

const DetailCard = styled.div`
    border: 5px solid ${Colors.black.default};
    border-radius: 20px;
    width: 100%;
    padding: 20px;
    display: flex;
    height: calc(100vh - 410px);
    position: relative;

    & > * {
        margin-right: 20px;

        &:last-child {
            margin-right: 0px;
        }
    }

    .wrapper-image {
        display: flex;
        flex-direction: column;
        justify-content: center;
        & > * {
            margin-bottom: 20px;

            &:last-child {
                margin-bottom: 0px;
            }
        }
        img {
            width: 200px;
        }
    }
`;

const ContentCardDetail = styled.div`
    width: 100%;
    .top-nav {
        display: flex;
        & > * {
            margin-right: 30px;

            &:last-child {
                margin-right: 0px;
            }
        }

        .key {

            cursor: pointer;
            transition: all .3s;

            &:hover {
                opacity: .8;
            }

            &.active {
                font-style: italic
            }
        }
    }

    .info-detail {
        & > * {
            margin-bottom: 15px;

            &:last-child {
                margin-bottom: 0px;
            }
        }
    }

    .text {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 10px 70px;
        width: calc(100% - 100px);
    }
`;

const RowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const BtnCatch = styled.div`
    background: ${Colors.red.default};
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateX(50%) translateY(50%);
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    cursor: pointer;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);
    transition: all .3s;
    &:hover {
        transform: translateX(50%) translateY(50%) scale(1.1);
    }
`;


const ModalInfo = styled.div`
    background: ${Colors.white.default};
    border-radius: 20px;
    width: 486px;
    height: 200px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border: 10px solid ${ props => (props.isFailed ? Colors.red.default : Colors.green.default)};
    & > * {
        margin-bottom: 10px;

        &:last-child {
            margin-bottom: 0px;
        }
    }

    .text-heading {
        text-shadow: 1px 1px 4px black;
    }

    .btn-container {
        width: 100%;

        &.changePass {
            display: flex;
            & > * {
                margin-right: 66px;

                &:last-child {
                    margin-right: 0px;
                }
            }
        }
    }

    .xIcon {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;

        &:hover {
            opacity: .8;
        }
    }
    .content-wrapper {
        display: flex;
        width: 100%;
        img {
            width: 200px;
            position: absolute;
            left: 0;
        }

        .input-text {
            width: 100%;
            margin-left: 180px;
            & > * {
                margin-bottom: 5px;

                &:last-child {
                    margin-bottom: 0px;
                }
            }
            &:focus-within {
                .text-label {
                    color: ${Colors.blue.bright};
                }
            }
            input {
                width: 100%;
                border: 2px solid ${Colors.black.default};
                border-radius: 5px;
                background: ${Colors.white.default};
                padding: 5px 0px;
                text-indent: 10px;

                &:focus-visible {
                    border: 2px solid ${Colors.blue.bright};
                    outline: unset;
                }
            }
            .btn-save {
                background: ${Colors.green.default};
                width: 75px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 5px;
                cursor: pointer;
                border: 2px solid ${Colors.green.default};
                transition: all .3s;
                margin-top: 5px;

                &.failed {
                    background: ${Colors.red.default};
                    border: 2px solid ${Colors.red.default};
                }

                &:hover {
                    opacity: .8;
                }
            }
        }
    }
`;

export {
    Container,
    DetailCard,
    ContentCardDetail,
    RowContainer,
    BtnCatch,
    ModalInfo
};