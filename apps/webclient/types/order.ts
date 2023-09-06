import validator from 'validator';
import { TypeOf, number, object, string } from 'zod';

export const cerateOrderSchema = object({
  userId: string().refine(validator.isAlphanumeric),
  description: string().nonempty(),
  quantity: number().positive(),
  price: number().positive(),
});

export type CreateOrderProps = TypeOf<typeof cerateOrderSchema>;
