import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getWorld(): {
        name: string;
        type: string;
        createdAt: string;
        status: string;
        roleUsers: string[];
    }[];
}
