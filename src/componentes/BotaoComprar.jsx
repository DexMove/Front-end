import { ShoppingCart } from "lucide-react";
import "./BotaoComprar.css"
function BotaoComprar() {
  return (
    <button className="botao-comprar">
      <ShoppingCart size={24} />
      <span>Comprar</span>
    </button>
  );
}

export default BotaoComprar;