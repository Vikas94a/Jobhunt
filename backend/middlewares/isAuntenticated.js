import jwt from "jsonwebtoken";

const isAuntenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "User not found",
        success: false,
      });
    }

    const decord = await jwt.verify(token, process.env.SECRET_KEY);

    if(!decord){
        return res.status(401).json({
            message:"Invalid token",
            success:false
        })
    }

    // Set the user ID from the decoded token
    req.id = decord.userId;

    next();

  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Authentication failed",
      success: false
    });
  }
};

export default isAuntenticated