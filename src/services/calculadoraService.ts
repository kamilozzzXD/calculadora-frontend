import axios from "axios";

export interface OperacionRequest {
  numero1: number;
  numero2: number;
  operacion: "SUMA";
}

export interface OperacionResponse {
  resultado: number;
}

const api = axios.create({
  baseURL: "http://calculadora-backend:8080/api/calculadora",
});

export const calcularSuma = async (
  data: OperacionRequest
): Promise<OperacionResponse> => {
  const response = await api.post<OperacionResponse>("/calculadora", data);
  return response.data;
};
