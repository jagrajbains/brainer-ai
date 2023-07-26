import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <p>Hello AI Saas (Not protected)</p>

            <Link href="/sign-in">
                <Button>Login</Button>
            </Link>
        </div>
    )
}
