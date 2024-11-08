import { PLAYER, WIN_PATTERNS } from '../constants';

export const createEmptyBoard = () => new Array(9).fill(PLAYER.NONE);

export const checkFullBoard = (board) => board.every((value) => value !== PLAYER.NONE);

export const findIndexWinPattern = (player, board) =>
    WIN_PATTERNS.findIndex((patern) => patern.every((value) => board[value] === player));
