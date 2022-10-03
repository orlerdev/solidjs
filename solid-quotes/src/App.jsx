import { render } from 'solid-js'
import { ErrorBoundary } from 'solid-js'

const Broken = (props) => {
  throw new Error('Oh no')
  return <>Never Getting Here </>
}

function App() {
  return (
    <>
      <div>Before</div>
      <ErrorBoundary fallback={(err) => err}>
        <Broken />
        <div>After</div>
      </ErrorBoundary>
    </>
  )
}

export default App
