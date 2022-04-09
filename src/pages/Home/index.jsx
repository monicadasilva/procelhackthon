import { Button, Paper } from "@mui/material";
import { Container, Content } from "./style";

export const Home = () => {
  return (
    <Container>
      <Content>
        <Paper variant="outlined" elevation={1} />
        <h1>Economia no seu bolso</h1>
        <h4>É seu direito ter uma casa mais economica</h4>
        <Button variant="contained" href="/login">
          Entrar
        </Button>
        <Button variant="outlined" href="/signup">
          Cadastrar
        </Button>
      </Content>
    </Container>
  );
};
