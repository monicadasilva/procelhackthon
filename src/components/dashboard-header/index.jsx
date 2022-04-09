import { Container, Content } from "./style";

export const DasboardHeader = () => {
  const user = {
    name: "Maria",
  };

  return (
    <Container>
      <Content>
        <div className="header">
          <div className="user"></div>
          <span>Olá, {user.name}!</span>
        </div>
        <div className="menu-dash">
          <ul>
            <li>
              <a href="/dashboard">Overview</a>
            </li>
            <li>
              <a href="/myplace">Minha casa</a>
            </li>
            <li>
              <a href="/profile">Meu perfil</a>
            </li>
          </ul>
        </div>
      </Content>
    </Container>
  );
};
