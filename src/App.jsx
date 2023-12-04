import Form from "./components/Form"
import './index.css'

function App() {
  return (
    <div className="bg-dark dark h-full overflow-hidden max-h-screen max-w-screen sm:px-6 lg:px-8">
      <div className="flex w-full justify-center">
        <img src="./abbreve-logo.png" alt="Abbreve Logo" className="w-40 pt-10" />
      </div>
      <Form />
    </div>
  )
}

export default App