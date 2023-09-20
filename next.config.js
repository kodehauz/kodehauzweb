/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './static-img-loader.ts',
    },
}

module.exports = nextConfig
