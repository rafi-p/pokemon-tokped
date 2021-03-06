import { Colors, Sizes } from '../../constant';
import styled from 'styled-components';

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 5px solid ${Colors.black.default};
    padding: 20px;
    border-radius: 20px;
    height: ${props => (props.isMyPokemon ? '100%' : '300px')};
    width: 200px;
    box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all .3s;

    &:hover {
        border: 5px solid ${Colors.red.default};
    }

    @media ${Sizes.sm} {
        width: calc(100vw - 175px);
    }


    & > * {
        margin-bottom: 15px;
        &:first-child {
            margin-bottom: ${props => (props.isMyPokemon ? 'unset' : '15px')};
        }

        &:last-child {
            margin-bottom: 0px;
        }
    }

    .container-img {
        background: ${Colors.red.mild};
        height: 200px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;

        img {
            width: 100%;
        }
    }

    .container-btn {
        background: ${Colors.red.default};
        padding: 10px 20px;
        border-radius: 10px;
        cursor: pointer;
        transition: all .3s;
        &:hover {
            /* transform: scale(1.05); */
            box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.08);
        }
    }

`;

export {
    CardWrapper,
};