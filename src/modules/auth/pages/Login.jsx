import InputElement from "@/components/InputElement";
import ButtonElement from "@/components/ButtonElement";
import { useState } from "react";
import { emailRegex } from "@/helpers/regex";
import { login } from "@/modules/auth/api/authApi.js";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isPassword, setIsPassword] = useState(true);
  // state and validation for email
  const [email, setEmail] = useState({
    value: "",
    isInvalid: null,
    errorMessage: null,
  });
  const onEmailChange = (e) => {
    setEmail({
      ...email,
      value: e.target.value,
      isInvalid:
        e.target.value == ""
          ? true
          : !emailRegex.test(e.target.value)
            ? true
            : false,
      errorMessage:
        e.target.value == ""
          ? "This field can't be empty"
          : !emailRegex.test(e.target.value)
            ? "Enter a valid email"
            : null,
    });
    setErrorMessage(null);
  };
  const onEmailBlur = () => {
    setEmail({
      ...email,
      isInvalid:
        email.value == "" ? true : !emailRegex.test(email.value) ? true : false,
      errorMessage:
        email.value == ""
          ? "This field can't be empty"
          : !emailRegex.test(email.value)
            ? "Enter a valid email"
            : null,
    });
    setErrorMessage(null);
  };

  // state and validation for password
  const [password, setPassword] = useState({
    value: "",
    isInvalid: null,
    errorMessage: null,
  });
  const onPasswordChange = (e) => {
    setPassword({
      ...password,
      value: e.target.value,
      isInvalid: e.target.value == "" ? true : false,
      errorMessage: e.target.value == "" ? "This field can't be empty" : null,
    });
    setErrorMessage(null);
  };
  const onPasswordBlur = (e) => {
    setPassword({
      ...password,
      isInvalid: password.value == "" ? true : false,
      errorMessage: password.value == "" ? "This field can't be empty" : null,
    });
    setErrorMessage(null);
  };

  // const handleLogin = async () => {
  //   let loginResponse;
  //   
  //   if (isFormValid) {
  //     try {
  //       loginResponse = await login({
  //         email: email.value,
  //         password: password.value,
  //       });
  //       console.log("The response is here", loginResponse)
  //       // // if(response) navigate("/dashboard")
  //     } catch (error) {
  //       console.log("The response is", loginResponse)
  //       if (error.response.message.toLowerCase() == "user is not onboarded") {
  //         alert("User is not onboarded");
  //         // navigate("/onboarding", { state: loginResponse });

  //       }
  //       switch (error.response.data.error) {
  //         case "Invalid login credentials":
  //           setErrorMessage(error.response.data.error);
  //           break;
  //         case "Email does not exist":
  //           setEmail({
  //             ...email,
  //             isInvalid: true,
  //             errorMessage: error.response.data.error,
  //           });
  //           break;
  //         case "Email is inactive":
  //           setEmail({
  //             ...email,
  //             isInvalid: true,
  //             errorMessage: error.response.data.error,
  //           });
  //           break;
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  // }
  // };

  const handleUserLogin = async () => {

    setLoading(true);

    //check every item in the form is a valid input
    const isValid = (value) => value.isInvalid !== null && !value.isInvalid;
    const isFormValid = [email, password].every(isValid);

    //attempt login if inputs are valid
    if (isFormValid) {
      try {
        const loginResponse = await login({
          email: email.value,
          password: password.value,
        });

        loginResponse.isOnboarded ? navigate("/dashboard") : navigate("/onboarding", { state: loginResponse });
      } catch (error) {
        console.info(error);
        
      }
      finally {
        setLoading(false);
      }
    }
    else {
      setTimeout(() => {
        setLoading(false);
      }, 350);
      //handling empty field errors
      if (email.isInvalid === null)
        setEmail({
          ...email,
          isInvalid: true,
          errorMessage: "This field can't be empty.",
        });
      if (password.isInvalid === null)
        setPassword({
          ...password,
          isInvalid: true,
          errorMessage: "This field can't be empty.",
        });
    }
  }

  const togglePassword = () => setIsPassword(!isPassword)



  const defaultInputStyle = "w-[20rem]";
  return (
    <div className="flex flex-col gap-6 items-center mb-6">
      <img
        src="/src/assets/images/Logo.png"
        alt=""
        className="w-[10rem] h-[10rem] object-contain object-center"
      />
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      <InputElement
        label="Email"
        placement="outside"
        placeholder="Enter your email address"
        variant="bordered"
        onChange={onEmailChange}
        onBlur={onEmailBlur}
        isInvalid={email.isInvalid}
        errorMessage={email.errorMessage}
        customStyle={defaultInputStyle}
      />
      <InputElement
        label="Password"
        placement="outside"
        placeholder="Enter your password"
        variant="bordered"
        onChange={onPasswordChange}
        onBlur={onPasswordBlur}
        type={isPassword ? "password" : "text"}
        isInvalid={password.isInvalid}
        errorMessage={password.errorMessage}
        customStyle={defaultInputStyle}
        endContent={<FontAwesomeIcon icon="fa-solid fa-eye" className="cursor-pointer" onClick={togglePassword} />}
      />
      <p className="w-full flex justify-end text-xs font-medium hover:underline cursor-pointer">
        Reset Password?
      </p>
      <ButtonElement
        label="Login"
        color="secondary"
        customStyle="font-bold w-full"
        isLoading={loading}
        clickEvent={handleUserLogin}
      />

      <p className="font-medium text-blue-500 cursor-pointer hover:underline" onClick={() => navigate("/auth/register/step_1")}>
        Create an account
      </p>
    </div>
  );
};

export default Login;
