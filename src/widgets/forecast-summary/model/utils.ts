export type TNarrativeBlock = {
  title: string;
  text: string;
};

export const parseNarrative = (raw: string): TNarrativeBlock[] => {
  return raw
    .split(/\n\s*\n/)
    .map((block) => {
      const idx = block.indexOf(':');
      if (idx === -1) {
        return { title: '', text: block.trim() };
      }

      return {
        title: block
          .slice(0, idx)
          .replace(/^\d+\)\s*/, '')
          .trim(),
        text: block.slice(idx + 1).trim(),
      };
    })
    .filter((b) => b.text.length > 0);
};
