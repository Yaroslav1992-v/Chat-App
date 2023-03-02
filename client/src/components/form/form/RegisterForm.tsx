import React, { useRef, useState } from "react";
import { Button, InputField } from "../..";
import { validator } from "../../../utils/validator";
import { registerValidator } from "../../../utils/ValidatorConfig";
import { Errors } from "./Error.props";

export const RegisterForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<Errors>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData = {
      email: emailRef.current!.value,
      firstName: firstNameRef.current!.value,
      lastName: lastNameRef.current!.value,
      password: passwordRef.current!.value,
    };
    const errors = validator(userData, registerValidator);
    setErrors(errors);
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputField
        inputRef={firstNameRef}
        type="text"
        placeholder={"First Name"}
        name={"firstName"}
        error={errors?.firstName}
      />
      <InputField
        inputRef={lastNameRef}
        type="text"
        placeholder={"Last Name"}
        name={"lastName"}
        error={errors?.lastName}
      />
      <InputField
        inputRef={emailRef}
        type="text"
        placeholder={"Email"}
        name={"email"}
        error={errors?.email}
      />
      <InputField
        inputRef={passwordRef}
        type="password"
        placeholder={"Password"}
        name={"password"}
        error={errors?.password}
      />
      <Button buttonText="Register" />
    </form>
  );
};
