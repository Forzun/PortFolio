

const createLandingPage = () => {
  return (
    <div>
      <header>
        <div className="logo">MyApp</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Welcome to MyApp</h1>
          <p>Discover the future of digital solutions</p>
          <button>Get Started</button>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
};
