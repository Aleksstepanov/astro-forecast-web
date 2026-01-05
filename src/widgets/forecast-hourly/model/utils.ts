export const formatHour = (iso: string): string => {
  const m = iso.match(/T(\d{2}:\d{2})/);
  return m ? m[1] : iso;
};
