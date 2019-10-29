module.exports = {
    webpack: (config, options, webpack) => {
        // nouveau point d'entrée
        config.entry.main = ["./server/src/index.ts"];

        // résolution automatique des extensions
        config.resolve = {
        extensions: [".ts", ".js", ".json"]
        };

        // loader Typescript
        config.module.rules.push({
        test: /\.ts$/,
        loader: "ts-loader"
        });

        return config;
    }
};
