import LoginForm from "@/components/custom/login-form";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md px-4 sm:max-w-lg">
        <LoginForm />
      </div>
    </div>
  );
}
