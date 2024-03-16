/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormConfig = {
  defaultValues?: FieldValues;
  resolver?: any;
};

type TTodoFormProps = {
  children: ReactNode;
  onsubmit: SubmitHandler<any>;
} & TFormConfig;

const TodoForm = ({ children, onsubmit, defaultValues, resolver }: TTodoFormProps) => {
  const formConfig: TFormConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  if (formConfig) {
    formConfig["defaultValues"] = defaultValues;
  }

  const submit: SubmitHandler<FieldValues> = (data) => {
    onsubmit(data);
    methods.reset();
  };

  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <Form onFinish={methods.handleSubmit(submit)} layout='vertical'>
        {children}
      </Form>
    </FormProvider>
  );
};

export default TodoForm;
