'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import { TypeOf, object, string } from 'zod';

const createUserSchema = object({
  firstName: string().nonempty(),
  lastName: string().nonempty(),
  document: string().nonempty(),
  email: string().email(),
  phoneNumber: string().min(10).refine(validator.isMobilePhone),
  birthDate: string(),
});

type CreateUserProps = TypeOf<typeof createUserSchema>;

const onSubmit = (data: CreateUserProps) => console.log(data);

export default function CreateUser() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<CreateUserProps>({
    resolver: zodResolver(createUserSchema),
  });

  return (
    <div>
      <h1 className="text-2xl">Criar Usuário</h1>
      <form
        id="create-user-form"
        className="mt-4 grid md:grid-cols-2 sm:grid-cols-1 gap-4 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Primeiro Nome</span>
          </label>
          <input
            type="text"
            placeholder="Primeiro Nome"
            className="input input-bordered w-full max-w-xs"
            {...register('firstName')}
          />
          {errors.firstName && (
            <span className="text-red-300">Primeiro nome é obrigatório</span>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Último Nome</span>
          </label>
          <input
            type="text"
            placeholder="Último Nome"
            className="input input-bordered w-full max-w-xs"
            {...register('lastName')}
          />
          {errors.lastName && (
            <span className="text-red-300">Último nome é obrigatório</span>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Documento</span>
          </label>
          <input
            type="text"
            placeholder="Documento"
            className="input input-bordered w-full max-w-xs"
            {...register('document')}
          />
          {errors.document && (
            <span className="text-red-300">Documento é obrigatório</span>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
            {...register('email')}
          />
          {errors.email && (
            <span className="text-red-300">E-mail inválido</span>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Data de Nascimento</span>
          </label>
          <input
            type="date"
            className="input input-bordered w-full max-w-xs"
            {...register('birthDate')}
          />
          {errors.birthDate && (
            <span className="text-red-300">Data de nascimento inválido</span>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Contato</span>
          </label>
          <input
            type="tel"
            placeholder="(00) 00000-0000"
            className="input input-bordered w-full max-w-xs"
            {...register('phoneNumber')}
          />
          {errors.phoneNumber && (
            <span className="text-red-300">Número de telefone inválido</span>
          )}
        </div>

        <input
          form="create-user-form"
          type="submit"
          className="btn btn-primary col-start-3"
        />
      </form>
    </div>
  );
}
