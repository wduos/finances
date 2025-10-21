import "./Home.css";
import Header from "../../components/Header/Header";
import iconReload from "../../assets/icon-reload.svg";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <main>
        <div className="limiter">
          <section className="container">
            <div className="title-wrp">
              <h2>Gastos</h2>
              <button type="button">
                <img src={iconReload} alt="Recarregar" />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
