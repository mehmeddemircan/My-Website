import React, { Fragment , useState} from "react";

const AuthForm = () => {

    const [showRegister, setShowRegister] = useState(false)
    const handleChangeForm = () => {
        setShowRegister((prev) => !prev)
    }

  return (
    <Fragment>
    <section class="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
 
    <div class=" bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
      <div class="md:w-full px-5">
        <h2 class="text-2xl font-bold text-[#002D74]">{showRegister ? "Kayıt Ol" : "Giriş Yap" }</h2>
        <p class="text-sm mt-4 text-[#002D74]">If you have an account, please login</p>
        <form class="mt-6" action="#" method="POST">
          {showRegister && (
            <Fragment>
                <div className="mb-2">
            <label class="block text-gray-700">Email Address</label>
            <input type="email" name="" id="" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
          </div>
          <div className="mb-2">
            <label class="block text-gray-700">Email Address</label>
            <input type="email" name="" id="" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
          </div>
            </Fragment>
          )}

          <div>
            <label class="block text-gray-700">Email Address</label>
            <input type="email" name="" id="" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
          </div>

          <div class="mt-2">
            <label class="block text-gray-700">Password</label>
            <input type="password" name="" id="" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required />
          </div>

          <div class="text-right mt-2">
            <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
          </div>

          <button type="submit" class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Log In</button>
        </form>

        <div class="mt-7 grid grid-cols-3 items-center text-gray-500">
          <hr class="border-gray-500" />
          <p class="text-center text-sm">OR</p>
          <hr class="border-gray-500" />
        </div>

        <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 ">
         
          <span class = "ml-4"> Login with Google</span>
        </button>

        <div class="text-sm flex justify-between items-center mt-3">
          <p>If you don't have an account...</p>
          <button class="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  " onClick={handleChangeForm}>{showRegister ? "Giriş Yap" : "Kayıt Ol"}</button>
        </div>
      </div>

     

    </div>
   
   
  </section>
 
    </Fragment>
  );
};

export default AuthForm;
