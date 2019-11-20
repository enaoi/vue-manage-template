const { resolve } = require("path");

module.exports = {
    productionSourceMap: false,
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    "primary-color": "#26bca9"
                },
                javascriptEnabled: true
            }
        }
    },
    chainWebpack: config => {
        const svgRule = config.module.rule("svg");
        svgRule.uses.clear();
        svgRule.include
            .add(resolve("src/icons"))
            .end()
            .use("svg-sprite-loader")
            .loader("svg-sprite-loader")
            .options({
                symbolId: "icon-[name]"
            })
            .end();
        config.module
            .rule("svgo")
            .test(/\.svg$/)
            .include.add(resolve("src/icons/svg"))
            .end()
            .use("svgo-loader")
            .loader("svgo-loader")
            .options({
                externalConfig: "svgo-config.yml"
            });
        const scssRule = config.module.rule("scss");
        scssRule.include.add(resolve("src/assets"));
    },

    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "scss",
            patterns: [resolve(__dirname, "src/assets/constant.scss")]
        }
    }
};
