import styled from 'styled-components';
import { colors } from '@/assets/styles/theme';

export const NotificationDetailPageContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
`;

export const NotificationDetailPageSection = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: ${colors.white};
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;
    padding-bottom: 100px;
`;

export const ProfileInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Col = styled.div<{ gap: string }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: ${(props) => props.gap};
`;

export const Row = styled.div<{ gap: string }>`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: ${(props) => props.gap};
`;

export const Devider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${colors.white_10};
`;

export const PossibleTimeRadioButton = styled.button<{ selected: boolean }>`
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
    border: ${(props) =>
        props.selected ? `4px solid ${colors.purple_light_30}` : `1px solid ${colors.black}`};
`;

export const PossibleTimeBox = styled.div`
    width: 100%;
    padding: 15px 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
    border: 1px solid ${colors.purple_light_30};
`;

export const QueryBox = styled.div`
    width: 100%;
    height: 145px;
    padding: 16px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 8px;
    background-color: ${colors.white_10};
`;

export const ButtonContainer = styled.div<{ type?: string }>`
    width: 100%;
    padding: 0px 20px 40px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.type === 'sent' ? 'center' : 'space-between')};
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    gap: ${(props) => (props.type === 'sent' ? '0px' : '12px')};
`;
