import styled from 'styled-components';

interface CardProps {
  active: boolean;
  opacity: number;
}

export const Card = styled.div<CardProps>`
  border: 1px solid #A3CCFA;
  border-radius: 6px;
  display: flex;
  background-color: #fff;
  width: 493px;
  padding: 16px;
  height: 131px;
  margin-bottom: 16px;
  box-shadow: 0px 2px 5px rgba(27, 30, 33, 0.08);
  border: 1px solid  ${props => (props.active ? "#1165BA" : "#E8E8E8")};
  opacity: ${props => (props.active || props.opacity === 1 ? "1" : "0.7")};
  border-radius: 6px;

  :focus {
    outline: none;
  }
`;

export const Logo = styled.img`
  width: 56px;
  height: 56px;
  margin-right: 12px;
`;

export const Content = styled.div`
  flex-grow: 1;
`;

export const Title = styled.h2`
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #515050;
    margin-bottom: 8px;
`;

export const Company = styled.p`
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 8px;
  color: #515050;
  font-weight: 500 !important;
`;

export const Location = styled.p`
    font-size: 14px;
    line-height: 17px;
    color: #515050;
    margin-bottom: 8px;
`;

export const Type = styled.p`
    font-size: 14px;
    line-height: 17px;
    color: #515050;
`;

export const PublishedAt = styled.p`
    font-size: 14px;
    line-height: 17px;
    color: #515050;
    font-weight: 500;
    align-self: flex-end;
`;