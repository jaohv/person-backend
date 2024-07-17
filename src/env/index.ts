import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
    NODE_ENV: z.enum(['dev']).default('dev'),
    PORT: z.coerce.number().default(3333)
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
    console.log("Variáveis de ambiente inválida", _env.error.format())

    throw new Error('Variáveis de ambiente inválida')
} 

export const env = _env.data