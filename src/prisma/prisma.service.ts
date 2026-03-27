import { INestApplication, Injectable } from "@nestjs/common";
import { PrismaClient } from '@prisma/client';
import { OnModuleInit } from "@nestjs/common";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

    async onModuleInit(){
        await this.$connect();
    }

    async enableShutdownHooks (app: INestApplication){
        this.$on('beforeExit' as any, async () =>{
          await app.close();
        })

    }




}