const axios = require('axios');

async function getAllCharacters(req,res){
    try{
        const page = req.query.page ? req.query.page : 1
        const getAllCharacters = await axios.get(`${process.env.RICK_MONTY_CHAR_API}?page=${page}`)
        const filteredData = getAllCharacters.data.results.map(({ id, name, status, species, type, gender, origin, location, image }) => ({
            id, name, status, species, type, gender, origin, location, image
        }));
        const responseData = {
            "info" : getAllCharacters.data.info,
            "results" : filteredData
        }
        res.status(200).send(responseData)
    }catch(err){
        console.log(err)
        res.status(500).json({
            message : "Error is getting all characters",
            err : err
        })
    }
}

async function getACharacter(req,res) {
    try{
        const id = req.query.id
        if(!req.query.id){
            return res.status(400).json({message : "No character Id"})
        }
        const getAllCharacters = await axios.get(`${process.env.RICK_MONTY_CHAR_API}/${id}`)
        const responseData = {
            id: getAllCharacters.data.id,
            name: getAllCharacters.data.name,
            status: getAllCharacters.data.status,
            species: getAllCharacters.data.species,
            type: getAllCharacters.data.type,
            gender: getAllCharacters.data.gender,
            origin: getAllCharacters.data.origin,
            location: getAllCharacters.data.location,
            image: getAllCharacters.data.image
        };
        res.status(200).send(responseData)
    }catch(err){
        console.log(err)
        res.status(500).json({
            message : "Error is getting a character",
            err : err
        })
    }
}

module.exports = {
    getAllCharacters, getACharacter
}
