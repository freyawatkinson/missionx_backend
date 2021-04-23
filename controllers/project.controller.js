const {getAllProjects, getProject} = require('../models/project.model');
const {resultToJSON} = require('../utils');

const getOne = async (req, res) => {
    const { id } = req.params;
    if (id) {
        // SQL query to be run - getProject
        const queryResult = await getProject(id);
        console.log(queryResult);
        const jsonResult = resultToJSON(queryResult); 

        // If there are no rows returned in the SQL Query result. 
        if (jsonResult.length === 0) {
            res.status(204).end();
        } else {
            res.status(200).json(jsonResult);
        }
    } else {
        console.error('Error: Missing id');
        res.status(400).send('Missing id');
    }
};

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

const update = async (req, res) => {
    res.status(200).json({user: 'Freya Watkinson'});
};

module.exports = {get, getOne, update}