'use client';

import { createOrder } from '@/apps/webclient/services';
import { getUsers } from '@/apps/webclient/services/user';
import {
  CreateOrderProps,
  cerateOrderSchema,
} from '@/apps/webclient/types/order';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function CreateProducts() {
  const { data, isError } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      return await getUsers();
    },
  });

  const [isSaving, setIsSaving] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm<CreateOrderProps>({
    resolver: zodResolver(cerateOrderSchema),
  });

  const onSubmit = useCallback(async (data: CreateOrderProps) => {
    setIsSaving(true);
    try {
      await createOrder(data);
      toast.success('Pedido criado com sucesso');
    } catch (error) {
      toast.error('Erro ao cadastrar usuário');
    }
    setIsSaving(false);
  }, []);

  const userId = watch('userId');

  return (
    <div>
      <h1 className="text-2xl mb-8">Criar Pedido</h1>
      <form
        id="create-user-form"
        className={'mt-4 grid md:grid-cols-2 sm:grid-cols-1 gap-4 '}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Usuário</span>
          </label>
          <Controller
            name="userId"
            control={control}
            render={({ field }) => (
              <select
                className="select select-bordered w-full max-w-xs"
                {...field}
              >
                <option value={''}>Selecione um usuário</option>
                {data?.map((user, index) => (
                  <option key={index + 1} value={user.id}>
                    {user.firstName}
                    {user.lastName}
                  </option>
                ))}
              </select>
            )}
          />

          {errors.userId && (
            <span className="text-red-300">
              É obrigatório selecionar um usuário
            </span>
          )}

          {isError && (
            <span className="text-red-300">
              Ocorreu um erro ao listar o usuários
            </span>
          )}
        </div>
        {userId ? (
          <>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Preço</span>
              </label>
              <input
                type="number"
                className="input input-bordered   w-full max-w-xs"
                {...register('price')}
              />
              {errors.quantity && (
                <span className="text-red-300">O preço é obrigatório</span>
              )}
            </div>
            <div className="form-control w-full max-w-xs row-span-3">
              <label className="label">
                <span className="label-text">Descrição</span>
              </label>
              <textarea
                rows={10}
                cols={40}
                placeholder="Descrição da venda"
                className="textarea w-full max-w-xs"
                {...register('description')}
              />
              {errors.quantity && (
                <span className="text-red-300">
                  Descrição da venda do produto é obrigatória
                </span>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Quantidade</span>
              </label>
              <input
                type="number"
                className="input input-bordered   w-full max-w-xs"
                {...register('quantity')}
              />
              {errors.quantity && (
                <span className="text-red-300">A quantidade é obrigatória</span>
              )}
            </div>
          </>
        ) : (
          ''
        )}

        <input
          form="create-user-form"
          type="submit"
          disabled={isSaving}
          className="btn btn-primary place-self-end"
        />
      </form>
    </div>
  );
}
