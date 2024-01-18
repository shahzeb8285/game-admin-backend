import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminLoginLogCreateManyAdminsInput } from './admin-login-log-create-many-admins.input';
import { Type } from 'class-transformer';

@InputType()
export class AdminLoginLogCreateManyAdminsInputEnvelope {

    @Field(() => [AdminLoginLogCreateManyAdminsInput], {nullable:false})
    @Type(() => AdminLoginLogCreateManyAdminsInput)
    data!: Array<AdminLoginLogCreateManyAdminsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
