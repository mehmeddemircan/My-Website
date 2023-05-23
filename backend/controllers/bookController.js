const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Book = require("../models/Book");

exports.createBook = catchAsyncErrors(async (req, res) => {
  try {
    const newBook = new Book(req.body);

    const savedBook = await newBook.save();

    res
      .status(200)
      .json({
        success: true,
        data: savedBook,
        message: "Başarılı Şekilde kitap oluşturuldu",
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.getBooksWithPagination = catchAsyncErrors(async(req,res) => {
    try {

        const page = parseInt(req.query.page) || 1; // Get the page number from the query parameter, default to 1 if not provided
        const limit = parseInt(req.query.limit) || 4; // Get the limit from the query parameter, default to 10 if not provided
    
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
    
        const totalBooks = await Book.countDocuments();

        const books = await Book.find().skip(startIndex).limit(limit);
        res.status(200).json({
            totalBooks,
            currentPage : page ,
            totalPages: Math.ceil(totalBooks / limit),
            results: books
        })

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

exports.updateBook = catchAsyncErrors(async(req,res) => {
    try {
        
        const updatedBook = await Book.findByIdAndUpdate(req.params.bookId,{$set : req.body},{new : true })
        res.status(200).json({success : true , data : updatedBook, message : 'Başarılı şekilde defter güncellendi '})
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

exports.deleteBook = catchAsyncErrors(async(req,res) => {
    try {

        await Book.findByIdAndDelete(req.params.bookId)

        res.status(200).json({message : 'Başarılı Şekilde kitap silindi '})


    } catch (error) {
        res.status(500).json({error : error.message})
    }
})


