
import { Position } from '@/types/types';

export function areAdjacent(
  a: Position,
  b: Position
): boolean {
  const rowDistance = Math.abs(a.row - b.row);
  const colDistance = Math.abs(a.col - b.col);

  return rowDistance <= 1 && colDistance <= 1;
}

export function canPlaceWolf(
  position: Position,
  wolves: Position[],
  regions: number[][]
): boolean {
  const { row, col } = position;

  const size = regions.length;

  // Verifica os limites do tabuleiro
  if (
    row < 0 ||
    col < 0 ||
    row >= size ||
    col >= size
  ) {
    return false;
  }

  // Verifica se já existe lobo na mesma linha
  if (wolves.some(wolf => wolf.row === row)) {
    return false;
  }

  // Verifica se já existe lobo na mesma coluna
  if (wolves.some(wolf => wolf.col === col)) {
    return false;
  }

  // Verifica se já existe lobo na mesma região
  const regionId = regions[row][col];

  if (
    wolves.some(
      wolf => regions[wolf.row][wolf.col] === regionId
    )
  ) {
    return false;
  }

  // Verifica proximidade, inclusive diagonal
  if (wolves.some(wolf => areAdjacent(position, wolf))) {
    return false;
  }

  return true;
}
