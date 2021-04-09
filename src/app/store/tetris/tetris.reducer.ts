import { Action, createReducer, on } from '@ngrx/store';
import { PieceUtil } from 'src/app/core/util/piece.util';
import { Tetris } from 'src/app/core/model/tetris';
import { TetrisActions } from './tetris.actions';
import { MatrixUtil } from 'src/app/core/util/matrix.util';
import { GameState } from 'src/app/core/model/game-state.enum';

export const FEATURE_KEY = 'tetris';

export const initialState: Tetris = {
    matrix: MatrixUtil.getStartBoard(),
    current: PieceUtil.getRandomPiece(),
    next: PieceUtil.getRandomPiece(),
    sound: true,
    gameState: GameState.Loading,
};

const startReducer = on(TetrisActions.start, (state: Tetris) => {
    // start timer

    return {
        ...state,
        current: PieceUtil.getRandomPiece(),
        gameState: GameState.Started
    };
});

const pauseReducer = on(TetrisActions.pause, (state: Tetris) => {
    // stop timer

    return {
        ...state,
        gameState: GameState.Paused
    };
});

const resumeReducer = on(TetrisActions.resume, (state: Tetris) => {
    // start timer

    return {
        ...state,
        gameState: GameState.Started
    };
});

const resetReducer = on(TetrisActions.reset, (state: Tetris) => {
    // clear timer

    return {
        ...state,
        gameState: GameState.Loading
    };
});

const moveLeftReducer = on(TetrisActions.moveLeft, (state: Tetris) => {
    const newState = Object.assign({}, state);

    return newState;
});
 
const moveRightReducer = on(TetrisActions.moveRight, (state: Tetris) => {
    const newState = Object.assign({}, state);

    return newState;
});
 
const moveDownReducer = on(TetrisActions.moveDown, (state: Tetris) => {
    const newState = Object.assign({}, state);

    return newState;
});

const setSoundReducer = on(TetrisActions.setSound, (state: Tetris, actions) => {
    // call soundService

    return {
        ...state,
        sound: actions.open,
    };
});
 
const _tetrisReducer = createReducer(
  initialState,
  startReducer,
  pauseReducer,
  resumeReducer,
  resetReducer,
  moveLeftReducer,
  moveRightReducer,
  moveDownReducer,
  setSoundReducer,
);
 
export function tetrisReducer(state: Tetris | undefined, action: Action) {
  return _tetrisReducer(state, action);
}