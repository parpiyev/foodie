module.exports = {
    openapi: "3.0.3",
    info: {
        title: "Foodie APP API",
        description: "Foodie APP API Documentation",
        version: "1.0.0",
        contact: {
            name: "Muhammadqodir",
        },
    },
    components: {
        securitySchemes: {
            "JWT": {
                type: 'apiKey',
                description: 'JWT authorization of an API',
                name: 'Authorization',
                in: 'header',
            },
        },
    },
    tags: [
        "Login and Registration",
        "Souces",
        "Drinks",
        "Snacks",
        "Locations",
        "Foods",
        "Categories",
        "Order"
    ],
    components: {
        securitySchemes: {
            "JWT": {
                type: 'apiKey',
                description: 'JWT authorization of an API',
                name: 'Authorization',
                in: 'header',
            },
        },
        schemas: {
            "common-error": {
                type: "object",
                properties: {
                    success: {
                        type: "boolean",
                        default: false
                    },
                    message: {
                        type: "string",
                    }
                }
            },
        },
        examples: {
            "token-not-found": {
                value: {
                    success: false,
                    message: "Token not found!"
                }
            },
            "token-is-invalid": {
                value: {
                    success: false,
                    message: "Token is invalid!"
                }
            },
            "souce-not-found": {
                value: {
                    success: false,
                    message: "There is no such kind of souce"
                }
            },
            "drink-not-found": {
                value: {
                    success: false,
                    message: "There is no such kind of drink"
                }
            },
            "snack-not-found": {
                value: {
                    success: false,
                    message: "There is no such kind of snack"
                }
            },
            "user-not-found": {
                value: {
                    success: false,
                    message: "User not found"
                }
            },
            "gio-not-found": {
                value: {
                    success: false,
                    message: "There is no such kind of location"
                }
            },
            "food-not-found": {
                value: {
                    success: false,
                    message: "There is no such kind of food"
                }
            }
        },
        responses: {
            "auth-token-not-found": {
                description: "Not found",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/common-error"
                        },
                        examples: {
                            "token-not-found": {
                                $ref: "#/components/examples/token-not-found"
                            },
                            "user-not-found": {
                                $ref: "#/components/examples/user-not-found"
                            }
                        }
                    }
                }
            },
            "auth-token-souce-not-found": {
                description: "Not found",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/common-error"
                        },
                        examples: {
                            "token-not-found": {
                                $ref: "#/components/examples/token-not-found"
                            },
                            "souce-not-found": {
                                $ref: "#/components/examples/souce-not-found"
                            },
                            "user-not-found": {
                                $ref: "#/components/examples/user-not-found"

                            }
                        }
                    }
                }
            },
            "auth-token-drink-not-found": {
                description: "Not found",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/common-error"
                        },
                        examples: {
                            "token-not-found": {
                                $ref: "#/components/examples/token-not-found"
                            },
                            "drink-not-found": {
                                $ref: "#/components/examples/drink-not-found"
                            },
                            "user-not-found": {
                                $ref: "#/components/examples/user-not-found"

                            }
                        }
                    }
                }
            },
            "auth-token-not-invalid": {
                description: "Invalid Token",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/common-error"
                        },
                        examples: {
                            "token-is-invalid": {
                                $ref: "#/components/examples/token-is-invalid"
                            }
                        }
                    }
                }
            },
            "auth-token-snacks-not-found": {
                description: "Not found",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/common-error"
                        },
                        examples: {
                            "token-not-found": {
                                $ref: "#/components/examples/token-not-found"
                            },
                            "snack-not-found": {
                                $ref: "#/components/examples/snack-not-found"
                            },
                            "user-not-found": {
                                $ref: "#/components/examples/user-not-found"

                            }
                        }
                    }
                }
            },
            "auth-token-gio-not-found": {
                description: "Not found",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/common-error"
                        },
                        examples: {
                            "token-not-found": {
                                $ref: "#/components/examples/token-not-found"
                            },
                            "gio-not-found": {
                                $ref: "#/components/examples/gio-not-found"
                            },
                            "user-not-found": {
                                $ref: "#/components/examples/user-not-found"

                            }
                        }
                    }
                }
            },
            "auth-token-foods-not-found": {
                description: "Not found",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/common-error"
                        },
                        examples: {
                            "token-not-found": {
                                $ref: "#/components/examples/token-not-found"
                            },
                            "food-not-found": {
                                $ref: "#/components/examples/food-not-found"
                            },
                            "user-not-found": {
                                $ref: "#/components/examples/user-not-found"

                            }
                        }
                    }
                }
            }
        }
    },
    apis: ["**/*Route.js"],
    paths: {
        "/api/users": {
            post: {
                tags: [
                    "Login and Registration"
                ],
                summary: "Registration",
                parameters: [{
                        "in": "query",
                        "name": "name",
                        required: true,
                        schema: {
                            type: "string",
                        }
                    },
                    {
                        "in": "query",
                        "name": "birthday",
                        required: true,
                        schema: {
                            type: "string",
                        }
                    },
                    {
                        "in": "query",
                        "name": "phone",
                        required: true,
                        schema: {
                            type: "string",
                        }
                    },
                    {
                        "in": "query",
                        "name": "password",
                        required: true,
                        schema: {
                            type: "string",
                        }
                    }
                ],
                responses: {
                    '200': {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        token: {
                                            type: "string"
                                        }
                                    },
                                    example: {
                                        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGUwMTQ4YzcyYTkxMGI2NjllNGU4MlAiLCJpYXQiOjE2MjUyOTgwNjJ9.RE201leEGdwnBWmOt8ARL1IgnHdNIJNT3-mHqwy1Gg4"
                                    }
                                }
                            }
                        }
                    },
                    '400': {
                        description: "Bad request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean"
                                        },
                                        message: {
                                            type: "string"
                                        }
                                    },
                                    example: {
                                        success: false,
                                        message: "User already exist"
                                    }
                                }
                            }
                        }
                    },
                }
            }
        },
        "/api/auth": {
            post: {
                tags: [
                    "Login and Registration"
                ],
                summary: "Login",
                parameters: [

                    {
                        "in": "query",
                        "name": "phone",
                        required: true,
                        schema: {
                            type: "string",
                        }
                    },
                    {
                        "in": "query",
                        "name": "password",
                        required: true,
                        schema: {
                            type: "string",
                        }
                    }
                ],
                responses: {
                    '200': {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        token: {
                                            type: "string"
                                        }
                                    },
                                    example: {
                                        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGUwMTQ4YzcyYTkxMGI2NjllNGU4MlAiLCJpYXQiOjE2MjUyOTgwNjJ9.RE001leEGdwnBWmOt8ARL1IgnHdNIJNT3-mHqwy1Gg4"
                                    }
                                }
                            }
                        }
                    },
                    '400': {
                        description: "Bad request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean"
                                        },
                                        message: {
                                            type: "string"
                                        }
                                    },
                                    example: {
                                        success: false,
                                        message: "Passsword is incorrect!"
                                    }
                                }
                            }
                        }
                    },
                    '403': {
                        description: "Forbidden",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean"
                                        },
                                        message: {
                                            type: "string"
                                        }
                                    },
                                    example: {
                                        success: false,
                                        message: "Phone number is incorrect!"
                                    }
                                }
                            }
                        }
                    },
                }
            }
        },
        "/api/souces": {
            get: {
                tags: [
                    "Souces"
                ],
                security: [{
                    "JWT": []
                }],
                summary: "Get all souces",
                responses: {
                    '200': {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        },
                                        data: {
                                            type: "array",
                                            default: [{
                                                type: "object",
                                                properties: {
                                                    photo: {
                                                        type: "array",
                                                        default: [{
                                                            type: "string"
                                                        }]
                                                    },
                                                    _id: {
                                                        type: "string",
                                                    },
                                                    name: {
                                                        type: "string"
                                                    },
                                                    cost: {
                                                        type: "number"
                                                    },
                                                    description: {
                                                        type: "string"
                                                    }
                                                }
                                            }]
                                        }
                                    },
                                    example: {
                                        succes: true,
                                        data: [{
                                                photo: [
                                                    "/api/file/souces/image-162549321412d.png",
                                                    "/api/file/souces/image-162549321412p.png",
                                                    "/api/file/souces/image-162549321413z.png",
                                                    "/api/file/souces/image-162549321415v.png",
                                                    "/api/file/souces/image-162549321415e.png"
                                                ],
                                                _id: "60e30ede86104704587498ba",
                                                name: "Sous",
                                                cost: 3000,
                                                "discription": "Ushbu sahifada Toshkent shahridagi ishonchli va tasdiqlangan sotuvchilardan Souslar, ketchup, mayonezlar kategoriyasiga aloqador mahsulotlarni sotib olishingiz mumkin. Glotr.uz Toshkent shahridagi Souslar, ketchup, mayonezlar  bo'yicha eng yaxshi takliflarni taqdim etadi. Qulay narxlar, foydalanuvchilarga qulay interfeys, ishonchli hamkorlar va Toshkent shahrida Souslar, ketchup, mayonezlar kategoriyasidan mahsulot sotib olgan mijozlarning haqiqiy izohlari - bularning barchasini katalogimizning ushbu sahifasida topasiz."
                                            },
                                            {
                                                photo: [
                                                    "/api/file/souces/image-16254933191l9.png",
                                                    "/api/file/souces/image-16254933191n1.png"
                                                ],
                                                _id: "60e30f4786104704587498ec",
                                                name: "Sous yellow",
                                                cost: 3000,
                                                "discription": "Ushbu sahifada Toshkent shahridagi ishonchli va tasdiqlangan sotuvchilardan Souslar, ketchup, mayonezlar kategoriyasiga aloqador mahsulotlarni sotib olishingiz mumkin. Glotr.uz Toshkent shahridagi Souslar, ketchup, mayonezlar  bo'yicha eng yaxshi takliflarni taqdim etadi. Qulay narxlar, foydalanuvchilarga qulay interfeys, ishonchli hamkorlar va Toshkent shahrida Souslar, ketchup, mayonezlar kategoriyasidan mahsulot sotib olgan mijozlarning haqiqiy izohlari - bularning barchasini katalogimizning ushbu sahifasida topasiz."
                                            },
                                            {
                                                photo: [
                                                    "/api/file/souces/image-1625493391182.png",
                                                    "/api/file/souces/image-1625493391288.png",
                                                    "/api/file/souces/image-1625493391090.png"
                                                ],
                                                _id: "60e30f8f86104704587498ee",
                                                name: "Sous clear",
                                                cost: 3000,
                                                "discription": "Ushbu sahifada Toshkent shahridagi ishonchli va tasdiqlangan sotuvchilardan Souslar, ketchup, mayonezlar kategoriyasiga aloqador mahsulotlarni sotib olishingiz mumkin. Glotr.uz Toshkent shahridagi Souslar, ketchup, mayonezlar  bo'yicha eng yaxshi takliflarni taqdim etadi. Qulay narxlar, foydalanuvchilarga qulay interfeys, ishonchli hamkorlar va Toshkent shahrida Souslar, ketchup, mayonezlar kategoriyasidan mahsulot sotib olgan mijozlarning haqiqiy izohlari - bularning barchasini katalogimizning ushbu sahifasida topasiz."
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        $ref: "#/components/responses/auth-token-not-found"
                    },
                    '401': {
                        $ref: "#/components/responses/auth-token-not-invalid"
                    },
                }
            },
        },
        "/api/souces/{id}": {
            get: {
                tags: [
                    "Souces"
                ],
                security: [{
                    "JWT": []
                }],
                parameters: [{
                    "in": "path",
                    "name": "id",
                    required: true,
                    schema: {
                        type: "string",
                    }
                }],
                summary: "Get specific souce",
                responses: {
                    '200': {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        },
                                        data: {
                                            type: "object",
                                            properties: {
                                                photo: {
                                                    type: "array",
                                                    default: [{
                                                        type: "string"
                                                    }]
                                                },
                                                _id: {
                                                    type: "string",
                                                },
                                                name: {
                                                    type: "string"
                                                },
                                                cost: {
                                                    type: "number"
                                                },
                                                description: {
                                                    type: "string"
                                                }
                                            }
                                        }
                                    },
                                    example: {
                                        succes: true,
                                        data: {
                                            photo: [
                                                "/api/file/souces/image-162549321412d.png",
                                                "/api/file/souces/image-162549321412p.png",
                                                "/api/file/souces/image-162549321413z.png",
                                                "/api/file/souces/image-162549321415v.png",
                                                "/api/file/souces/image-162549321415e.png"
                                            ],
                                            _id: "60e30ede86104704587498ba",
                                            name: "Sous",
                                            cost: 3000,
                                            "discription": "Ushbu sahifada Toshkent shahridagi ishonchli va tasdiqlangan sotuvchilardan Souslar, ketchup, mayonezlar kategoriyasiga aloqador mahsulotlarni sotib olishingiz mumkin. Glotr.uz Toshkent shahridagi Souslar, ketchup, mayonezlar  bo'yicha eng yaxshi takliflarni taqdim etadi. Qulay narxlar, foydalanuvchilarga qulay interfeys, ishonchli hamkorlar va Toshkent shahrida Souslar, ketchup, mayonezlar kategoriyasidan mahsulot sotib olgan mijozlarning haqiqiy izohlari - bularning barchasini katalogimizning ushbu sahifasida topasiz."
                                        }
                                    }
                                }
                            }
                        },
                    },
                    '404': {
                        $ref: "#/components/responses/auth-token-souce-not-found"
                    },
                    '401': {
                        $ref: "#/components/responses/auth-token-not-invalid"
                    },
                },

            }
        },
        "/api/drinks": {
            get: {
                tags: [
                    "Drinks"
                ],
                security: [{
                    "JWT": []
                }],
                summary: "Get all Drinks",
                responses: {
                    '200': {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        },
                                        data: {
                                            type: "array",
                                            default: [{
                                                type: "object",
                                                properties: {
                                                    photo: {
                                                        type: "array",
                                                        default: [{
                                                            type: "string"
                                                        }]
                                                    },
                                                    _id: {
                                                        type: "string",
                                                    },
                                                    name: {
                                                        type: "string"
                                                    },
                                                    cost: {
                                                        type: "number"
                                                    },
                                                    description: {
                                                        type: "string"
                                                    }
                                                }
                                            }]
                                        }
                                    },
                                    example: {
                                        success: true,
                                        data: [{
                                            photo: ["/api/file/drinks/image-1625490974185.png", "/api/file/drinks/image-1625490974182.png", "/api/file/drinks/image-1625490974183.png", "/api/file/drinks/image-1625490974185.png", "/api/file/drinks/image-1625490974186.png"],
                                            _id: "60e3061e86104704587478d2",
                                            name: "Bardak Choy",
                                            cost: 3000,
                                            "discription": "Ushbu sahifada Toshkent shahridagi ishonchli va tasdiqlangan sotuvchilardan Souslar, ketchup, mayonezlar kategoriyasiga aloqador mahsulotlarni sotib olishingiz mumkin. Glotr.uz Toshkent shahridagi Souslar, ketchup, mayonezlar  bo'yicha eng yaxshi takliflarni taqdim etadi. Qulay narxlar, foydalanuvchilarga qulay interfeys, ishonchli hamkorlar va Toshkent shahrida Souslar, ketchup, mayonezlar kategoriyasidan mahsulot sotib olgan mijozlarning haqiqiy izohlari - bularning barchasini katalogimizning ushbu sahifasida topasiz."
                                        }, {
                                            photo: ["/api/file/drinks/image-1625491747205.png", "/api/file/drinks/image-1625491747206.png", "/api/file/drinks/image-1625491747207.png", "/api/file/drinks/image-1625491747209.png"],
                                            _id: "60e3092386104704585498d4",
                                            name: "Kofe",
                                            cost: 5000,
                                            "discription": "Ushbu sahifada Toshkent shahridagi ishonchli va tasdiqlangan sotuvchilardan Souslar, ketchup, mayonezlar kategoriyasiga aloqador mahsulotlarni sotib olishingiz mumkin. Glotr.uz Toshkent shahridagi Souslar, ketchup, mayonezlar  bo'yicha eng yaxshi takliflarni taqdim etadi. Qulay narxlar, foydalanuvchilarga qulay interfeys, ishonchli hamkorlar va Toshkent shahrida Souslar, ketchup, mayonezlar kategoriyasidan mahsulot sotib olgan mijozlarning haqiqiy izohlari - bularning barchasini katalogimizning ushbu sahifasida topasiz."
                                        }, {
                                            photo: ["/api/file/drinks/image-1625491845223.png", "/api/file/drinks/image-1625491845227.png", "/api/file/drinks/image-1625491845229.png", "/api/file/drinks/image-1625491845231.png", "/api/file/drinks/image-1625491845233.png"],
                                            _id: "60e3098586104704387498d6",
                                            name: "Coca-Cola",
                                            cost: 7500,
                                            "discription": "Ushbu sahifada Toshkent shahridagi ishonchli va tasdiqlangan sotuvchilardan Souslar, ketchup, mayonezlar kategoriyasiga aloqador mahsulotlarni sotib olishingiz mumkin. Glotr.uz Toshkent shahridagi Souslar, ketchup, mayonezlar  bo'yicha eng yaxshi takliflarni taqdim etadi. Qulay narxlar, foydalanuvchilarga qulay interfeys, ishonchli hamkorlar va Toshkent shahrida Souslar, ketchup, mayonezlar kategoriyasidan mahsulot sotib olgan mijozlarning haqiqiy izohlari - bularning barchasini katalogimizning ushbu sahifasida topasiz."
                                        }, {
                                            photo: ["/api/file/drinks/image-1625491974431.png", "/api/file/drinks/image-1625491974432.png", "/api/file/drinks/image-1625491974436.png", "/api/file/drinks/image-1625491974440.png"],
                                            _id: "60e30a0686104700587498d8",
                                            name: "Pepsi",
                                            cost: 7500,
                                            "discription": "Ushbu sahifada Toshkent shahridagi ishonchli va tasdiqlangan sotuvchilardan Souslar, ketchup, mayonezlar kategoriyasiga aloqador mahsulotlarni sotib olishingiz mumkin. Glotr.uz Toshkent shahridagi Souslar, ketchup, mayonezlar  bo'yicha eng yaxshi takliflarni taqdim etadi. Qulay narxlar, foydalanuvchilarga qulay interfeys, ishonchli hamkorlar va Toshkent shahrida Souslar, ketchup, mayonezlar kategoriyasidan mahsulot sotib olgan mijozlarning haqiqiy izohlari - bularning barchasini katalogimizning ushbu sahifasida topasiz."
                                        }]
                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        $ref: "#/components/responses/auth-token-not-found"
                    },
                    '401': {
                        $ref: "#/components/responses/auth-token-not-invalid"
                    },
                }
            },
        },
        "/api/drinks/{id}": {
            get: {
                tags: [
                    "Drinks"
                ],
                security: [{
                    "JWT": []
                }],
                parameters: [{
                    "in": "path",
                    "name": "id",
                    required: true,
                    schema: {
                        type: "string",
                    }
                }],
                summary: "Get specific drink",
                responses: {
                    '200': {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        },
                                        data: {
                                            type: "object",
                                            properties: {
                                                photo: {
                                                    type: "array",
                                                    default: [{
                                                        type: "string"
                                                    }]
                                                },
                                                _id: {
                                                    type: "string",
                                                },
                                                name: {
                                                    type: "string"
                                                },
                                                cost: {
                                                    type: "number"
                                                },
                                                description: {
                                                    type: "string"
                                                }
                                            }
                                        }
                                    },
                                    example: {
                                        success: true,
                                        data: {
                                            photo: ["/api/file/drinks/image-1635490974181.png", "/api/file/drinks/image-1655490974182.png", "/api/file/drinks/image-1625490974183.png", "/api/file/drinks/image-1675490974185.png", "/api/file/drinks/image-1625420974186.png"],
                                            _id: "60e3061e86104704587491d2",
                                            name: "Bardak Choy",
                                            cost: 3000,
                                            "discription": "Ushbu sahifada Toshkent shahridagi ishonchli va tasdiqlangan sotuvchilardan Souslar, ketchup, mayonezlar kategoriyasiga aloqador mahsulotlarni sotib olishingiz mumkin. Glotr.uz Toshkent shahridagi Souslar, ketchup, mayonezlar  bo'yicha eng yaxshi takliflarni taqdim etadi. Qulay narxlar, foydalanuvchilarga qulay interfeys, ishonchli hamkorlar va Toshkent shahrida Souslar, ketchup, mayonezlar kategoriyasidan mahsulot sotib olgan mijozlarning haqiqiy izohlari - bularning barchasini katalogimizning ushbu sahifasida topasiz."
                                        }
                                    }
                                }
                            }
                        },
                    },
                    '404': {
                        $ref: "#/components/responses/auth-token-drink-not-found"
                    },
                    '401': {
                        $ref: "#/components/responses/auth-token-not-invalid"
                    },
                },
            }
        },
        "/api/snacks": {
            get: {
                tags: [
                    "Snacks"
                ],
                security: [{
                    "JWT": []
                }],
                summary: "Get all Snacks",
                responses: {
                    '200': {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        },
                                        data: {
                                            type: "array",
                                            default: [{
                                                type: "object",
                                                properties: {
                                                    photo: {
                                                        type: "array",
                                                        default: [{
                                                            type: "string"
                                                        }]
                                                    },
                                                    _id: {
                                                        type: "string",
                                                    },
                                                    name: {
                                                        type: "string"
                                                    },
                                                    cost: {
                                                        type: "number"
                                                    },
                                                    description: {
                                                        type: "string"
                                                    }
                                                }
                                            }]
                                        }
                                    },
                                    example: {
                                        success: true,
                                        data: [{
                                            photo: ["/api/file/snacks/image-1325492878211.png", "/api/file/snacks/image-1225492878215.png", "/api/file/snacks/image-1225492878218.png", "/api/file/snacks/image-1625492878222.png", "/api/file/snacks/image-1625492878228.png", "/api/file/snacks/image-1125492878233.png", "/api/file/snacks/image-1125492878237.png"],
                                            _id: "60e30d8e86104074587438z6",
                                            name: "Asarti Fruits",
                                            cost: 18000,
                                            "discription": "Ushbu sahifada Toshkent shahridagi ishonchli va tasdiqlangan sotuvchilardan Souslar, ketchup, mayonezlar kategoriyasiga aloqador mahsulotlarni sotib olishingiz mumkin. Glotr.uz Toshkent shahridagi Souslar, ketchup, mayonezlar  bo'yicha eng yaxshi takliflarni taqdim etadi. Qulay narxlar, foydalanuvchilarga qulay interfeys, ishonchli hamkorlar va Toshkent shahrida Souslar, ketchup, mayonezlar kategoriyasidan mahsulot sotib olgan mijozlarning haqiqiy izohlari - bularning barchasini katalogimizning ushbu sahifasida topasiz."
                                        }, {
                                            photo: ["/api/file/snacks/image-1035492710849.png", "/api/file/snacks/image-1035492710853.png", "/api/file/snacks/image-1115492710861.png", "/api/file/snacks/image-1115492710866.png", "/api/file/snacks/image-1115492710871.png", "/api/file/snacks/image-1035492710874.png", "/api/file/snacks/image-1625492710880.png"],
                                            _id: "60e30ce686104704583498n4",
                                            name: "Asarti Meat",
                                            cost: 20000,
                                            "discription": "Ushbu sahifada Toshkent shahridagi ishonchli va tasdiqlangan sotuvchilardan Souslar, ketchup, mayonezlar kategoriyasiga aloqador mahsulotlarni sotib olishingiz mumkin. Glotr.uz Toshkent shahridagi Souslar, ketchup, mayonezlar  bo'yicha eng yaxshi takliflarni taqdim etadi. Qulay narxlar, foydalanuvchilarga qulay interfeys, ishonchli hamkorlar va Toshkent shahrida Souslar, ketchup, mayonezlar kategoriyasidan mahsulot sotib olgan mijozlarning haqiqiy izohlari - bularning barchasini katalogimizning ushbu sahifasida topasiz."
                                        }, {
                                            photo: ["/api/file/snacks/image-1625495089944.png", "/api/file/snacks/image-1625492150946.png", "/api/file/snacks/image-1625492509947.png", "/api/file/snacks/image-1625492189949.png"],
                                            _id: "60e30add86104704587498z0",
                                            name: "Chips Lays",
                                            cost: 6500,
                                            "discription": "Ushbu sahifada Toshkent shahridagi ishonchli va tasdiqlangan sotuvchilardan Souslar, ketchup, mayonezlar kategoriyasiga aloqador mahsulotlarni sotib olishingiz mumkin. Glotr.uz Toshkent shahridagi Souslar, ketchup, mayonezlar  bo'yicha eng yaxshi takliflarni taqdim etadi. Qulay narxlar, foydalanuvchilarga qulay interfeys, ishonchli hamkorlar va Toshkent shahrida Souslar, ketchup, mayonezlar kategoriyasidan mahsulot sotib olgan mijozlarning haqiqiy izohlari - bularning barchasini katalogimizning ushbu sahifasida topasiz."
                                        }, {
                                            photo: ["/api/file/snacks/image-1625412528471.png", "/api/file/snacks/image-1625492518476.png", "/api/file/snacks/image-1625412528484.png", "/api/file/snacks/image-1625492528502.png"],
                                            _id: "60e30c3086104704587498e2",
                                            name: "Shirinliklar",
                                            cost: 15000,
                                            "discription": "Ushbu sahifada Toshkent shahridagi ishonchli va tasdiqlangan sotuvchilardan Souslar, ketchup, mayonezlar kategoriyasiga aloqador mahsulotlarni sotib olishingiz mumkin. Glotr.uz Toshkent shahridagi Souslar, ketchup, mayonezlar  bo'yicha eng yaxshi takliflarni taqdim etadi. Qulay narxlar, foydalanuvchilarga qulay interfeys, ishonchli hamkorlar va Toshkent shahrida Souslar, ketchup, mayonezlar kategoriyasidan mahsulot sotib olgan mijozlarning haqiqiy izohlari - bularning barchasini katalogimizning ushbu sahifasida topasiz."
                                        }]
                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        $ref: "#/components/responses/auth-token-not-found"
                    },
                    '401': {
                        $ref: "#/components/responses/auth-token-not-invalid"
                    },
                }
            },
        },
        "/api/snacks/{id}": {
            get: {
                tags: [
                    "Snacks"
                ],
                security: [{
                    "JWT": []
                }],
                parameters: [{
                    "in": "path",
                    "name": "id",
                    required: true,
                    schema: {
                        type: "string",
                    }
                }],
                summary: "Get specific snack",
                responses: {
                    '200': {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        },
                                        data: {
                                            type: "object",
                                            properties: {
                                                photo: {
                                                    type: "array",
                                                    default: [{
                                                        type: "string"
                                                    }]
                                                },
                                                _id: {
                                                    type: "string",
                                                },
                                                name: {
                                                    type: "string"
                                                },
                                                cost: {
                                                    type: "number"
                                                },
                                                description: {
                                                    type: "string"
                                                }
                                            }
                                        }
                                    },
                                    example: {
                                        success: true,
                                        data: {
                                            photo: ["/api/file/snacks/image-1625492878211.png", "/api/file/snacks/image-1695492878215.png", "/api/file/snacks/image-1305492878218.png", "/api/file/snacks/image-1625492878222.png", "/api/file/snacks/image-1305492878228.png", "/api/file/snacks/image-1695492879233.png", "/api/file/snacks/image-1305492878237.png"],
                                            _id: "60e30d8e86114704587198e6",
                                            name: "Asarti Fruits",
                                            cost: 18000,
                                            "discription": "Ushbu sahifada Toshkent shahridagi ishonchli va tasdiqlangan sotuvchilardan Souslar, ketchup, mayonezlar kategoriyasiga aloqador mahsulotlarni sotib olishingiz mumkin. Glotr.uz Toshkent shahridagi Souslar, ketchup, mayonezlar  bo'yicha eng yaxshi takliflarni taqdim etadi. Qulay narxlar, foydalanuvchilarga qulay interfeys, ishonchli hamkorlar va Toshkent shahrida Souslar, ketchup, mayonezlar kategoriyasidan mahsulot sotib olgan mijozlarning haqiqiy izohlari - bularning barchasini katalogimizning ushbu sahifasida topasiz."
                                        }
                                    }
                                }
                            }
                        },
                    },
                    '404': {
                        $ref: "#/components/responses/auth-token-snacks-not-found"
                    },
                    '401': {
                        $ref: "#/components/responses/auth-token-not-invalid"
                    },
                },
            }
        },
        "/api/gio": {
            get: {
                tags: [
                    "Locations"
                ],
                security: [{
                    "JWT": []
                }],
                summary: "Get all Locations",
                responses: {
                    '200': {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        },
                                        data: {
                                            type: "array",
                                            default: [{
                                                type: "object",
                                                properties: {
                                                    photo: {
                                                        type: "array",
                                                        default: [{
                                                            type: "string"
                                                        }]
                                                    },
                                                    _id: {
                                                        type: "string",
                                                    },
                                                    name: {
                                                        type: "string"
                                                    },
                                                    lat: {
                                                        type: "number"
                                                    },
                                                    long: {
                                                        type: "number"
                                                    }
                                                }
                                            }]
                                        }
                                    },
                                    example: {
                                        "success": true,
                                        "data": [{
                                                "photo": [
                                                    "/api/file/giolocation/image-1622729756048.png",
                                                    "/api/file/giolocation/image-1621729756054.png",
                                                    "/api/file/giolocation/image-1621729756056.png"
                                                ],
                                                "_id": "60e6aadc0b39921d4cd1d940",
                                                "name": "Foodie Evos",
                                                "lat": 41.354342,
                                                "long": 69.2495572,
                                            },
                                            {
                                                "photo": [
                                                    "/api/file/giolocation/image-1625729913868.png",
                                                    "/api/file/giolocation/image-1625729913870.png"
                                                ],
                                                "_id": "60e6ab790b39921d4cd1d946",
                                                "name": "Foodie KFC",
                                                "lat": 41.289525,
                                                "long": 69.1240202,
                                            },
                                            {
                                                "photo": [
                                                    "/api/file/giolocation/image-1625737106220.png",
                                                    "/api/file/giolocation/image-1625737106241.png",
                                                    "/api/file/giolocation/image-1625737106243.png"
                                                ],
                                                "_id": "60e6c79239eec52d90ae2127",
                                                "name": "Foodie Bellissimo",
                                                "lat": 41.3167451,
                                                "long": 69.2313717,
                                            },
                                            {
                                                "photo": [
                                                    "/api/file/giolocation/image-1625737419292.png",
                                                    "/api/file/giolocation/image-1625737419376.png",
                                                    "/api/file/giolocation/image-1625737419378.png",
                                                    "/api/file/giolocation/image-1625737419380.png"
                                                ],
                                                "_id": "60e6c8cb39eec52d90ae2129",
                                                "name": "Foodie Black Star",
                                                "lat": 40.545101,
                                                "long": 72.7947531,
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        $ref: "#/components/responses/auth-token-not-found"
                    },
                    '401': {
                        $ref: "#/components/responses/auth-token-not-invalid"
                    },
                }
            }
        },
        "/api/gio/{id}": {
            get: {
                tags: [
                    "Locations"
                ],
                security: [{
                    "JWT": []
                }],
                parameters: [{
                    "in": "path",
                    "name": "id",
                    required: true,
                    schema: {
                        type: "string",
                    }
                }],
                summary: "Get specific location",
                responses: {
                    '200': {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        },
                                        data: {
                                            type: "object",
                                            properties: {
                                                photo: {
                                                    type: "array",
                                                    default: [{
                                                        type: "string"
                                                    }]
                                                },
                                                _id: {
                                                    type: "string",
                                                },
                                                name: {
                                                    type: "string"
                                                },
                                                lat: {
                                                    type: "number"
                                                },
                                                long: {
                                                    type: "number"
                                                }
                                            }
                                        }
                                    },
                                    example: {
                                        "success": true,
                                        "data": {
                                            "photo": [
                                                "/api/file/giolocation/image-1622729756048.png",
                                                "/api/file/giolocation/image-1621729756054.png",
                                                "/api/file/giolocation/image-1621729756056.png"
                                            ],
                                            "_id": "60e6aadc0b39921d4cd1d940",
                                            "name": "Foodie Evos",
                                            "lat": 41.354342,
                                            "long": 69.2495572,
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        $ref: "#/components/responses/auth-token-gio-not-found"
                    },
                    '401': {
                        $ref: "#/components/responses/auth-token-not-invalid"
                    },
                }
            }
        },
        "/api/foods": {
            get: {
                tags: [
                    "Foods"
                ],
                security: [{
                    "JWT": []
                }],
                summary: "Get All Foods",
                responses: {
                    '200': {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        },
                                        data: {
                                            type: "array",
                                            default: [{
                                                type: "object",
                                                properties: {
                                                    photo: {
                                                        type: "array",
                                                        default: [{
                                                            type: "string"
                                                        }]
                                                    },
                                                    _id: {
                                                        type: "string",
                                                    },
                                                    name: {
                                                        type: "string"
                                                    },
                                                    cpst: {
                                                        type: "number"
                                                    },
                                                    description: {
                                                        type: "string"
                                                    }
                                                }
                                            }]
                                        }
                                    },
                                    example: {
                                        success: true,
                                        data: [{
                                            photo: ["/api/file/foods/image-1625490351908.png", "/api/file/foods/image-1625490351932.png", "/api/file/foods/image-1625490351938.png", "/api/file/foods/image-1625490351941.png"],
                                            _id: "60e303b086104704587498c8",
                                            name: "Pizza",
                                            cost: 25000,
                                            discription: "Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot."
                                        }, {
                                            photo: ["/api/file/foods/image-1625490556108.png", "/api/file/foods/image-1625490556117.png", "/api/file/foods/image-1625490556120.png", "/api/file/foods/image-1625490556125.png", "/api/file/foods/image-1625490556155.png"],
                                            _id: "60e3047c86104704587498cb",
                                            name: "Osh",
                                            cost: 11000,
                                            discription: "Masalligʻi va tayyorlanish uslubi boʻyicha xilma-xil turlarga boʻlinadi va har bir mamlakatda oʻzgacha tarzda tayyorlanadi. Taom asosini guruch tashkil etadi. Ushbu masalliqdan tashqari yogʻ, goʻsht, sabzi, piyoz va boshqa masalliqlar ishlatiladi. Palov tayyorlanish va tarqalish boʻyicha asosan Oʻrta Osiyo va Yaqin Sharq xalqlari orasida ommabop hisoblanadi. Jumladan, Oʻzbekistonda oʻzbekcha palov oʻzbek oshxonasining eng asosiy taomlaridan biri hisoblanib, har bir xonadonda, toʻy-hashamlarda va dunyoning boshqa davlatlarida sevib isteʼmol qilinmoqda."
                                        }, {
                                            photo: ["/api/file/foods/image-1625490767364.png"],
                                            _id: "60e3054f86104704587498ce",
                                            name: "Sho'rva",
                                            cost: 9000,
                                            discription: "Tanga darmon, hazmi oson, masalliqlari arzon taomlardan biri — ilik sho‘rva sovuq kunlarda ko‘pchilikka xush yoqishi, shubhasiz. Ushbu taom garchi ayrimlar uncha e’tibor bermaydigan ilikli suyakdan tayyorlansa-da, salomatlik uchun ancha foydali. U temir moddasi va kalsiyga boy bo‘lgani sababli keksalar va bolalarda uchrovchi kalsiy yetishmasligi, homilador ayollarda homilaning suyaklari rivojlanish paytida bo‘ladigan bo‘g‘imlar og‘rig‘i, tish yemirilishi va soch to‘kilishiga qarshi kurashda asqotadi."
                                        }, {
                                            photo: ["/api/file/foods/image-1625490861282.png", "/api/file/foods/image-1625490861287.png", "/api/file/foods/image-1625490861290.png"],
                                            _id: "60e305ad86104704587498d0",
                                            name: "Somsa",
                                            cost: 8000,
                                            discription: "Koʻk somsa — hamirli taom turi. Oshirma yoki oddiy hamirdan tayyorlanadi. Oshirilgan hamirdan yongʻoqday zuvalalar oʻziladi va joʻva bilan qalinligi 1 mm qilib jildlar yoyiladi. Yangi unib chiqqan otquloq, yalpiz, yoʻngʻichqa, jagʻ-jagʻ, ismaloq, shoʻra, togʻ piyozi (mator) kabi koʻkatlarning bargpoyasi koʻk piyoz yoki bosh piyoz bilan birga chopiladi. Qiymaga tuz, qalampir (murch), jizza (mayda toʻgʻralgan qoʻy yogʻi yoki dogʻlangan paxta yogʻi) qoʻshiladi. Jildga bir qoshiqdan qiyma solib tugiladi va tandirda (yoki duxovkada) pishiriladi. Koʻk somsa uchun ozroq yogʻ yoki eritilgan margarin, suvga tuz qoʻshib yumshoq qilib hamir qoriladi. 10—15 min. tindirilgach, zuvalachalar norin hamiridek yupqa qilib yoyiladi. Oʻrtasiga qiyma solib tugiladi"
                                        }]
                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        $ref: "#/components/responses/auth-token-not-found"
                    },
                    '401': {
                        $ref: "#/components/responses/auth-token-not-invalid"
                    },
                }
            }
        },
        "/api/foods/{id}": {
            get: {
                tags: [
                    "Foods"
                ],
                security: [{
                    "JWT": []
                }],
                parameters: [{
                    "in": "path",
                    "name": "id",
                    required: true,
                    schema: {
                        type: "string",
                    }
                }],
                summary: "Get specific food",
                responses: {
                    '200': {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        },
                                        data: {
                                            type: "object",
                                            properties: {
                                                photo: {
                                                    type: "array",
                                                    default: [{
                                                        type: "string"
                                                    }]
                                                },
                                                _id: {
                                                    type: "string",
                                                },
                                                name: {
                                                    type: "string"
                                                },
                                                cost: {
                                                    type: "number"
                                                },
                                                description: {
                                                    type: "string"
                                                }
                                            }
                                        }
                                    }
                                },
                                example: {
                                    success: true,
                                    data: {
                                        photo: ["/api/file/foods/image-1625490351908.png", "/api/file/foods/image-1625490351932.png", "/api/file/foods/image-1625490351938.png", "/api/file/foods/image-1625490351941.png"],
                                        _id: "60e303b086104704587498c8",
                                        name: "Pizza",
                                        cost: 25000,
                                        discription: "Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot."
                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        $ref: "#/components/responses/auth-token-foods-not-found"
                    },
                    '401': {
                        $ref: "#/components/responses/auth-token-not-invalid"
                    },
                },
            }
        },
        "/api/categories": {
            get: {
                tags: [
                    "Categories"
                ],
                security: [{
                    "JWT": []
                }],
                summary: "Get All Categories",
                responses: {
                    '200': {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        },
                                        data: {
                                            type: "array",
                                            default: [{
                                                type: "object",
                                                properties: {
                                                    _id: {
                                                        type: "string",
                                                    },
                                                    name: {
                                                        type: "string"
                                                    }
                                                }
                                            }]
                                        }
                                    },
                                    example: {
                                        "success": true,
                                        "data": [{
                                                "_id": "60e8a2224a6d5a23ce592ea6",
                                                "name": "snacks",
                                            },
                                            {
                                                "_id": "60e8a23b68ac502411e03643",
                                                "name": "drinks",
                                            },
                                            {
                                                "_id": "60e8a23b68ac502411e03644",
                                                "name": "foods",
                                            },
                                            {
                                                "_id": "60e8a26eb1392424a67a29ed",
                                                "name": "souces",
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        $ref: "#/components/responses/auth-token-not-found"
                    },
                    '401': {
                        $ref: "#/components/responses/auth-token-not-invalid"
                    },
                }
            }
        },
        "/api/order": {
            get: {
                tags: [
                    "Order"
                ],
                security: [{
                    "JWT": []
                }],
                summary: "Get All Orders Of User",
                responses: {
                    '200': {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        },
                                        data: {
                                            type: "array",
                                            default: [{
                                                type: "object",
                                                properties: {
                                                    status: {
                                                        type: "string",
                                                    },
                                                    products: {
                                                        type: "array",
                                                        default: [{
                                                            type: "object",
                                                            properties: {
                                                                id: {
                                                                    type: "string"
                                                                },
                                                                category: {
                                                                    type: "string"
                                                                },
                                                                quantity: {
                                                                    type: "string"
                                                                },
                                                                sum: {
                                                                    type: "string"
                                                                }
                                                            }
                                                        }]
                                                    },
                                                    createdAt: {
                                                        type: "string"
                                                    }
                                                }
                                            }]
                                        }
                                    },
                                    example: {
                                        "success": true,
                                        "data": [{
                                            "status": "pending",
                                            "products": [{
                                                "id": "60e30add86104704587498e0",
                                                "category": "snacks",
                                                "quantity": 10,
                                                "sum": 3000
                                            }],
                                            "createdAt": "2021-07-13T12:50:33.572Z"
                                        }]
                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        $ref: "#/components/responses/auth-token-not-found"
                    },
                    '401': {
                        $ref: "#/components/responses/auth-token-not-invalid"
                    },
                }
            }
        },
    },
}