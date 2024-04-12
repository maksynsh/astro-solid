import { createSignal } from 'solid-js'

export default function Counter() {
  const [count, setCount] = createSignal(0)
  const add = () => setCount(count() + 1)
  const subtract = () => setCount(count() - 1)

  return (
    <>
      <div class="flex gap-6 w-full justify-center mt-6">
        <button class="select-none w-6 h-6" onClick={subtract}>-</button>
        <pre>{count()}</pre>
        <button class="select-none w-6 h-6" onClick={add}>+</button>
      </div>
    </>
  )
}
