const getHomepage = (req,res) =>{
    res.send("Hello World with TommyHo & nodemon!");
}

const getABC = (req,res) =>{
    res.send("Check ABC!");
}

const getTommy = (req,res) =>{
    res.render("sample.ejs");
}

module.exports = {
    getHomepage,
    getABC,
    getTommy
};