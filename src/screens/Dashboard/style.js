import { Colors, Sizes } from '../../constant';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;

    &.loading {
        transition: all .3s;
        pointer-events: none;
        opacity: .5;
    }

    .content-wrapper {
        display: flex;
        justify-content: center;
        flex-flow: wrap;
        width: calc(100% - 500px);
        margin-top: 180px;

        @media ${Sizes.sm} {
            margin-top: 135px;
            width: 100%;
        }

        & > * {
            margin-bottom: 25px;
            margin-right: 12.5px;
            margin-left: 12.5px;

            @media ${Sizes.sm} {
                margin-right: unset;
                margin-left: unset;
            }
        }
    }

    .pagination {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        & > * {
            margin-right: 20px;

            &:last-child {
                margin-right: 0px;
            }
        }

        img {
            cursor: pointer;
            transition: all .3s;
            &:hover {
                opacity: .8;
            }

            &.disabled {
                pointer-events: none;
                opacity: 0.3;
            }
        }
    }
`;

export {
    Container,
};