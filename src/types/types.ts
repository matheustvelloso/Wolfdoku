
export type Position = {
  row: number;
  col: number;
};

export type Wolf = Position & {
  regionId: number;
};

export type CellStatus = 'empty' | 'wolf' | 'excluded';

export type RegionGrid = number[][];

export type LevelDifficulty =
  | 'normal'
  | 'hard'
  | 'very-hard'
  | 'legendary';

export type GameLevel = {
  id: number;
  worldId: number;
  levelNumber: number;
  size: number;
  difficulty: LevelDifficulty;
  regions: RegionGrid;
  solution: Position[];
};

export type GameState = {
  level: GameLevel;
  wolves: Position[];
  excludedCells: Position[];
};
