import styles from "styled-components";

export const AlbumContainerContainer = styles.div`
    padding: 20px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;

    @media (min-width: 1024px) {
        justify-content: flex-start;
    }
`;

export const Title = styles.h1`
    color: #fff;
    font-size: 30px;
    text-align: center;
    padding-left: 20px;
    margin-bottom: 0;

    @media (min-width: 768px) {
        text-align: left;
    }
`;
