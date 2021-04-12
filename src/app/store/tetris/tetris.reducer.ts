import { Action, createReducer, on } from '@ngrx/store';
import { PieceUtil } from 'src/app/core/util/piece.util';
import { Tetris } from 'src/app/core/model/tetris';
import { TetrisActions } from './tetris.actions';
import { MatrixUtil } from 'src/app/core/util/matrix.util';
import { GameState } from 'src/app/core/model/game-state.enum';

export const FEATURE_KEY = 'tetris';

export const initialState: Tetris = new Tetris(
    MatrixUtil.getStartBoard(),
    PieceUtil.getRandomPiece(),
    PieceUtil.getRandomPiece(),
    true,
    GameState.Loading
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
    const newState = state
        .clearCurrentPiece()
        .set('current', state.current.moveLeft());

    return newState.isCollidedWithLeft() || newState.isCollidedWithSolid()
        ? state
        : newState.drawCurrentPiece();
});

const moveRightReducer = on(TetrisActions.moveRight, (state: Tetris) => {
    const newState = state
        .clearCurrentPiece()
        .set('current', state.current.moveRight());

    return newState.isCollidedWithRight() || newState.isCollidedWithSolid()
        ? state
        : newState.drawCurrentPiece();
});

const moveDownReducer = on(TetrisActions.moveDown, (state: Tetris) => {
    const newState = state
        .clearCurrentPiece()
        .set('current', state.current.moveDown());

    return newState.isCollidedWithBottom() || newState.isCollidedWithSolid()
        ? state.nextPiece()
        : newState.drawCurrentPiece();
});

const rotateReducer = on(TetrisActions.rotate, (state: Tetris) => {
    let newState = state
        .clearCurrentPiece()
        .set('current', state.current.rotate());

    if (newState.isCollidedWithRight()) {
        const current = newState.current.moveLeft(
            newState.current.extraLengthOnTheRight
        );
        newState = newState.set('current', current);
    }

    return newState.isCollidedWithSolid() ? state : newState.drawCurrentPiece();
});

const fallReducer = on(TetrisActions.fall, (state: Tetris) => {
    let oldState = state;
    let newState = state
        .clearCurrentPiece()
        .set('current', state.current.moveDown());

    while (
        !newState.isCollidedWithBottom() &&
        !newState.isCollidedWithSolid()
    ) {
        oldState = newState;
        newState = newState.set('current', newState.current.moveDown());
    }

    return oldState.nextPiece();
});

const setSoundReducer = on(
    TetrisActions.setSound,
    (state: Tetris, { open }) => {
        // call soundService

        return state.set('sound', open);
    }
);

const _tetrisReducer = createReducer(
    initialState,
    startReducer,
    pauseReducer,
    resumeReducer,
    resetReducer,
    moveLeftReducer,
    moveRightReducer,
    moveDownReducer,
    rotateReducer,
    fallReducer,
    setSoundReducer
);

export function tetrisReducer(state: Tetris | undefined, action: Action) {
    return _tetrisReducer(state, action);
}
