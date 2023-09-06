'use client';

import { createUser } from '@/apps/webclient/services/user';
import { CreateUserProps, createUserSchema } from '@/apps/webclient/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function CreateUser() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<CreateUserProps>({
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit = useCallback(async (data: CreateUserProps) => {
    console.log(data);
    setIsLoading(true);
    try {
      await createUser(data);
      toast.success('Usuário criado com sucesso');
    } catch (error) {
      toast.error('Erro ao cadastrar usuário');
    }
    setIsLoading(false);
  }, []);

  return (
    <div>
      <h1 className="text-2xl mb-8">Criar Usuário</h1>
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
            className="input  w-full max-w-xs"
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
            className="input  w-full max-w-xs"
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
            className="input  w-full max-w-xs"
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
            className="input  w-full max-w-xs"
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
            className="input  w-full max-w-xs"
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
            className="input  w-full max-w-xs"
            {...register('phoneNumber')}
          />
          {errors.phoneNumber && (
            <span className="text-red-300">Número de telefone inválido</span>
          )}
        </div>

        <input
          form="create-user-form"
          type="submit"
          disabled={isLoading}
          className="btn btn-primary col-start-3 place-self-end"
        />
      </form>
    </div>
  );
}
