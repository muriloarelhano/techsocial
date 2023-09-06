import { TypeOf, number, object, string } from 'zod';

export const OrderSchema = object({
  id: number({ coerce: true }).optional(),
  userId: number({ coerce: true }),
  description: string().nonempty(),
  quantity: number({ coerce: true }).positive(),
  price: number({ coerce: true }).positive(),
});

export type OrderProps = TypeOf<typeof OrderSchema>;
