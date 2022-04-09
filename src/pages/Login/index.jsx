import { Box, Button, TextField } from "@mui/material";
import { Container, Content } from "./style";

export const LoginPage = () => {
  return (
    <Container>
      <Content>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <span>
            Email
            <TextField name="email" size="small" />
          </span>
          <span>
            Senha
            <TextField name="password" size="small" />
          </span>

          <Button variant="contained" href="/dashboard">
            Login
          </Button>
        </Box>
      </Content>
    </Container>
  );
};
