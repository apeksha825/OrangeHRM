import dotenv from 'dotenv';
dotenv.config();

function getRequiredEnv(name: string): string {
    const value = process.env[name];

    if (!value) {
        throw new Error(`Environment variable ${name} is not defined`);
    }

    return value;
}

export const env = {
    baseUrl: getRequiredEnv('BASE_URL'),
    username: getRequiredEnv('ORANGEHRM_USERNAME'),
    password: getRequiredEnv('ORANGEHRM_PASSWORD'),
    environment: process.env.ENVIRONMENT ?? 'qa'
};
if (!env.baseUrl) {
  throw new Error('BASE_URL is not defined in .env');
}

if (!env.username) {
  throw new Error('ORANGEHRM_USERNAME is not defined in .env');
}

if (!env.password) {
  throw new Error('ORANGEHRM_PASSWORD is not defined in .env');
}
