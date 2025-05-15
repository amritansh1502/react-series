import './App.css'
import Card from './components/Card'

function App() {


  return (
    <>
      <h1 className="bg-green-400 text-black p-4  rounded-2xl">Tailwind CSS</h1>
     <Card userName="Amritansh" btnText = "click me!" />
     <Card userName = "Nispriha" btnText = "Please Click me !"/>
    </>
  )
}

export default App
