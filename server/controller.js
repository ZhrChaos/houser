module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_houses()
            .then(houses => res.status(200).send(houses))
            .catch((err) => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong." })
                console.log(err)
            })
    },
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {property_name, address, city, state, zip} = req.body;

        dbInstance.create_house([property_name, address, city, state, zip])
            .then(() => res.sendStatus(200))
            .catch((err) => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong." })
                console.log(err)
            })
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.delete_house([params.id])
            .then(() => res.sendStatus(200))
            .catch((err) => {
                console.log(err)
            })
    }
}