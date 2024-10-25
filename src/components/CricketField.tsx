import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import styled from 'styled-components';
import Player from './Player';
import { initialPositions } from './constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0e0e0;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #003300;
  margin: 20px;
  text-align: center;
`;

const CricketGround = styled.div`
  position: relative;
  width: 90vw;
  height: 90vw;
  max-width: 800px;
  max-height: 800px;
  background-color: #006400;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #fff;
  margin: 20px auto;
`;

const InnerCircle = styled.div`
  position: absolute;
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
  border-radius: 50%;
  border: 2px dashed #fff;
`;

const Pitch = styled.div`
  position: absolute;
  width: 4%;
  height: 22%;
  background-color: #8b4513;
  top: 39%;
  left: 48%;
  border-radius: 2px;
`;

const Button = styled.button`
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #003300;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;

  &:hover {
    background-color: #005500;
  }

  &:focus {
    outline: 3px solid #4caf50;
  }
`;

const CricketField: React.FC = () => {
  const [players, setPlayers] = useState(initialPositions);
  const groundRef = useRef<HTMLDivElement>(null);

  const togglePlayerSelection = (name: string) => {
    const mandatoryPlayers = ['bowler', 'WK'];
    if (mandatoryPlayers.includes(name)) return;

    const selectedPlayers = players.filter((player) => player.selected);
    if (selectedPlayers.length >= 11 && !players.find((player) => player.name === name)?.selected) {
      alert('Only 11 players can be selected');
      return;
    }

    const updatedPlayers = players.map((player) =>
      player.name === name ? { ...player, selected: !player.selected } : player
    );
    setPlayers(updatedPlayers);
  };

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
      <Heading>Field Master 360</Heading>
      <CricketGround ref={groundRef}>
        <InnerCircle />
        <Pitch />
        {players.map((player, index) => (
          <Player key={index} position={player.position} player={player} onToggle={() => togglePlayerSelection(player.name)} />
        ))}
      </CricketGround>
      <Button onClick={saveAsImage}>Download Field Plan</Button>
    </Container>
  );
};

export default CricketField;
