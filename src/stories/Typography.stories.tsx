import { ChangeEvent, useState } from 'react';

export default {
  title: 'Design System/Typography',
};

const fonts = {
  head01_b_24: {
    fontWeight: '700',
    fontSize: '2.4rem',
    lineHeight: 'normal',
    letterSpacing: '-0.6px',
  },
  head02_b_20: {
    fontWeight: '700',
    fontSize: '2rem',
    lineHeight: 'normal',
    letterSpacing: '-0.6px',
  },
  head03_b_18: {
    fontWeight: '700',
    fontSize: '1.8rem',
    lineHeight: 'normal',
    letterSpacing: '-0.6px',
  },
  head04_b_16: {
    fontWeight: '700',
    fontSize: '1.6rem',
    lineHeight: 'normal',
    letterSpacing: '-0.6px',
  },
  head05_sb_20: {
    fontWeight: '600',
    fontSize: '2rem',
    lineHeight: 'normal',
    letterSpacing: '-0.6px',
  },
  head06_sb_16: {
    fontWeight: '600',
    fontSize: '1.6rem',
    lineHeight: 'normal',
    letterSpacing: '-0.6px',
  },
  head07_m_20: {
    fontWeight: '500',
    fontSize: '2rem',
    lineHeight: 'normal',
    letterSpacing: '-0.6px',
  },
  head08_m_18: {
    fontWeight: '500',
    fontSize: '1.8rem',
    lineHeight: 'normal',
    letterSpacing: '-0.6px',
  },
  head09_r_18: {
    fontWeight: '400',
    fontSize: '2rem',
    lineHeight: 'normal',
    letterSpacing: '-0.6px',
  },

  // body
  body01_b_14: {
    fontWeight: '700',
    fontSize: '1.4rem',
    lineHeight: 'normal',
    letterSpacing: '-0.6px',
  },
  body02_sb_14: {
    fontWeight: '600',
    fontSize: '1.4rem',
    lineHeight: 'normal',
    letterSpacing: '-0.6px',
  },
  body03_sb_12: {
    fontWeight: '600',
    fontSize: '1.2rem',
    lineHeight: 'normal',
    letterSpacing: '-0.6px',
  },
  body04_m_16: {
    fontWeight: '500',
    fontSize: '1.6rem',
    lineHeight: 'normal',
    letterSpacing: '-0.6px',
  },
  body05_m_14: {
    fontWeight: '500',
    fontSize: '1.4rem',
    lineHeight: 'normal',
    letterSpacing: '-0.6px',
  },
  body06_r_16: {
    fontWeight: '400',
    fontSize: '1.6rem',
    lineHeight: 'normal',
    letterSpacing: '-0.6px',
  },
  body07_r_14: {
    fontWeight: '400',
    fontSize: '1.4rem',
    lineHeight: 'normal',
    letterSpacing: '-0.6px',
  },
  body08_r_12: {
    fontWeight: '400',
    fontSize: '1.2rem',
    lineHeight: 'normal',
    letterSpacing: '-0.6px',
  },
  body09_r_10: {
    fontWeight: '400',
    fontSize: '1rem',
    lineHeight: 'normal',
    letterSpacing: '-0.6px',
  },
  body10_l_12: {
    fontWeight: '300',
    fontSize: '1.2rem',
    lineHeight: 'normal',
    letterSpacing: '-0.6px',
  },
};

const useInput = (defaultValue: string) => {
  const [input, setInput] = useState(defaultValue);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return [input, handleInputChange] as const;
};

export const Typography = () => {
  const [text, handleTextChange] = useInput(
    '💛 🍰 맛있는 것을 만드는 것은 생각만 해도 재밌잖아요 🍰 💛'
  );

  return (
    <div style={{ padding: '24px', backgroundColor: '#000', color: '#FFF' }}>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="예시 문장을 입력해주세요"
        style={{
          boxSizing: 'border-box',
          width: '100%',
          maxWidth: '800px',
          padding: '12px',
          margin: '16px 0',
          border: 'none',
          outline: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          backgroundColor: '#2A2A2A',
          color: '#F7F7F8',
        }}
      />

      {Object.keys(fonts).map((fontName) => {
        const fontObject = fonts[fontName as keyof typeof fonts];

        return (
          <div
            key={fontName}
            style={{
              padding: '16px',
              border: '1px solid #2A2A2A',
              borderRadius: '8px',
              marginBottom: '16px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <p
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#FFE374',
              }}
            >
              {fontName}
            </p>
            <p style={{ margin: '16px 0', ...fontObject }}>{text}</p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                fontSize: '16px',
              }}
            >
              <p>
                <span style={{ color: '#FFFBEC' }}>fontWeight : </span>
                {fontObject.fontWeight}
              </p>
              <p>
                <span style={{ color: '#FFFBEC' }}>fontSize : </span>
                {fontObject.fontSize}
              </p>
              <p>
                <span style={{ color: '#FFFBEC' }}>lineHeight : </span>
                {fontObject.lineHeight}
              </p>
              <p>
                <span style={{ color: '#FFFBEC' }}>letterSpacing : </span>
                {fontObject.letterSpacing}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
