// src/components/constants.ts

// Define all field positions
export const FIELD_POSITIONS = [
    'Bowler',              // Added Bowler
    'Wicketkeeper',        // Added Wicketkeeper
    '1st slip', '2nd slip', '3rd slip', '4th slip', '5th slip', '6th slip', 'fly slip',
    'gully', 'backward point', 'point', 'silly point', 'forward point', 'cover point', 'cover', 
    'short cover', 'extra cover', 'mid-off', 'deep mid-off', 'short mid-off', 'silly mid-off',
    'mid-on', 'deep mid-on', 'short mid-on', 'silly mid-on', 'short mid-wicket', 'mid-wicket',
    'short leg', 'square leg', 'forward square leg', 'backward square leg', 'leg slip', 'leg gully',
    'backward short leg', 'fine leg', 'short fine leg', 'deep fine leg', 'long leg', 'square fine leg', 'straight fine leg',
    'long stop', 'third man', 'short third man', 'deep third man', 'fine third man', 'square third man',
    'deep backward point', 'deep point', 'deep cover point', 'deep cover', 'sweeper cover',
    'wide long off', 'long off', 'straight long off', 'straight hit', 'straight long on', 'long on', 'wide long on',
    'deep forward mid-wicket', 'deep mid-wicket', 'deep forward square leg', 'deep square leg', 'deep backward square leg',
];

// Define coordinates corresponding to each field position
export const allposcoord = [
    [0.432, 0.98 - 0.383], // Bowler
    [0.425, 0.98 - 0.600], // Wicketkeeper
    [0.476, 0.98 - 0.633], // 1st slip
    [0.461, 0.98 - 0.630], // 2nd slip
    [0.443, 0.98 - 0.615], // 3rd slip
    [0.426, 0.98 - 0.606], // 4th slip
    [0.411, 0.98 - 0.600], // 5th slip
    [0.398, 0.98 - 0.592], // 6th slip
    [0.388, 0.98 - 0.673], // fly slip
    [0.340, 0.98 - 0.593], // gully
    [0.294, 0.98 - 0.594], // backward point
    [0.292, 0.98 - 0.552], // point
    [0.440, 0.98 - 0.552], // silly point
    [0.290, 0.98 - 0.520], // forward point
    [0.290, 0.98 - 0.462], // cover point
    [0.290, 0.98 - 0.404], // cover
    [0.371, 0.98 - 0.463], // short cover
    [0.284, 0.98 - 0.305], // extra cover
    [0.397, 0.98 - 0.300], // mid-off
    [0.383, 0.98 - 0.206], // deep mid-off
    [0.420, 0.98 - 0.427], // short mid-off
    [0.450, 0.98 - 0.508], // silly mid-off
    [0.576, 0.98 - 0.299], // mid-on
    [0.603, 0.98 - 0.209], // deep mid-on
    [0.567, 0.98 - 0.426], // short mid-on
    [0.533, 0.98 - 0.505], // silly mid-on
    [0.600, 0.98 - 0.478], // short mid-wicket
    [0.723, 0.98 - 0.403], // mid-wicket
    [0.540, 0.98 - 0.554], // short leg
    [0.722, 0.98 - 0.554], // square leg
    [0.722, 0.98 - 0.513], // forward square leg
    [0.722, 0.98 - 0.596], // backward square leg
    [0.512, 0.98 - 0.633], // leg slip
    [0.632, 0.98 - 0.600], // leg gully
    [0.625, 0.98 - 0.685], // backward short leg
    [0.705, 0.98 - 0.794], // fine leg
    [0.666, 0.98 - 0.762], // short fine leg
    [0.791, 0.98 - 0.850], // deep fine leg
    [0.670, 0.98 - 0.930], // long leg
    [0.842, 0.98 - 0.630], // square fine leg
    [0.587, 0.98 - 0.887], // straight fine leg
    [0.488, 0.98 - 0.967], // long stop
    [0.306, 0.98 - 0.814], // third man
    [0.331, 0.98 - 0.777], // short third man
    [0.229, 0.98 - 0.883], // deep third man
    [0.349, 0.98 - 0.907], // fine third man
    [0.191, 0.98 - 0.782], // square third man
    [0.070, 0.98 - 0.673], // deep backward point
    [0.036, 0.98 - 0.553], // deep point
    [0.036, 0.98 - 0.433], // deep cover point
    [0.066, 0.98 - 0.311], // deep cover
    [0.138, 0.98 - 0.183], // sweeper cover
    [0.229, 0.98 - 0.089], // wide long off
    [0.306, 0.98 - 0.047], // long off
    [0.405, 0.98 - 0.020], // straight long off
    [0.495, 0.98 - 0.010], // straight hit
    [0.585, 0.98 - 0.020], // straight long on
    [0.677, 0.98 - 0.047], // long on
    [0.756, 0.98 - 0.091], // wide long on
    [0.858, 0.98 - 0.197], // deep forward mid-wicket
    [0.922, 0.98 - 0.322], // deep mid-wicket
    [0.948, 0.98 - 0.464], // deep forward square leg
    [0.944, 0.98 - 0.551], // deep square leg
    [0.921, 0.98 - 0.650], // deep backward square leg
];

// Define only the specified initial positions
export const INITIAL_POSITIONS = [
    'Bowler', 
    'Wicketkeeper', 
    'point', 
    'short third man', 
    'cover', 
    'long on', 
    'long off', 
    'deep cover', 
    'deep mid-wicket', 
    'fine leg', 
    'deep square leg'
];

// Get the initial positions with coordinates
export const initialPositions = INITIAL_POSITIONS.map((position) => {
    const index = FIELD_POSITIONS.indexOf(position); // Find index of the position
    const coords = allposcoord[index]; // Get the corresponding coordinates
    if (!coords) {
        throw new Error(`Coordinates not found for position: ${position}`); // Handle missing coordinates
    }
    return {
        name: position,
        position: {
            top: coords[1] * 100, // Convert to pixels based on height
            left: coords[0] * 100, // Convert to pixels based on width
        },
    };
});
