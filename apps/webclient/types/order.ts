import { TypeOf, number, object, string } from 'zod';

export const OrderSchema = object({
  id: number({ coerce: true }).optional(),
  userId: number({ coerce: true }),
  description: string().nonempty(),
  quantity: number().positive(),
  price: number().positive(),
});

export type OrderProps = TypeOf<typeof OrderSchema>;
