import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    height: 55px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vW - 1100px) / 2);
    z-index: 10;
    background-color: #f6f6f6;

`;

export const NavLogo = styled(Link)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: green;
    }

    @media screen and (max-width: 768px){
        display:none;
    }

`;

export const NavLink = styled(Link)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: green;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: black;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    width : 100vw;
    white-space: nowrap;

    @media screen and (max-width: 768px){
        display:none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    justify-content: flex-end;
    width: 100vw;

    @media screen and (max-width: 768px){
        display: none;
    }

    
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: black;
    padding: 10px 22px;
    margin: 5px;
    color:#fff;
    border:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    Icon{
        background-color:red;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: green;
        color: #010606;
    }
`;