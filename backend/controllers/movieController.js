const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Movie = require("../models/Movie");

exports.createMovie = catchAsyncErrors(async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const savedMovie = await newMovie.save();
    res
      .status(200)
      .json({
        success: true,
        data: savedMovie,
        message: "Başarılı Şekilde film oluşturuldu ",
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.getMoviesWithPagination = catchAsyncErrors(async(req,res) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
    
        const totalMovies = await Movie.countDocuments();

        const movies = await Movie.find().skip(startIndex).limit(limit);

        res.status(200).json({
            totalMovies,
            currentPage : page ,
            totalPages: Math.ceil(totalMovies / limit),
            results: movies
        })


    } catch (error) {
        res.status(500).json({error : error.message})
    }
})


exports.updateMovie = catchAsyncErrors(async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.movieId,
      { $set: req.body },
      { new: true }
    );
    res
      .status(200)
      .json({
        success: true,
        data: updatedMovie,
        message: "Başarılı şekilde film güncellendi ",
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.deleteMovie = catchAsyncErrors(async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.movieId);
    res
      .status(200)
      .json({ success: true, message: "Başarılı şekilde film silindi " });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
