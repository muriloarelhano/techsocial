import { TypeOf, number, object, string } from 'zod';
import validator from 'validator';

export const cerateOrderSchema = object({
  userId: string().refine(validator.isAlphanumeric),
  description: string().nonempty(),
  quantity: number().positive(),
  price: number().positive(),
});

export type CreateOrderProps = TypeOf<typeof cerateOrderSchema>;
