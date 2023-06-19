import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty("O nome é obrigatório.")
      .min(2, "O nome precisa conter pelo menos 2 caracteres."),
    password: z
      .string()
      .nonempty("A senha é obrigatória")
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .regex(
        /^(?=.*\d).+$/,
        "A senha deve conter pelo menos um caractere especial"
      ),
    confirm: z.string(),
    course_module: z.string().nonempty("Selecione uma opção"),
    email: z
      .string()
      .nonempty("O e-mail é obrigatório")
      .email("O e-mail fornecido é inválido"),
    bio: z
      .string()
      .nonempty("A bio é obrigatória")
      .min(10, "A mensagem precisa conter pelo menos 10 caracteres."),
    contact: z.string().nonempty("Insira um contato válido"),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "As senhas não correspondem",
    path: ["confirm"],
  });