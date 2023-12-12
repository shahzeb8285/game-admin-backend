import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_role_accessesWhereInput } from '../admin-role-accesses/admin-role-accesses-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyadminRoleAccessesArgs {

    @Field(() => admin_role_accessesWhereInput, {nullable:true})
    @Type(() => admin_role_accessesWhereInput)
    where?: admin_role_accessesWhereInput;
}
