import { useState } from "react";
import {
  Button,
  TextField,
  Stack,
  Typography,
  Paper,
} from "@mui/material";
import { calcularSuma } from "../services/calculadoraService";

export const CalculadoraForm = () => {
  const [numero1, setNumero1] = useState<number>(0);
  const [numero2, setNumero2] = useState<number>(0);
  const [resultado, setResultado] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalcular = async () => {
    setError(null);

    try {
      const res = await calcularSuma({
        numero1,
        numero2,
        operacion: "SUMA",
      });

      setResultado(res.resultado);
    } catch {
      setError("Operación inválida");
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 400 }}>
      <Stack spacing={2}>
        <Typography variant="h6">Calculadora - Sumar</Typography>

        <TextField
          label="Número 1"
          type="number"
          value={numero1}
          onChange={(e) => setNumero1(Number(e.target.value))}
          fullWidth
        />

        <TextField
          label="Número 2"
          type="number"
          value={numero2}
          onChange={(e) => setNumero2(Number(e.target.value))}
          fullWidth
        />

        <Button variant="contained" onClick={handleCalcular}>
          Sumar
        </Button>

        {resultado !== null && (
          <Typography>Resultado: {resultado}</Typography>
        )}

        {error && <Typography color="error">{error}</Typography>}
      </Stack>
    </Paper>
  );
};
