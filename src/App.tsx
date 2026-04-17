import { MyMap } from './components/mymap'

function App() {

  return (
    <section className="flex flex-col h-screen">
      <header className="p-4">Hola</header>
      <main className="flex-1 h-full">
        <MyMap />
      </main>
      <footer className="p-4">Adios</footer>
    </section>
  )
}

export default App
