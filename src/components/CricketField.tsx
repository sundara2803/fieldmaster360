import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import styled from 'styled-components';
import Player from './Player';
import { allposcoord, FIELD_POSITIONS, initialPositions } from './constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: grey;
`;

const CricketGround = styled.div`
  position: relative;
  width: 800px;
  height: 800px;
  background-color: darkgreen;
  border-radius: 50%;
  margin: 20px auto;
  overflow: hidden;
`;

const InnerCircle = styled.div`
  position: absolute;
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
  border-radius: 50%;
  border: 2px solid white;
`;

const Pitch = styled.div`
  position: absolute;
  width: 4%;
  height: 22%;
  background-color: brown;
  top: 39%;
  left: 48%;
`;

const CricketField: React.FC = () => {
  const [players, setPlayers] = useState(initialPositions);
  const groundRef = useRef<HTMLDivElement>(null);

  const saveAsImage = async () => {
    if (groundRef.current) {
      const canvas = await html2canvas(groundRef.current);
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'field-plan.png';
      link.click();
    }
  };

  return (
    <Container>
      <CricketGround ref={groundRef}>
        <InnerCircle />
        <Pitch />
        {players.map((player, index) => (
          <Player key={index} position={player.position} player={player} />
        ))}
      </CricketGround>
      <button onClick={saveAsImage}>Download Field Plan</button>
    </Container>
  );
};

export default CricketField;
