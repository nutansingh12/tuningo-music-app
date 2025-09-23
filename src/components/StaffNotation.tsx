import React from 'react';

interface StaffNotationProps {
  note: string;
  clef?: 'treble' | 'bass';
  className?: string;
  showLabel?: boolean; // New prop to control whether to show the note label
}

const StaffNotation: React.FC<StaffNotationProps> = ({
  note,
  clef = 'treble',
  className = '',
  showLabel = false // Default to false for proper sight-reading
}) => {
  // Note positions on treble clef staff (from bottom line = 0)
  const trebleNotePositions: { [key: string]: number } = {
    'E': 0,   // Bottom line
    'F': 0.5, // First space
    'G': 1,   // Second line
    'A': 1.5, // Second space
    'B': 2,   // Third line (middle)
    'C': 2.5, // Third space
    'D': 3,   // Fourth line
    'E5': 3.5, // Fourth space
    'F5': 4,   // Top line
    'G5': 4.5, // Above staff
    'A5': 5,   // Above staff
  };

  // Note positions on bass clef staff
  const bassNotePositions: { [key: string]: number } = {
    'G': 0,   // Bottom line
    'A': 0.5, // First space
    'B': 1,   // Second line
    'C': 1.5, // Second space
    'D': 2,   // Third line (middle)
    'E': 2.5, // Third space
    'F': 3,   // Fourth line
    'G4': 3.5, // Fourth space
    'A4': 4,   // Top line
  };

  const notePositions = clef === 'treble' ? trebleNotePositions : bassNotePositions;
  const notePosition = notePositions[note.toUpperCase()] ?? 2; // Default to middle

  // Calculate Y position (staff lines are at y = 20, 30, 40, 50, 60)
  const staffLineY = [60, 50, 40, 30, 20]; // Bottom to top
  const noteY = 60 - (notePosition * 10); // Convert position to Y coordinate

  return (
    <div className={`inline-block bg-white p-4 rounded-lg border-2 border-gray-200 ${className}`}>
      <svg width="200" height="120" viewBox="0 0 200 120" className="mx-auto">
        {/* Staff lines */}
        {staffLineY.map((y, index) => (
          <line
            key={index}
            x1="20"
            y1={y}
            x2="180"
            y2={y}
            stroke="#333"
            strokeWidth="1"
          />
        ))}

        {/* Clef symbol */}
        {clef === 'treble' ? (
          // Treble clef symbol (simplified)
          <g transform="translate(30, 20)">
            <path
              d="M 0 40 Q 5 35 10 40 Q 15 45 10 50 Q 5 55 0 50 Q -5 45 0 40 Z M 10 20 Q 15 15 20 20 Q 25 25 20 30 Q 15 35 10 30 Q 5 25 10 20 Z"
              fill="#333"
            />
            <text x="5" y="45" fontSize="24" fontFamily="serif" fill="#333">𝄞</text>
          </g>
        ) : (
          // Bass clef symbol (simplified)
          <g transform="translate(30, 30)">
            <text x="0" y="25" fontSize="32" fontFamily="serif" fill="#333">𝄢</text>
          </g>
        )}

        {/* Ledger lines if needed */}
        {noteY < 20 && (
          <line x1="70" y1={noteY} x2="110" y2={noteY} stroke="#333" strokeWidth="1" />
        )}
        {noteY > 60 && (
          <line x1="70" y1={noteY} x2="110" y2={noteY} stroke="#333" strokeWidth="1" />
        )}

        {/* Note head */}
        <ellipse
          cx="90"
          cy={noteY}
          rx="6"
          ry="4"
          fill="#333"
          transform={`rotate(-20 90 ${noteY})`}
        />

        {/* Note stem */}
        <line
          x1={noteY <= 40 ? "96" : "84"}
          y1={noteY}
          x2={noteY <= 40 ? "96" : "84"}
          y2={noteY <= 40 ? noteY - 25 : noteY + 25}
          stroke="#333"
          strokeWidth="1.5"
        />

        {/* Note label - only show if showLabel is true */}
        {showLabel && (
          <text
            x="90"
            y={noteY + 35}
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill="#333"
          >
            {note.toUpperCase()}
          </text>
        )}
      </svg>
      
      <div className="text-center mt-2 text-sm text-gray-600">
        {clef === 'treble' ? 'Treble Clef' : 'Bass Clef'}
      </div>
    </div>
  );
};

export default StaffNotation;
