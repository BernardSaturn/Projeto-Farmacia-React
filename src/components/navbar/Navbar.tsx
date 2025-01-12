import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();

  return (
    <>
      <div className="w-full bg-black text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold uppercase">
            Farmácia do Bernardo
          </Link>

          <div className="flex gap-4">
            <Link to="/produtos" className="hover:underline">
              Produtos
            </Link>
            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>
            <Link to="/cadastroCategoria" className="hover:underline">
              Cadastrar categoria
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
