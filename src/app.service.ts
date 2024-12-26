import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private roleRecords = [
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

  getAllRoleRecords() {
    return this.roleRecords;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
