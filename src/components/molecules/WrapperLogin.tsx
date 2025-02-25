import { ButtonsLogin } from "../atoms/ButtonsLogin";

export function WrapperLogin() {
  return (
    <div className="flex h-full w-24 flex-col justify-center gap-1 ">
      <ButtonsLogin
        text="Login"
        className="h-8 rounded bg-principal-550 font-semibold text-slate-900"
      />
      <ButtonsLogin
        text="Cadastrar-se"
        className=" text-primary-550 h-8 font-semibold text-white"
      />
    </div>
  );
}
