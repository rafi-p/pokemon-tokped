import { Colors, Sizes } from '../../constant';
import styled from 'styled-components';

const Navbar = styled.div`
    background: ${Colors.red.default};
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    margin-bottom: 80px;
    position: fixed;

    @media ${Sizes.sm} {
        height: 75px;
    }

    .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: -50px;
        left: 50%;
        transform: translateX(-50%);
        img {
            width: 300px;
            cursor: pointer;
            transition: all .3s;
            &:hover {
                transform: scale(1.1);
            }
        }

        @media ${Sizes.sm} {
            transform: unset;
            bottom: -25px;
            left: 20px;
            img {
                width: 150px;
            }
        }
    }
    .container-btn {
        background: ${Colors.yellow.default};
        padding: 10px 20px;
        margin-right: 20px;
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
    Navbar,
};