import NextLinks from '@/components/draft/nextLinks'
import {Button} from '@/components/ui/button'

export default function PageComponents() {
    return (
        <main className={'container py-10'}>
            <h1>ChadCN Components</h1>
            <div className={'rounded-lg border border-gray-200 p-4'}>
                <Button>Button</Button>
            </div>
            <NextLinks/>
        </main>
    )
}
