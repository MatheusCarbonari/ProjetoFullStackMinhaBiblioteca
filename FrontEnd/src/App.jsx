import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./Pages/paginaPadrao";
import Home from "./Pages/Home";
//Import Swiper Register
import { register } from 'swiper/element/bundle'
//Imports Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/free-mode';
import EditionOfBooks from "./Pages/Edition";
import AdicionarLivros from "./Pages/Adicionar";
import PaginaDeSucesso from "./Pages/PaginaDeSucesso";
import PaginaItens from "./Pages/PaginaItens";

register();


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/livro/:id" element={<PaginaItens/>}/>
          <Route path="/adicionarlivros" element={<AdicionarLivros/>}/>
          <Route path="/editar/:id" element={<EditionOfBooks/>}/>
        </Route>
        <Route path="/sucessoNaRequisicao" element={<PaginaDeSucesso/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
