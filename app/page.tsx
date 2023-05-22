"use client"
import Image from "next/image"

import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
	const { data: session } = useSession()
	console.log({ session })
	if (session) {
		return (
			<>
				Signed in s {session?.user?.email} <br />
				<button onClick={() => signOut()}>Sign out</button>
			</>
		)
	}
	return (
		<>
			Not signed in <br />
			<button onClick={() => signIn()}>Sign in</button>
		</>
	)
}
