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
        flex-flow: wrap;
        width: calc(100% - 500px);
        margin-top: 180px;

        @media ${Sizes.sm} {
            margin-top: 135px;
            width: 100%;
        }

        & > * {
            margin-bottom: 25px;
            margin-right: 25px;

            @media ${Sizes.sm} {
                margin-right: unset;
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
        }
    }
`;

const Nothing = styled.div`
    margin-right: unset !important;
    margin-bottom: unset !important;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    .image-wrapper {
        width: 200px;
        height: 200px;
        margin-bottom: 10px;
        display: flex;
        align-self: center;
        justify-content: center;
    }
    img {
        width: 100%;
        height: auto;
    }
    text-align: center;

    @media ${Sizes.sm} {
        height: calc(100vh - 155px);
        .image-wrapper {
            width: 100px;
            height: 100px;
        }
    }
`;

export {
    Container,
    Nothing
};