import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import styled from 'styled-components';
import Player from './Player';
import {initialPositions } from './constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: grey;
  width:100%;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: white;
  margin: 20px;
`;

const CricketGround = styled.div`
  position: relative;
  width: 800px;
  height: 800px;
  background-color: darkgreen;
  border-radius: 50%;
  margin: 20px auto;
  overflow: hidden;
  border: 2px solid white;
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

  const togglePlayerSelection = (name: string) => {
    const mandatoryPlayers = ['bowler', 'WK'];
    const isMandatory = mandatoryPlayers.includes(name);

    // Prevent toggling mandatory players
    if (isMandatory) return;

    // Check the number of selected players before selecting more
    const selectedPlayers = players.filter(player => player.selected);
    if (selectedPlayers.length >= 11 && !players.find(player => player.name === name)?.selected) {
      alert('Only 11 players can be selected');
      return;
    }

    // Toggle the selected state of the player
    const updatedPlayers = players.map(player =>
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
          <Player
            key={index}
            position={player.position}
            player={player}
            onToggle={() => togglePlayerSelection(player.name)}
          />
        ))}
      </CricketGround>
      <button onClick={saveAsImage}>Download Field Plan</button>
    </Container>
  );
};

export default CricketField;
