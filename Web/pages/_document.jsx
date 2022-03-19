import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const InitialProps = await Document.getInitialProps(ctx)
        return { ...InitialProps }

    }

    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Kanit&family=Sarabun:wght@300&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Kanit&family=Sarabun:wght@300&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument

