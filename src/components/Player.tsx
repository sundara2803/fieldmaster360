import React from 'react';
import styled from 'styled-components';

interface PlayerDivProps {
  position: { top: number; left: number };
  selected: boolean;
}

const PlayerDiv = styled.div<PlayerDivProps>`
  position: absolute;
  top: ${(props) => props.position.top}%;
  left: ${(props) => props.position.left}%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.selected ? '#003300' : '')};
  border-radius: 50%;
  padding: 8px;
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2e8b57;
  }
`;

const PlayerText = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
`;

interface PlayerProps {
  position: { top: number; left: number };
  player: { name: string; selected: boolean };
  onToggle: () => void;
}

const Player: React.FC<PlayerProps> = ({ position, player, onToggle }) => {
  return (
    <PlayerDiv position={position} selected={player.selected} onClick={onToggle}>
      <PlayerText>{player.selected ? player.name : ''}</PlayerText>
    </PlayerDiv>
  );
};

export default Player;
