import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { Container, Content } from "./style";

export const SignupPage = () => {
  const [type, setType] = useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Container>
      <Content>
        <h1>Crie sua conta</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <span>
            Tipo cadastro
            <Select
              value={type}
              onChange={handleChange}
              displayEmpty
              size="small"
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"PF"}>Pessoa física</MenuItem>
              <MenuItem value={"PJ"}>Pessoa Jurídca</MenuItem>
            </Select>
          </span>
          <span>
            Nome Completo
            <TextField name="name" size="small" />
          </span>
          <span>
            CPF/CNPJ
            <TextField name="document" size="small" />
          </span>
          <span>
            Email
            <TextField name="email" size="small" />
          </span>
          <span>
            Senha
            <TextField name="password" size="small" />
          </span>
          <span>
            Confirme sua senha
            <TextField name="password-confirm" size="small" />
          </span>
          <Button variant="contained" href="/dashboard">
            Criar Conta
          </Button>
          <Button variant="text" href="/">
            Cancelar
          </Button>
        </Box>
      </Content>
    </Container>
  );
};
