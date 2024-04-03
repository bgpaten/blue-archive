import Characters from "../Characters2/Characters";
import Hero from "../Hero/Hero";
import "./Main.css";

const Main = () => {
  return (
    <div className="content">
      <Hero />
      <Characters />
    </div>
  );
};

export default Main;
