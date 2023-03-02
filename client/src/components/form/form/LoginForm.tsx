import React, { useRef } from "react";
import { Button, InputField } from "../..";

export const LoginForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(emailRef.current?.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputField type="text" placeholder={"Email"} name={"email"} />
      <InputField type="password" placeholder={"Password"} name={"password"} />
      <Button buttonText="Sign In" />
    </form>
  );
};
