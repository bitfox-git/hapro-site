![image](https://github.com/user-attachments/assets/50435af7-2da9-4b79-800d-5b90a8f3930c)

This is the repository for the landing page site of hapro. 

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
- [Authors](#authors)
- [Related](#related)

## Description

Hapro-site is the repository for the site located at [hapro.cloud](https://hapro.cloud). This readme is created to guide you through how to develop and deploy the project.

This site is meant to serve as an entrypoint for people to sign up for an account to start using hapro. You can find the related repositories at the end of this readme.

## Installation

> [!important]
> To install the project locally you will need to have pnpm installed. [You can find a guide to install it here](https://pnpm.io/installation).

Once you have pnpm installed you can install the dependencies by running ``pnpm i``. Congrats! You've installed the project.

## Setup

Create a ``.env`` file in the root of the project and fill in the following variables:
```env
POSTMARK_SERVER_TOKEN=<YOUR_POSTMARK_SERVER_TOKEN>
POSTMARK_RECEIVER_EMAIL=<YOUR_EMAIL_TO_RECIEVE_SIGNUPS>
```

## Usage

To run the project in development mode (used during development) you can simply run the following command in your terminal:
```shell
pnpm dev
```

If you want to preview the production build you can run the following command in your terminal:
```shell
pnpm build
```

After the build successfully finishes you can preview it by running the following command:
```shell
pnpm start
```

## Authors

- [@Wouter-Missler](https://www.github.com/Wouter-Missler)
- [@voslucas](https://www.github.com/vosLucas)
- [@DeShowErwt](https://github.com/DeShowErwt)

## Related

- [hapro-admin (hapro portal interface)](https://github.com/bitfox-git/hapro-admin)
- [hapro-addon (addon for home assistant)](https://github.com/bitfox-git/hapro-addon)
