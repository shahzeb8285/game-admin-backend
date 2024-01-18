import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminRoleCreateManyInput } from './admin-role-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAdminRoleArgs {

    @Field(() => [AdminRoleCreateManyInput], {nullable:false})
    @Type(() => AdminRoleCreateManyInput)
    data!: Array<AdminRoleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
