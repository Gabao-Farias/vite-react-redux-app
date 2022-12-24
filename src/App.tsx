import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { increment, incrementByAmount, decrement, incrementWithUnusefulArguments } from './redux/counterSlice'
import './App.css'
import { useFetchBreedQuery } from './services/api/dogs'

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching } = useFetchBreedQuery(numDogs);
  const dispatch = useAppDispatch();

  const handleClickIncrement = () => {
    dispatch(incrementByAmount(3));
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNumDogs(Number(e.target.value));
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Count: {count}</h2>
      <div className="card">
        <button onClick={handleClickIncrement}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <select value={numDogs} onChange={handleChangeSelect}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <div>
        <p>Number of dogs fetched {data.length}</p>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} height={250}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
