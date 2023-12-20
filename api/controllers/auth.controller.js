export const register= async (req,res) => {
    try{
        const newUser =new User({
            username:"test",
            email:"test",
            password:"test",
            country:"test",
            
        })
        
        await newUser.save();




    }
    catch(err){
        res.status(500).send("something went wrong");
        }

}
export const login= (req,res) => {

}
export const logout= (req,res) => {

}