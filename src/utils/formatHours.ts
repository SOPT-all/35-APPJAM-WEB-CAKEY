import { StoreDetailInfoResponse } from '@types';

export const formatHours = (hours: StoreDetailInfoResponse): string[] => {
  const days = ['일', '월', '화', '수', '목', '금', '토'] as const;
  const keys = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'] as const;

  const today = new Date().getDay();
  const rearrangedDays = [...days.slice(today), ...days.slice(0, today)];
  const rearrangedKeys = [...keys.slice(today), ...keys.slice(0, today)];

  return rearrangedKeys.map((key, index) => {
    const open = hours[`${key}Open`];
    const close = hours[`${key}Close`];
    return open && close
      ? `${rearrangedDays[index]} ${open} - ${close}`
      : `${rearrangedDays[index]} 정기휴무 (매주 ${rearrangedDays[index]}요일)`;
  });
};
