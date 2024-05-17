import InputElement from "@/components/InputElement";
import ButtonElement from "@/components/ButtonElement";

const inputFields = [
    {label: "Email",
     placement:"outside",
     placeholder: "Enter your email",
     variant: "bordered",
    },
    {label: "Password",
    placement:"outside",
    placeholder: "Enter your password",
    variant: "bordered",
    isPassword : true
   }
]

const Login = () => {
  return <div className="flex flex-col gap-6 items-center mb-6">
    <img src="/src/assets/images/Logo.png" alt="" className="w-[10rem] h-[10rem] object-contain object-center"/>
    {
        inputFields.map(field=>
             <InputElement key={field.label} label={field.label} placeholder={field.placeholder} placement={field.placement} type={field.isPassword? "password" :"text"}/>
        )
    }
     <p className="w-full flex justify-end text-xs font-medium hover:underline cursor-pointer">Reset Password?</p>
    <ButtonElement label="Login" color="secondary" customStyle="font-bold w-full" />
    <p className="font-medium text-blue-500 cursor-pointer hover:underline">Create an account</p>
  </div>;
};

export default Login;
