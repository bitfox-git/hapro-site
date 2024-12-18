/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://hapro.cloud",
    generateRobotsTxt: true,
    robotsTxtOptions: {
        transformRobotsTxt: (robotsTxt) => {
            if (process.env.NODE_ENV === "development") {
                return `User-agent: *
                        Disallow: /`;
            }

            return robotsTxt;
        },
    },
    // ...other options
};
