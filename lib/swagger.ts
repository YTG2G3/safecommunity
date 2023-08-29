import { createSwaggerSpec } from 'next-swagger-doc';

export const getApiDocs = async () => {
    const spec = createSwaggerSpec({
        apiFolder: 'app/api',
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'SafeCommunity API',
                version: '0.0.1',
            },
            components: {
                securitySchemes: {
                    GithubOAuth: {
                        type: 'oauth2',
                        flows: {
                            authorizationCode: {
                                authorizationUrl: "https://github.com/login/oauth/authorize",
                                scopes: {
                                    "read:user": "Read user profile data",
                                    "user:email": "Access user email addresses (read-only)"
                                }
                            }
                        }
                    }
                }
            },
            security: [
                {
                    GithubOAuth: [
                        "read:user",
                        "user:email"
                    ]
                }
            ]
        },
    });

    return spec;
};