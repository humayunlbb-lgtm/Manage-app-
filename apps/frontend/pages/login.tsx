import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import LoginForm from '../components/LoginForm'

export default function Login() {
  const router = useRouter()
  const [error,setError]=useState<string|null>(null)

  async function handleLogin(email: string, password: string) {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, { email, password }, { withCredentials: true })
      if (res.data?.role) {
        router.push(`/dashboard/${res.data.role.toLowerCase()}`)
      } else {
        router.push('/')
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Login failed')
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <LoginForm onSubmit={handleLogin} error={error} />
      </div>
    </main>
  )
}
