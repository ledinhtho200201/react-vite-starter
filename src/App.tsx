import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { increment, decrement } from './redux/counter/counter.slice'
import { useAppDispatch, useAppSelector } from './redux/hook'

function App() {
  // const count = useSelector((state: RootState) => state.counter)
  const count = useAppSelector(state => state.counter)

  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <h1>My current count = {count.value}</h1>
        <div>
          <button onClick={() => dispatch(increment())}>Increase</button>
        </div>
        <div>
          <button onClick={() => dispatch(decrement())}>Decrease</button>
        </div>
      </div>
    </>
  )
}

export default App
