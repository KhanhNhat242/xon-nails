declare module 'html-to-docx' {
    interface HTMLtoDOCXOptions {
        table?: { row?: { cantSplit?: boolean } };
        footer?: boolean;
        pageNumber?: boolean;
        font?: string;
        fontSize?: number;
        margins?: { top?: number; bottom?: number; left?: number; right?: number };
    }

    function HTMLtoDOCX(
        html: string,
        headerHtml: string | null,
        options?: HTMLtoDOCXOptions
    ): Promise<Buffer>;

    export default HTMLtoDOCX;
}