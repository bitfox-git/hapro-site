/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://hapro.cloud",
    generateRobotsTxt: process.env.NODE_ENV === "production",
};
