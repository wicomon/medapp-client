import { LoginForm } from "./includes/LoginForm";

const LoginPage = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center bg-gray-100 px-5'>
      <div className='bg-white p-8 rounded shadow-md w-full max-w-sm m-'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Medicapp</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
