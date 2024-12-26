"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    constructor() {
        this.roleRecords = [
            {
                name: 'Superadmin',
                type: 'DEFAULT',
                createdAt: 'Jan 1, 2023',
                status: 'active',
                roleUsers: [
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-4_bziodn.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap_ptqxfu.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-3_avkpto.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-2_rrcf40.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-1_gx98ba.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-4_bziodn.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap_ptqxfu.png',
                ],
            },
            {
                name: 'Superadmin',
                type: 'DEFAULT',
                createdAt: 'Feb 1, 2023',
                status: 'active',
                roleUsers: [
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-4_bziodn.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap_ptqxfu.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-3_avkpto.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-2_rrcf40.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-1_gx98ba.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-4_bziodn.png',
                ],
            },
            {
                name: 'supportadmin',
                type: 'DEFAULT',
                createdAt: 'Feb 1, 2023',
                status: 'active',
                roleUsers: [
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-4_bziodn.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap_ptqxfu.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-3_avkpto.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-2_rrcf40.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-1_gx98ba.png',
                ],
            },
            {
                name: 'sales personnel',
                type: 'CUSTOM',
                createdAt: 'Mar 1, 2023',
                status: 'active',
                roleUsers: [
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-4_bziodn.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap_ptqxfu.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-3_avkpto.png',
                ],
            },
            {
                name: 'Deputy sales personnel',
                type: 'CUSTOM',
                createdAt: 'Apr 1, 2023',
                status: 'In Active',
                roleUsers: [
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-4_bziodn.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap_ptqxfu.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-3_avkpto.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-2_rrcf40.png',
                ],
            },
            {
                name: 'Developeradmin',
                type: 'SYSTEM-CUSTOM',
                createdAt: 'May 1, 2023',
                status: 'active',
                roleUsers: [
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-4_bziodn.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap_ptqxfu.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-3_avkpto.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-2_rrcf40.png',
                ],
            },
            {
                name: 'Developer-basic',
                type: 'SYSTEM-CUSTOM',
                createdAt: 'Jun 1, 2023',
                status: 'active',
                roleUsers: [
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-4_bziodn.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap_ptqxfu.png',
                    'https://res.cloudinary.com/drivepc/image/upload/v1735207152/Avatar_wrap-3_avkpto.png',
                ],
            },
        ];
    }
    getAllRoleRecords() {
        return this.roleRecords;
    }
    getHello() {
        return 'Hello World!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map