module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/resources/", // Adjust the path based on your project structure
            outputPath: "static/resources/", // Adjust the path based on your project structure
          },
        },
      ],
    });

    return config;
  },
};
