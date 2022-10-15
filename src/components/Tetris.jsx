import React from 'react'

import Board from './Board'
import GameStats from './GameStats'

import { useBoard } from '../hooks/useBoard'
import { useGameStats } from '../hooks/useGameStats'

import './Tetris.css'

const Tetris = ({ rows, columns, setGameOver }) => {
    const [gameStats, addLinesCleared] = useGameStats()
    const [board, setBoard] = useBoard({ rows, columns })

    return (
        <div className='Tetris'>
            <Board board={board} />
            <GameStats gameStats={gameStats} />
        </div>
    )
}

export default Tetris
