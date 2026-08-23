import { expect } from 'bun:test';
import { Spectrum } from '../classes';

export function assertHarmonicAmplitudesAndPhases(spectrum: Spectrum) {
  const harmonics = spectrum.getHarmonics();
  for (let i = 0; i < harmonics.length; i++) {
    expect(harmonics[i]?.amplitude).toBe(1 / (i + 1));
    expect(harmonics[i]?.phase).toBe(0);
  }
}
