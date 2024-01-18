import { ObjectType } from '@nestjs/graphql';
// import { User } from '../../users/models/user.model';
import { Token } from './token.model';
import { Admin } from '../../@generated/admin/admin.model';
// import { Admin  } from '@prisma/client';

@ObjectType()
export class Auth extends Token {
  user: Admin;
}


