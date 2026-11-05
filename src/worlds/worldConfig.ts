
export type WorldDifficulty =
  | 'normal'
  | 'hard'
  | 'very-hard'
  | 'legendary';

export type WorldConfig = {
  id: number;
  name: string;
  boardSize: number;
  totalLevels: number;
  theme: string;
  unlocked: boolean;
};

export const WORLDS: WorldConfig[] = [
  {
    id: 1,
    name: 'Floresta dos Lobos',
    boardSize: 6,
    totalLevels: 30,
    theme: 'forest',
    unlocked: true,
  },
  {
    id: 2,
    name: 'Montanhas Geladas',
    boardSize: 8,
    totalLevels: 30,
    theme: 'snow',
    unlocked: false,
  },
  {
    id: 3,
    name: 'Floresta Sombria',
    boardSize: 10,
    totalLevels: 30,
    theme: 'dark-forest',
    unlocked: false,
  },
  {
    id: 4,
    name: 'Reino das Cinzas',
    boardSize: 12,
    totalLevels: 30,
    theme: 'volcano',
    unlocked: false,
  },
];
