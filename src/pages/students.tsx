import { useEffect, useState } from 'react'
import {useParams, useSearchParams} from 'react-router-dom'

type Student = {
  id: number
  name: string
  email: string
  phone: string
  website: string
}

function Students() {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`)
        }

        const data = await response.json()
        setStudents(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load students')
      } finally {
        setLoading(false)
      }
    }

    fetchStudents()
  }, [])

  return (
    <section>
      <h2>Students</h2>
      {loading ? (
        <p>Loading students...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name} — {student.email}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Students


