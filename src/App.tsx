import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Sjödin Software AB</h1>
        <p className="tagline">Software Development & Consulting</p>
      </header>

      <main>
        <section className="about">
          <h2>About</h2>
          <p>
            Building quality software solutions.
          </p>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <p>
            <a href="mailto:contact@sjodinsoftware.se">contact@sjodinsoftware.se</a>
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Sjödin Software AB</p>
      </footer>
    </div>
  )
}

export default App
