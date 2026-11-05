
import { Position, RegionGrid } from '@/types/types';
import { areAdjacent } from './rules';

export function isBoardSolved(
  wolves: Position[],
  regions: RegionGrid
): boolean {
  const size = regions.length;

  // Precisamos de exatamente um lobo por linha
  if (wolves.length !== size) {
    return false;
  }

  const rows = new Set(wolves.map(wolf => wolf.row));
  const cols = new Set(wolves.map(wolf => wolf.col));

  if (rows.size !== size || cols.size !== size) {
    return false;
  }

  // Um lobo por região
  const wolfRegions = wolves.map(
    wolf => regions[wolf.row][wolf.col]
  );

  if (new Set(wolfRegions).size !== size) {
    return false;
  }

  // Nenhum lobo pode encostar em outro
  for (let i = 0; i < wolves.length; i++) {
    for (let j = i + 1; j < wolves.length; j++) {
      if (areAdjacent(wolves[i], wolves[j])) {
        return false;
      }
    }
  }

  return true;
}
