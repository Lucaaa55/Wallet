import { useEffect, useState } from 'react'
import * as SQLite from 'expo-sqlite'
import { Chat, Message } from '@/types/include'

const db = SQLite.openDatabaseSync('notes.db')

export function useNotes({ title, id, messages }: {
    title: string | undefined,
    id: number | undefined,
    messages: string | undefined,
}) {
    const [data, setData] = useState<Message[]>([])

    const Start = async () => {
        await db.runAsync('CREATE TABLE IF NOT EXISTS notes(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, messages TEXT, time TEXT)')
        
        if (!id) return

        const result = await db.getAllAsync('SELECT messages FROM notes WHERE id = ?', [id]) as { messages: string }[]
        console.log(result)

        if (result.length > 0 && result[0].messages && result[0].messages !== '') {
            try {
                setData(JSON.parse(result[0].messages))
            } catch (error) {
                console.error('Error parsing messages:', error)
                setData([])
            }
        } else {
            setData([])
        }
    }

    const Remove = async (removeId: number) => {
        if (!removeId) return
        await db.runAsync('DELETE FROM notes WHERE id = ?', [removeId])
    }

    const GetAll = async () => {
        const result = await db.getAllAsync('SELECT * FROM notes') as Chat[]
        
        return result
    }

    const Save = async () => {
        if (!title) return
        await db.runAsync('INSERT INTO notes(title, messages, time) VALUES(?, ?, ?)', [title, '', new Date().toString()])

        console.log('Saved')
    }

    const Update = async ({
        id, 
        title,
        newMessages,
    }: {
        id: number,
        title: string | null,
        newMessages: string | null,
    }) => {
        if (!id) return
        
        if (newMessages && !title) {
            const messagesToUpdate = newMessages || messages

            await db.runAsync('UPDATE notes SET messages = ?, time = ? WHERE id = ?', [messagesToUpdate as string, new Date().toString(), id])
        } else if (title && !newMessages) {
            await db.runAsync('UPDATE notes SET title = ?, time = ? WHERE id = ?', [title as string, new Date().toString(), id])
        }
        
    }

    useEffect(() => {
        Start()
    }, [])
    
    return {
        data,
        save: Save,
        update: Update,
        all: GetAll,
        remove: Remove,
    }
}