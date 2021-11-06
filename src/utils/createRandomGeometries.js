import { v4 as uuid } from 'uuid';
import sample from 'lodash/sample';
import random from 'lodash/random';
import { geometries } from '../constants/geometries';

export const createRandomGeometries = (count) => {
  const results = [];

  for (let i = 0; i < count; i += 1) {
    const position = [random(-30, 30), random(-15, 15), random(-50, 3)];

    results.push({
      geometry: sample(geometries),
      position,
      key: uuid(),
    });
  }
  return results;
};
