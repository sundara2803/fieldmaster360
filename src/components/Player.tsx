import React from 'react';
import styled from 'styled-components';

const PlayerDiv = styled.div<{ position: { top: number; left: number } }>`
  position: absolute;
  top: ${(props) => props.position.top}%;
  left: ${(props) => props.position.left}%;
  background-color: darkgreen;
  cursor: grab;

  &:hover {
    background-color: darkgreen;
  }

  &:active {
    cursor: grabbing;
  }
`;

const Player: React.FC<{ position: { top: number; left: number }; player: any }> = ({ position, player }) => {

  return (
    <PlayerDiv
      position={position}
      style={{  borderRadius:"50%", color:"darkgreen" }}
      title={player.name}
    >
      <input type="radio" style={{backgroundColor:"darkgreen",accentColor:"white"}}/>
      <span style={{ color:"white" }}>{player.name}</span>
    </PlayerDiv>
  );
};

export default Player;
