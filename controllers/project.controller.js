const {getAllProjects} = require('../models/project.model');
const {resultToJSON} = require('../utils');

const get = async (req, res) => {
    const {langCode} = req.body;
    if (langCode) {
        const queryResult = await getAllProjects(langCode);
        const jsonResult = resultToJSON(queryResult);

        if (jsonResult.length === 0) {
            res.status(204).end();
        } else {
            res.status(200).json(jsonResult);
        }
    } else {
        console.error('Error: Missing parameter');
        res.status(400).send('Missing Parameter');
    }
};

const getOne = async (req, res) => {
    res.status(200).json({user: 'Freya Watkinson'});
};

const update = async (req, res) => {
    res.status(200).json({user: 'Freya Watkinson'});
};

module.exports = {get, getOne, update}