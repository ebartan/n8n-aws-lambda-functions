import { CheerioCrawler, Configuration } from 'crawlee';
import { router } from './routes.js';

const startUrls = ['https://crawlee.dev'];

export const handler = async (event, context) => {
    const crawler = new CheerioCrawler({
        requestHandler: router,
    }, new Configuration({
        persistStorage: false,
    }));

    await crawler.run(startUrls);

    return {
        statusCode: 200,
        body: await crawler.getData(),
    }
};