import styles from "styled-components";
import { colors } from "../../../const/colors";

export const AlbumBoxContainer = styles.div`
    max-width: 300px;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    transition: all .5s ease-in-out; 

    &:hover {
        cursor: pointer;
        transform: scale(1.2);
        z-index: 10;
    }
`;

export const AlbumBoxImage = styles.img`
width: 100%;
height: auto;
border-radius: 10px;
box-shadow: 8px 10px 19px 9px rgba(254, 252, 252, 0.101);
`;

export const AlbumTitle = styles.span`
font-size: 30px;
text-overflow: ellipsis;
color: ${colors.fourth};

`;
