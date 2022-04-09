import { DasboardHeader } from "../../components/dashboard-header";
import { Container, Content } from "./style";
import { BsFillPlusCircleFill } from "react-icons/bs";
import User from "../../assets/user.png";

export const UserPlacePage = () => {
  return (
    <Container>
      <DasboardHeader />
      <Content>
        <div className="categories">
          <img src={User} alt="algo" />
          <span>Quarto</span>
          <span> {0} itens cadastrados</span>
        </div>
        <div className="categories">
          <img src={User} alt="algo" />
          <span>Cozinha</span>
          <span> {0} itens cadastrados</span>
        </div>
        <div className="categories">
          <img src={User} alt="algo" />
          <span>Sala</span>
          <span> {0} itens cadastrados</span>
        </div>
        <div className="categories">
          <BsFillPlusCircleFill />
          <span>Adicionar cômodo</span>
        </div>
      </Content>
    </Container>
  );
};
