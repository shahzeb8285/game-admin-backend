import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminRoleAccessesCreateManyInput } from './admin-role-accesses-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAdminRoleAccessesArgs {

    @Field(() => [AdminRoleAccessesCreateManyInput], {nullable:false})
    @Type(() => AdminRoleAccessesCreateManyInput)
    data!: Array<AdminRoleAccessesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
