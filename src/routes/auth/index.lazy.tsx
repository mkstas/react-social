import { FormEvent } from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import { UButton, UForm, UHeading, ULink, USheet, UTextfield } from '@/shared/ui';
import { ROUTES } from '@/shared/constants';

export const Route = createLazyFileRoute('/auth/')({
  component: AuthIndex,
});

function AuthIndex() {
  const onSumbmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <USheet className='py-4 px-6'>
      <UHeading className='mb-6'>Вход</UHeading>
      <UForm onSubmit={onSumbmitForm} className='mb-2'>
        <UTextfield
          id='email'
          type='email'
          name='email'
          placeholder='example@mail.ru'
          label='Электронная почта'
          error='Неверный логин или пароль'
        />
        <UTextfield
          id='password'
          type='password'
          name='password'
          placeholder='••••••••'
          label='Пароль'
          error=''
        />
        <UButton>Войти</UButton>
      </UForm>
      <ULink to={ROUTES.REGISTER}>Еще нет аккаунта? Зарегистрироваться</ULink>
    </USheet>
  );
}
