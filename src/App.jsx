import './App.css'
import Counter from './before-hook/Counter'
import DataFetcher from './before-hook/DataFetcher'
import CounterWithHook from './with-hook/CounterWithHook'
import DataFetcherWithHook from './with-hook/DetaFetcherWithHook'

function App() {

  return (
    <>
      <div>
        <p><b>After hook</b></p>
        <CounterWithHook/>
        <DataFetcherWithHook/>
        <br/><br/><br/>
        <p><b>Before hook</b></p>
        <Counter/>
        <DataFetcher/>
      </div>
    </>
  )
}

export default App
