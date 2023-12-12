import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_role_accessesCreateManyInput } from '../admin-role-accesses/admin-role-accesses-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyadminRoleAccessesArgs {

    @Field(() => [admin_role_accessesCreateManyInput], {nullable:false})
    @Type(() => admin_role_accessesCreateManyInput)
    data!: Array<admin_role_accessesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
