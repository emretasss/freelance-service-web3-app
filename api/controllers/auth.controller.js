export const register= (req,res) => {
    try{
        const newUser =new User({
            username:"test"
        })

        


    }
    catch(err){
        res.status(500).send("something went wrong");
        }

}
export const login= (req,res) => {

}
export const logout= (req,res) => {

}