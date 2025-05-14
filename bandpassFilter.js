export const bandpassFilter = (musicFrequencies, lowerLimit, upperLimit) => {
  if (!musicFrequencies.length) throw new Error("input track is empty");
  if (lowerLimit > upperLimit) throw new Error("lower limit must be less than or equal to the upper value.");

  return musicFrequencies.map((frequency) => {
    if (!frequency) throw new Error("input is corrupted");

    if (frequency <= lowerLimit) return lowerLimit
    if (frequency >= upperLimit) return upperLimit
    return frequency
  });
};
