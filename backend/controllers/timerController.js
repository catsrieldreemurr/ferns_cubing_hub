const Solve = require("../models/SavedSolves")

exports.TestController = (req, res, next) => {
  res.json({"test": "Hello world!"})
}

exports.SaveSolve = async (req, res, next) => {
  try{
    const solve = await Solve.create({
      scramble: req.body.scramble || 'DNF',
      solveTimeMs: req.body.time || 0
    })

    solve.save();

    res.status(200).json({
      message: "Successfully saved Solve!"
    })
  } catch (err){
    console.log(err);

    res.status(500).json({
      message: "Something went wrong. Try again later.", 
      failed: true
    })
  }
}