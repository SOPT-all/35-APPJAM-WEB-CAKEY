interface Hours {
  [key: string]: string | null;
}

export const formatHours = (hours: Hours): (string | null)[] => {
  const days = ['월', '화', '수', '목', '금', '토', '일'];
  const keys = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  return keys.map((key, index) => {
    const openKey = `${key}Open`;
    const closeKey = `${key}Close`;

    if (!hours[openKey] || !hours[closeKey]) {
      return null;
    }

    return `${days[index]} ${hours[openKey]} - ${hours[closeKey]}`;
  });
};
