const User=require("../models/user")

async function handleUserRegistration(req,res) {
    const {firstname,surname,DOB,email,password}=req.body;
await User.create({
    firstname,
    surname,
    DOB,
    email,
    password,
});
console.log("its working")
return res.render("dashboard")
}


// async function handleUserLogin(req,res) {
//     const {email,password}=req.body;
//     const user=await User.findOne({email,password});
//     console.log(user)
//     if(!user){
//         return res.render("login_register",{
//             error:"Invaild Username or Password"
//         })
//     }

// console.log("its working")
// return res.render("live_matches")
// }


async function handleUserLogin(req, res) {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email, password });
  
      if (!user) {
        return res.render('login_register', {
          error: 'Invalid Username or Password',
        });
      }
  
      // Set user data in the session
      req.session.user = {
        id: user._id,
        email: user.email,
      };
  
      console.log('Login successful');
      return res.redirect('/dashboard');
    } catch (error) {
      console.error('Error during login:', error);
      return res.render('login_register', {
        error: 'An error occurred. Please try again later.',
      });
    }
  }
  


module.exports ={
    handleUserRegistration,
    handleUserLogin,
}