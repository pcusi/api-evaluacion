const http = require('request');

function register(req, res) {
    let url = 'https://reqres.in/api/register';

    let { email, password } = req.body;
    
    http.post(url, {form: {email: email, password: password}}, (err, response) => {

        let json = JSON.parse(response.body);

        if (response) return res.status(200).send({json});

    });


}

function registerUser(req, res) {
    let url = 'https://reqres.in/api/users';

    let { first_name, last_name, id } = req.body;
    
    http.post(url, {form: {first_name: first_name, last_name: last_name, id: id}}, (err, response) => {

        let json = JSON.parse(response.body);

        if (response) return res.status(200).send({json});

    });

}

function updateUser(req, res) {
    
    let id = req.params.id;

    let { email, first_name, last_name, avatar } = req.body;

    let url = `https://reqres.in/api/users/${id}`;
    
    http.post(url, {form: {email: email, 
        first_name: first_name,
        last_name: last_name,
        avatar: avatar}}, (err, response) => {

        let json = JSON.parse(response.body);

        if (response) return res.status(200).send({json});

    });

}

function getLista(req, res) {
    let url = 'https://reqres.in/api/users';
    http.get(url, (err, response) => {

        let json = JSON.parse(response.body);

        if (response.body) return res.status(200).send({data: json.data});
    });
}

function login(req, res) {

    let url = 'https://reqres.in/api/login';

    let { email, password } = req.body;
    
    http.post(url, {form: {email: email, password: password}}, (err, response) => {

        let json = JSON.parse(response.body);

        if (response) return res.status(200).send({json});

    });
}

function singleUser(req, res) {

    let id = req.params.id;

    let url = `https://reqres.in/api/users/${id}`;
    http.get(url, (err, response) => {

        let json = JSON.parse(response.body);

        if (response.body) return res.status(200).send({data: json.data});
    });
}

module.exports = {
    register,
    getLista,
    updateUser,
    registerUser,
    login,
    singleUser
}