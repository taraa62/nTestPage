module.exports = (config) => {
    if (config.listDisableRoute) {
        return async (req, res, next) => {
            if (config.listDisableRoute.includes(req.originalUrl)) {
                return res.status(404).json({message: 'Not Found'});
            }
            next();
        };
    } else return null;
}
