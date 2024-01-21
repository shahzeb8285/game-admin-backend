import { Injectable, ExecutionContext, CanActivate } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import ROLES from '../configs/accesses.config';

@Injectable()
export class GqlAuthorizationGuard implements CanActivate {

  canActivate(context: ExecutionContext): boolean { 
    const ctx = GqlExecutionContext.create(context);
    const user = ctx.getContext().req.user;

    if (user) {
      const actionFunction = context.getHandler().name;
      const actionName = getActionIdentifierUsingFunctionName(actionFunction);

      if (!user.admin_roles.enabled) {
        return false
      }
      const permissions = user.admin_roles.role_accesses.map((item) => {
        return item.admin_accesses.access_name
      })



      const isAllowed = permissions.find((item) => {
          return item === actionName
      })

      return !!isAllowed
    }

    return false
  }

  
}
function getActionIdentifierUsingFunctionName(actionFunction: string) {
  return Object.keys(ROLES).find(key => ROLES[key] === actionFunction);
}

