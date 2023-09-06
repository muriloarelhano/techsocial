'use client';

import {
  createOrder,
  getOrderById,
  updateOrder,
} from '@/apps/webclient/services';
import { getUsers } from '@/apps/webclient/services/user';
import { OrderProps, OrderSchema } from '@/apps/webclient/types/order';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { DevTool } from '@hookform/devtools';

export default function CreateProducts({ params }) {
  const [isSaving, setIsSaving] = useState(false);
  const [order, setOrder] = useState<OrderProps>();

  const isEditing = params.id != 'new';

  console.log({ isEditing });

  const { data, isError } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      return await getUsers();
    },
  });

  const {
    watch,
    register,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderProps>({
    resolver: zodResolver(OrderSchema),
  });

  const userId = watch('userId');

  useEffect(() => {
    if (isEditing) {
      (async () => {
        const order = await getOrderById(params.id);
        setOrder(order);
        for (const key of Object.keys(order)) {
          setValue(key, order[key]);
        }
      })();
    }
  }, [isEditing]);

  const onSubmit = useCallback(
    async (data: OrderProps) => {
      setIsSaving(true);
      try {
        if (isEditing && order) {
          await updateOrder({ id: order.id, ...data });
        } else {
          await createOrder(data);
        }
        toast.success(
          `Pedido ${isEditing ? 'editado' : 'cadastrado'} com sucesso`,
        );
      } catch (error) {
        toast.error('Erro ao cadastrar usuário');
      }
      setIsSaving(false);
    },
    [isEditing, order],
  );

  return (
    <div>
      <DevTool control={control} />
      <h1 className="text-2xl mb-8">
        {!isEditing ? 'Criar' : 'Editar'} Pedido
      </h1>

      <form
        id="create-user-form"
        className={'mt-4 grid grid-cols-2 gap-4 '}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Usuário</span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            {...register('userId')}
          >
            <option value={''}>Selecione um usuário</option>
            {data?.map((user, index) => (
              <option key={index + 1} value={user.id}>
                {user.firstName}
                {user.lastName}
              </option>
            ))}
          </select>

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
                className="input input-bordered  w-full max-w-xs"
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
                className="textarea textarea-bordered w-full max-w-xs"
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

            <button
              type="submit"
              disabled={isSaving}
              form="create-user-form"
              className="btn btn-primary place-self-end"
            >
              Salvar
            </button>
          </>
        ) : (
          ''
        )}
      </form>
    </div>
  );
}
