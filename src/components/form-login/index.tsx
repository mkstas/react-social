import { FormEvent } from 'react';
import { TextField, Button } from '@/shared/ui';

export function FormLogin() {
  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className='mt-4 space-y-4' onSubmit={e => onFormSubmit(e)}>
      <TextField
        id='email'
        type='email'
        label='Электронная почта'
        error='Неверный формат почты'
        placeholder='example@yandex.ru'
      />
      <TextField
        id='password'
        type='password'
        label='Пароль'
        error='Неверная почта или пароль'
        placeholder='••••••••'
      />
      <Button>Войти</Button>
    </form>
  );
}
