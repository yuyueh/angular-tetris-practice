import { Action, createReducer, on } from '@ngrx/store';
import { PieceUtil } from 'src/app/core/util/piece.util';
import { Tetris } from 'src/app/core/model/tetris';
import { TetrisActions } from './tetris.actions';
import { MatrixUtil } from 'src/app/core/util/matrix.util';
import { GameState } from 'src/app/core/model/game-state.enum';
import { ArrayUtil } from 'src/app/core/util/common.util';

export const FEATURE_KEY = 'tetris';

function createState() {
    return new Tetris(
        MatrixUtil.getStartBoard(),
        PieceUtil.getRandomPiece(),
        PieceUtil.getRandomPiece(),
        true,
        GameState.Loading
    );
}

const initialState: Tetris = createState();

const startReducer = on(TetrisActions.start, (_: Tetris) => {
    return createState().set('gameState', GameState.Started);
});

const restartGameReducer = on(TetrisActions.restart, (_: Tetris) => {
    return createState().set('isLock', true);
});

const pauseReducer = on(TetrisActions.pause, (state: Tetris) => {
    return state.set('gameState', GameState.Paused).set('isLock', true);
});

const resumeReducer = on(TetrisActions.resume, (state: Tetris) => {
    return state.set('gameState', GameState.Started).set('isLock', false);
});

const resetReducer = on(TetrisActions.reset, (state: Tetris) => {
    return state.set('gameState', GameState.Loading).set('isLock', true);
});

const moveLeftReducer = on(TetrisActions.moveLeft, (state: Tetris) => {
    if (state.isLock) return state;

    const newState = state
        .clearCurrentPiece()
        .set('current', state.current.moveLeft());

    return newState.isCollidedWithLeft() || newState.isCollidedWithSolid()
        ? state
        : newState.drawCurrentPiece();
});

const moveRightReducer = on(TetrisActions.moveRight, (state: Tetris) => {
    if (state.isLock) return state;

    const newState = state
        .clearCurrentPiece()
        .set('current', state.current.moveRight());

    return newState.isCollidedWithRight() || newState.isCollidedWithSolid()
        ? state
        : newState.drawCurrentPiece();
});

const moveDownReducer = on(TetrisActions.moveDown, (state: Tetris) => {
    if (state.isLock) return state;

    const newState = state
        .clearCurrentPiece()
        .set('current', state.current.moveDown());

    return newState.isCollidedWithBottom() || newState.isCollidedWithSolid()
        ? state.nextPiece()
        : newState.drawCurrentPiece();
});

const autoReducer = on(TetrisActions.auto, (state: Tetris) => {
    if (state.isLock) return state;

    const newState = state
        .clearCurrentPiece()
        .set('current', state.current.moveDown());

    return newState.isCollidedWithBottom() || newState.isCollidedWithSolid()
        ? state.nextPiece()
        : newState.drawCurrentPiece();
});

const rotateReducer = on(TetrisActions.rotate, (state: Tetris) => {
    if (state.isLock) return state;

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
    if (state.isLock) return state;

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
        return state.set('sound', open);
    }
);

const refreshRowReducer = on(
    TetrisActions.refreshRow,
    (state: Tetris, { row, filled }) => {
        return row !== undefined && filled !== undefined
            ? state.set(
                  'matrix',
                  ArrayUtil.set(
                      state.matrix,
                      row,
                      MatrixUtil.getDefaultRow(filled)
                  )
              )
            : state;
    }
);

const _tetrisReducer = createReducer(
    initialState,
    startReducer,
    restartGameReducer,
    pauseReducer,
    resumeReducer,
    resetReducer,
    moveLeftReducer,
    moveRightReducer,
    moveDownReducer,
    autoReducer,
    rotateReducer,
    fallReducer,
    setSoundReducer,
    refreshRowReducer
);

export function tetrisReducer(state: Tetris | undefined, action: Action) {
    return _tetrisReducer(state, action);
}
