import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminLoginLogCreateManyInput } from './admin-login-log-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAdminLoginLogArgs {

    @Field(() => [AdminLoginLogCreateManyInput], {nullable:false})
    @Type(() => AdminLoginLogCreateManyInput)
    data!: Array<AdminLoginLogCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
