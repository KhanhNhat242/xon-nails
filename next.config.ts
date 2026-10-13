import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        optimizeCss: true,
    },
    serverExternalPackages: ['@imgly/background-removal'],

    webpack: (config, { isServer }) => {
        if (isServer) {
            config.externals = [
                ...(Array.isArray(config.externals) ? config.externals : []),
                '@imgly/background-removal',
                'onnxruntime-web',
            ];
        }

        // Bỏ qua onnxruntime-web khi webpack phân tích (chỉ chạy trên browser)
        config.resolve = {
            ...config.resolve,
            alias: {
                ...config.resolve?.alias,
                'onnxruntime-web': false,
                'onnxruntime-web/webgpu': false,
            },
        };

        config.experiments = {
            ...config.experiments,
            asyncWebAssembly: true,
        }

        config.module.rules.push({
            test: /\.wasm$/,
            type: 'asset/resource',
        })

        return config
    },
}

export default nextConfig