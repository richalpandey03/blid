const Router = require('express-promise-router');
const {getAllCharacters, getACharacter} = require("./rickAndMontyApiController")

const routes = () => {
    const router = Router({ mergeParams: true });
    router.route("/getCharacter").get(getACharacter)
    router.route("/getCharacterList").get(getAllCharacters)
    return router;
};

module.exports = routes;