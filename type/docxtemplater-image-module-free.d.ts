declare module 'docxtemplater-image-module-free' {
    interface ImageModuleOptions {
        getImage: (tagValue: string) => Promise<Buffer> | Buffer
        getSize: (img: Buffer, tagValue: string) => [number, number]
    }

    export default class ImageModule {
        constructor(options: ImageModuleOptions)
    }
}
