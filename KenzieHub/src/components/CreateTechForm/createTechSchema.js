import { z } from "zod";

export const createTechSchema = z.object({
  title: z.string().nonempty("O nome da tecnologia é obrigatório."),
  status: z.string().nonempty("Selecione uma opção"),
});
