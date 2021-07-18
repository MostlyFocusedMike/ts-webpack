module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                }
            }

        ]
    },
    devtool: false, // this can be false for readable or 'eval' for ??? reasons, check the docs
    resolve: {
        extensions: ['.ts', '.js']
    }
}