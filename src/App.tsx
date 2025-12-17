import './App.css'

function App() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Sjödin Software AB</h1>
          <p className="tagline">Transforming Tomorrow's Challenges Into Today's Solutions</p>
        </div>
      </section>

      <main className="container">
        <section className="intro">
          <h2>Engineering Excellence at Scale</h2>
          <p>
            We architect resilient, cloud-native ecosystems that empower organizations to
            accelerate their digital transformation journey. Our holistic approach combines
            cutting-edge technology with human-centered design thinking.
          </p>
        </section>

        <section className="services">
          <h2>What We Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>System Architecture</h3>
              <p>
                End-to-end platform modernization leveraging microservices,
                event-driven architectures, and seamless API orchestration.
              </p>
            </div>
            <div className="service-card">
              <h3>DevOps & Infrastructure</h3>
              <p>
                CI/CD pipelines, infrastructure-as-code, and observability solutions
                that enable continuous delivery at enterprise velocity.
              </p>
            </div>
            <div className="service-card">
              <h3>Technical Strategy</h3>
              <p>
                Roadmap development and technology due diligence to align your
                engineering investments with business outcomes.
              </p>
            </div>
            <div className="service-card">
              <h3>Team Enablement</h3>
              <p>
                Embedding agile methodologies and engineering best practices
                to cultivate high-performing, autonomous teams.
              </p>
            </div>
          </div>
        </section>

        <section className="approach">
          <h2>Our Approach</h2>
          <p>
            We believe in sustainable velocity over technical debt. By partnering closely with
            stakeholders across all verticals, we deliver iterative value while maintaining
            architectural integrity. Our battle-tested frameworks ensure measurable ROI
            and long-term scalability.
          </p>
        </section>

        <section className="contact">
          <h2>Let's Build Something Great</h2>
          <p>
            Ready to unlock your organization's full potential? Let's start a conversation.
          </p>
          <p>
            <a href="mailto:andreas@sjodinsoftware.se" className="contact-link">andreas@sjodinsoftware.se</a>
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
