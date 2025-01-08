type Colors = Record<string, string>;

export default {
  title: 'Design System/Colors',
};

const colors = {
  // main-color
  mainBlue: '#4863FF',
  blue2: '#647BFF',
  blue3: '#97A6FF',
  blue4: '#D2D9FF',
  blue5: '#EDF0FF',
  subYellow: '#FFE374',
  yellow2: '#FFEDA7',
  yellow3: '#FFF6D4',
  yellow4: '#FFFBEC',

  // gray-scale
  black: '#171719',
  white: '#FFFFFF',
  gray1: '#46474C',
  gray2: '#5A5C63',
  gray3: '#878A93',
  gray4: '#AEB0B6',
  gray5: '#C2C4C8',
  gray6: '#DBDCDF',
  gray7: '#F7F7F8',
};

export const Colors = () => (
  <div style={{ padding: '20px', fontFamily: 'Pretendard, sans-serif' }}>
    <h2 style={{ marginBottom: '20px' }}>Colors</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {Object.entries(colors).map(([name, color]) => (
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
            style={{
              marginTop: '8px',
              fontSize: '14px',
              color: colors.gray1,
            }}
          >
            {name}
          </p>
          <p style={{ fontSize: '12px', color: colors.gray3 }}>{color}</p>
        </div>
      ))}
    </div>
  </div>
);
