import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface ErrorPageProps {
    code: number
    title: string
    message1: string
    message2: string
}

const ErrorPage: React.FC<ErrorPageProps> = ({
    code,
    title,
    message1,
    message2,
}) => {
    return (
        <div className="bg-gray-100 py-10 px-4 min-h-screen w-full overflow-x-hidden">
        <div className="flex flex-col items-center justify-start min-h-screen bg-muted-100 text-foreground px-4 md:px-0">
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col gap-12 items-center justify-center">
                    <div className="flex flex-col gap-6 ">
                        <div className="text-center">
                            <p className="text-black text-[40px] md:text-[96px] leading-[107.52px] font-medium text-foreground-100">
                                {code}
                            </p>
                            <p className="text-black text-[20px] font-medium leading-normal md:text-[24px]  text-foreground-100">
                                {title}
                            </p>
                        </div>
                        <div className="text-center">
                            <p className="text-black b3 md:b1">{message1}</p>
                            <p className="text-black b3 md:b1">{message2}</p>
                        </div>
                    </div>
                    <Link href="/">
                        <Button className="text-white px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 transition">
                            GOHOME
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ErrorPage