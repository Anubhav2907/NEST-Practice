import { MiddlewareConsumer, Module } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { CatController } from "./cat.controller";
import { CatService } from "./cat.service";
import { LoggerMiddleware } from "./middleware/logger.middleware";
@Module ({
    controllers: [CatController],
    providers: [CatService],
})

export class CatsModule implements LoggerMiddleware{
    use(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): void {
        throw new Error("Method not implemented.");
    }
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(LoggerMiddleware)
          .forRoutes('cats');
      }
    
};