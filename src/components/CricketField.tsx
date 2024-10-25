import React, { useState, useRef, useCallback } from 'react';
import { useDrop } from 'react-dnd';
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

  const handleDrop = useCallback(
    (item: any, monitor: any) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      if (!delta) return;

      const playerIndex = players.findIndex((p) => p.name === item.player.name);
      if (playerIndex !== -1) {
        const newTop = Math.max(0, Math.min(100, players[playerIndex].position.top + delta.y / 8));
        const newLeft = Math.max(0, Math.min(100, players[playerIndex].position.left + delta.x / 8));

        let closestPositionName = players[playerIndex].name;
        let minDistance = Infinity;

        FIELD_POSITIONS.forEach((posName, index) => {
          const [posLeft, posTop] = allposcoord[index];
          const posLeftPct = posLeft * 100;
          const posTopPct = posTop * 100;
          const distance = Math.sqrt(
            Math.pow(newLeft - posLeftPct, 2) + Math.pow(newTop - posTopPct, 2)
          );

          if (distance < minDistance) {
            minDistance = distance;
            closestPositionName = posName;
          }
        });

        const updatedPlayers = [...players];
        updatedPlayers[playerIndex] = {
          ...updatedPlayers[playerIndex],
          position: { top: newTop, left: newLeft },
          name: closestPositionName,
        };
        setPlayers(updatedPlayers);
      }
    },
    [players]
  );

  const [, drop] = useDrop(() => ({
    accept: 'PLAYER',
    drop: (item, monitor) => handleDrop(item, monitor),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

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
