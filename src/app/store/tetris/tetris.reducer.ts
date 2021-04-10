import { Action, createReducer, on } from '@ngrx/store';
import { PieceUtil } from 'src/app/core/util/piece.util';
import { Tetris } from 'src/app/core/model/tetris';
import { TetrisActions } from './tetris.actions';
import { MatrixUtil } from 'src/app/core/util/matrix.util';
import { GameState } from 'src/app/core/model/game-state.enum';
import { Tile } from 'src/app/core/model/tile';

export const FEATURE_KEY = 'tetris';

function clearCurrentPiece(state: Tetris) {
    PieceUtil.getPositionOnGrid(state.current).forEach(([x, y]) => {
        state.matrix[x][y] = new Tile(0);
    });
}

export const initialState: Tetris = new Tetris(
    MatrixUtil.getStartBoard(),
    PieceUtil.getRandomPiece(),
    PieceUtil.getRandomPiece(),
    true,
    GameState.Loading,
);

const startReducer = on(TetrisActions.start, (state: Tetris) => {
    // start timer
    
    return state
            .set('current', PieceUtil.getRandomPiece())
            .set('gameState', GameState.Started);
});

const pauseReducer = on(TetrisActions.pause, (state: Tetris) => {
    // stop timer

    return state.set('gameState', GameState.Paused);
});

const resumeReducer = on(TetrisActions.resume, (state: Tetris) => {
    // start timer

    return state.set('gameState', GameState.Started);
});

const resetReducer = on(TetrisActions.reset, (state: Tetris) => {
    // clear timer

    return state.set('gameState', GameState.Loading);
});

const moveLeftReducer = on(TetrisActions.moveLeft, (state: Tetris) => {
    return state;
});
 
const moveRightReducer = on(TetrisActions.moveRight, (state: Tetris) => {
    return state;
});
 
const moveDownReducer = on(TetrisActions.moveDown, (state: Tetris) => {
    const { current, matrix } = state;

    // clear view
    clearCurrentPiece(state);
    
    // move done
    const p = current.moveDown();

    // if (Collided) {
    //     return state;
    // } else {
    //      draw
    // }

    return state;
});

const setSoundReducer = on(TetrisActions.setSound, (state: Tetris, { open }) => {
    // call soundService

    return state.set('sound', open);
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