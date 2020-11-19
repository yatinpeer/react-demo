import React, { Component } from 'react'
import Board from '@lourenci/react-kanban'
import '@lourenci/react-kanban/dist/styles.css'
import Toggle from '../components/Toggle'
import Welcome from '../components/Welcome'

const togglex = <Toggle />
const board = {
    columns: [
        {
            id: 1,
            title: 'Backlog',
            cards: [
                {
                    id: 1,
                    title: 'Drag-n-drop support',
                    description: 'Move a card between the columns'
                },
                {
                    id: 2,
                    title: 'Drag-n-drop support 2',
                    description: 'Move a card between the columns'
                },
                {
                    id: 3,
                    title: 'Drag-n-drop support 3',
                    description: 'Move a card between the columns'
                },
            ]

        },
        {
            id: 2,
            title: 'Doing',
            cards: [
                {
                    id: 4,
                    title: 'Drag-n-drop support 4',
                    description: 'Move a card between the columns'
                },
                {
                    id: 5,
                    title: 'Drag-n-drop support 5',
                    description: 'Move a card between the columns'
                },
                {
                    id: 6,
                    title: 'Drag-n-drop support 6',
                    description: 'Move a card between the columns'
                },

            ]
        }
    ]
}

class DragDropPage extends Component {

    constructor() {
        super()
    }
    componentDidMount() {
        console.log("load comp" + togglex);
    }
    render() {
        return (
            <div className="py-3">
                <Welcome name="Drag & Drop" />
                <div className="mt-3">
                    <Board initialBoard={board} />
                </div>
            </div>
        )
    }
}

export default DragDropPage