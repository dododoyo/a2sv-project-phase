import Image from "next/image";
import { signIn } from "next-auth/react";

const GoogleSignupButton = () => {
  const logInWithGoogle = () => {
    try {
      signIn("google", {
        callbackUrl: "/",
      });
    } catch (error) {}
  };
  return (
    <button
      onClick={logInWithGoogle}
      className="bg-white border text-customBlue border-gray-300 font-medium py-2.5 px-4 rounded-xl flex items-center justify-center w-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    >
      <div className="h-5 w-5 mr-2">
        <Image
          src="https://w7.pngwing.com/pngs/344/344/png-transparent-google-logo-google-logo-g-suite-google-text-logo-symbol-thumbnail.png"
          alt="Google logo"
          width={20}
          height={20}
        />
      </div>
      <span className="font-semibold">Sign Up with Google</span>
    </button>
  );
};

export default GoogleSignupButton;
