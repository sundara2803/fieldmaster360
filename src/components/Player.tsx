import React from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';

const PlayerDiv = styled.div<{ position: { top: number; left: number } }>`
  position: absolute;
  top: ${(props) => props.position.top}%;
  left: ${(props) => props.position.left}%;
  background-color: white;
  border: 1px solid black;
  padding: 5px;
  cursor: grab;

  &:hover {
    background-color: lightgray;
  }

  &:active {
    cursor: grabbing;
  }
`;

const Player: React.FC<{ position: { top: number; left: number }; player: any }> = ({ position, player }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'PLAYER',
    item: { player },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <PlayerDiv
      ref={drag}
      position={position}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {player.name}
    </PlayerDiv>
  );
};

export default Player;
