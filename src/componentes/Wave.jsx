import "./Wave.css";
import Laranja from "../assets/Vector-laranja.png";
import Amarelo from "../assets/Vector-amarelo.png";
import Verde from "../assets/Vector-verde.png";

function Wave() {
  return (
    <div className="wave-container">
      <img src={Verde} alt="" className="wave-layer wave-verde" />
      <img src={Amarelo} alt="" className="wave-layer wave-amarelo" />
      <img src={Laranja} alt="" className="wave-layer wave-laranja" />
    </div>
  );
}

export default Wave;