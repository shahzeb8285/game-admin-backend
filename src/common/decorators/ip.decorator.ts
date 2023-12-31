import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const UserIp = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
        const ctx = GqlExecutionContext.create(context);
        const ip = ctx.getContext().req.headers['x-forwarded-for'] || ctx.getContext().req.socket.remoteAddress 
    
        return ip
  },
);