import { clsx } from 'clsx'
import { Button } from '@/components/ui/button'

export default function PageComponents() {
  return (
    <>
      <h1 className={clsx('')}>ChadCN Components</h1>
      <div className={'rounded-lg border border-gray-200 p-4'}>
        <Button>Button</Button>
      </div>
    </>
  )
}
