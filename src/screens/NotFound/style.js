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
            margin-right: 12.5px;
            margin-left: 12.5px;

            @media ${Sizes.sm} {
                margin-right: unset;
                margin-left: unset;
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
        width: 300px;
        height: auto;
        /* margin-bottom: 10px; */
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
    }
`;

export {
    Container,
    Nothing
};