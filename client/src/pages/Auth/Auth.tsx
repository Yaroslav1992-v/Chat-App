import React, { useState } from "react";
import { FormType, LoginForm, Logo, RegisterForm } from "../../components";

type form = "login" | "register";
export const Auth = () => {
  const [form, setForm] = useState<form>("login");
  const setFormType = () => {
    setForm((prevState) => (prevState === "login" ? "register" : "login"));
  };
  return (
    <section className="auth">
      <div className="form-wrapper">
        <Logo />
        <h5>{form === "login" ? "Sign In" : "Create account"}</h5>
        {form === "login" ? <LoginForm /> : <RegisterForm />}
        <hr />
        {form === "register" ? (
          <FormType
            onClick={setFormType}
            question="Don't have an account?"
            action="Register now!"
          />
        ) : (
          <FormType
            onClick={setFormType}
            question="Already have an account?"
            action="Sign in"
          />
        )}
      </div>
    </section>
  );
};
