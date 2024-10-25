import React from 'react';
import styled from 'styled-components';

const PlayerDiv = styled.div<{ position: { top: number; left: number } }>`
  position: absolute;
  top: ${(props) => props.position.top}%;
  left: ${(props) => props.position.left}%;
  cursor: grab;
  border-radius: 50%;
  color: darkgreen;

  &:hover {
    background-color: darkgreen;
  }

  &:active {
    cursor: grabbing;
  }
`;

const RadioInput = styled.input<{ visible: boolean }>`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  accent-color: white;
`;

const PlayerText = styled.span<{ visible: boolean }>`
  color: white;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;

interface PlayerProps {
  position: { top: number; left: number };
  player: { name: string; selected: boolean };
  onToggle: () => void;
}

const Player: React.FC<PlayerProps> = ({ position, player, onToggle }) => {
  return (
    <PlayerDiv position={position} title={player.name} onClick={onToggle}>
      <RadioInput
        type="radio"
        visible={player.selected} // Show radio only if player is selected
        checked={player.selected}
        readOnly
      />
      <PlayerText visible={player.selected}>{player.name}</PlayerText>
    </PlayerDiv>
  );
};

export default Player;
