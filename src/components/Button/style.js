import styled, { css } from 'styled-components/native';

export const TouchableOpacity = styled.TouchableOpacity`

    border: 1px solid #ffa951;
    border-radius: 5px;
    padding: 10px 40px; 
    max-width:190px;

    display: flex;
    justify-content: center;
    align-items: center;


    ${({ theme }) => theme == 'primary' && css`
        background-color:#ffa951;
    `}

`

export const Text = styled.Text`
     
    color:#ffa951;
    
    ${({ theme }) => theme == 'primary' && css`
        
        color:#FFFFFF;

    `}

`