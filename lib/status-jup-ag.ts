import { JSDOM } from 'jsdom';

export interface IHtmlParse {
    title: string;
    uptimePercent: string;
    data: {
        title: string;
        uptime: string;
        downtime?: string;
    }[];
};

export const getDataChart = async (url: string) => {
    const data = await fetch(url, { next: { revalidate: 3600 } }),
        dataToText = await data.text(),
        parserData = htmlParser(dataToText);

    return parserData;
};


export const htmlParser = (data: string) => {
    const results: IHtmlParse = {
        title: '',
        uptimePercent: 'string',
        data: [],
    };

    const dom = new JSDOM(data);
    const doc = dom.window.document;

    const uptime = doc.querySelectorAll('.flex.justify-between.items-center');
    const title = doc.querySelectorAll('.p-2.font-medium.text-statuspage-neutral-800');
    const upDay = doc.querySelectorAll('.text-center.text-small');
    const downtimeSelectors = doc.querySelectorAll('.mx-2.mb-2.mt-1.text-small');

    let downtimeCount = 0;

    title.forEach((item, index) => {
        const title = item?.textContent?.trim();
        const uptime = upDay[index]?.textContent?.trim();
        const downtime = downtimeSelectors[downtimeCount]?.textContent?.trim();

        if (title === 'Downtime' && title && uptime) {
            results.data.push({ title, uptime, downtime });
            downtimeCount += 1;
        } else {
            if (title && uptime) {
                results.data.push({ title, uptime });
            }
        }
    });

    uptime.forEach((item) => {
        const title = item.querySelector('.text-large .shrink')?.textContent?.trim();
        const uptime = item.querySelector('.shrink-0 .text-statuspage-green')?.textContent?.trim();

        if (title && uptime) {
            results.title = title;
            results.uptimePercent = uptime;
        }
    });

    return results;
};

