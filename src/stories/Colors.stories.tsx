import { vars } from '@styles/theme.css';

type Colors = Record<string, string>;

export default {
  title: 'Design System/Colors',
};

const colorGroups: Record<string, Colors> = {
  'Main colors': {
    red1: '#F24D4D',
    red2: '#FF7878',
    red3: '#FFF4F4',
    yellow1: '#FFF7BE',
    yellow2: '#FFFCE0',
    yellow3: '#FFFDEF',
  },
  'Blue colors': {
    blue1: '#6A88FF',
    blue2: 'rgba(65, 103, 255, 0.8)', // 80% opacity
  },
  'Opacity (gray with different transparencies)': {
    number: 'rgba(43, 43, 43, 0.7)', // 70% opacity
    dimmed: 'rgba(0, 0, 0, 0.5)', // 50% opacity
    like_off: 'rgba(196, 196, 196, 0.65)', // 65% opacity
  },
  'Gray scale': {
    gray900: '#1D1D1D',
    gray800: '#313131',
    gray700: '#454545',
    gray600: '#6A6A6A',
    gray500: '#828282',
    gray400: '#A9A9A9',
    gray300: '#D2D2D2',
    gray200: '#ECECEC',
    gray100: '#F8F8F8',
  },
  'Common colors': {
    black: '#171717',
    white: '#FFFFFF',
  },
  'Kakao colors': {
    kakao_brown: '#000000',
    kakao_yellow: '#FAE100',
  },
};

export const Colors = () => (
  <div style={{ padding: '20px', fontFamily: 'Pretendard, sans-serif' }}>
    <h2 style={vars.fonts.head01_b_24}>Colors</h2>
    {Object.entries(colorGroups).map(([groupName, groupColors]) => (
      <div key={groupName} style={{ marginBottom: '40px' }}>
        <h3
          style={{
            margin: '20px 0',
            ...vars.fonts.body05_m_14,
            fontSize: '20px',
          }}
        >
          {groupName}
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {Object.entries(groupColors).map(([name, color]) => (
            <div
              key={name}
              style={{
                textAlign: 'center',
                width: '120px',
              }}
            >
              <div
                style={{
                  backgroundColor: color,
                  width: '100%',
                  height: '100px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
                aria-label={`${name} - ${color}`}
              />
              <p
                style={{ marginTop: '8px', fontSize: '14px', color: '#454545' }}
              >
                {name}
              </p>
              <p
                style={{ marginTop: '8px', fontSize: '12px', color: '#828282' }}
              >
                {color}
              </p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
