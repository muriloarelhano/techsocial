import { DateTime } from 'luxon';
import validator from 'validator';
import { TypeOf, object, string } from 'zod';

export const createUserSchema = object({
  firstName: string().nonempty(),
  lastName: string().nonempty(),
  document: string().nonempty(),
  email: string().email(),
  phoneNumber: string().min(10).max(11).refine(validator.isMobilePhone),
  birthDate: string().refine((value) => {
    const date = DateTime.fromJSDate(new Date(value));
    return date.isValid && date > DateTime.fromJSDate(new Date('1900-01-01'));
  }),
});

export type CreateUserProps = TypeOf<typeof createUserSchema>;
