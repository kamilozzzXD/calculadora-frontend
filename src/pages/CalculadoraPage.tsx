import { Container } from "@mui/material";
import { CalculadoraForm } from "../components/CalculadoraForm";

export const CalculadoraPage = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <CalculadoraForm />
    </Container>
  );
};
