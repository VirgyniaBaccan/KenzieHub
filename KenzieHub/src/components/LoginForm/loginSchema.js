import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().nonempty("Por favor, digite seu e-mail."),
  password: z.string().nonempty("Por favor, digite sua senha."),
});
