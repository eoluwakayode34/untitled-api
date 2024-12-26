export declare class AppService {
    private roleRecords;
    getAllRoleRecords(): {
        name: string;
        type: string;
        createdAt: string;
        status: string;
        roleUsers: string[];
    }[];
    getHello(): string;
}
