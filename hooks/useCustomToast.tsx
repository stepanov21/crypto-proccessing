import { toast } from "@/components/ui/use-toast";
import React from "react";

const useCustomToast = ({ isError, error }: { isError: any; error?: any }) => {
  console.log(error);
  if (isError) {
    //@ts-ignore
    if (error?.response?.status === 422) {
      toast({
        title: "Ошибка",
        description: "Заполните все поля",
        variant: "destructive",
      });
    }
    if (error?.response?.status === 401) {
      toast({
        title: "Ошибка",
        description: "Вы не авторизованны",
        variant: "destructive",
      });
    }
    if (error?.response?.status === 400) {
      toast({
        title: "Ошибка",
        description: "Неверные данные",
        variant: "destructive",
      });
    }
    if (error?.message === "Network Error") {
      toast({
        title: "Ошибка",
        description: "Сервер не отвечает, попробуйте позже",
        variant: "destructive",
      });
    }
  }
};

export default useCustomToast;
