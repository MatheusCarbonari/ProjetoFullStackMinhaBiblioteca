import { Outlet } from "react-router-dom";
import Menu from "../Components/Menu";
import Rodape from "../Components/Rodape";

const PaginaPadrao = () => {
    return(
        <>
            <Menu/>
            <Outlet/>
            <Rodape/>
        </>
    )
}

export default PaginaPadrao;