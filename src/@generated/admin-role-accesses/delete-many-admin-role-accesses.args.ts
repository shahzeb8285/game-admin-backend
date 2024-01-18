import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminRoleAccessesWhereInput } from './admin-role-accesses-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAdminRoleAccessesArgs {

    @Field(() => AdminRoleAccessesWhereInput, {nullable:true})
    @Type(() => AdminRoleAccessesWhereInput)
    where?: AdminRoleAccessesWhereInput;
}
