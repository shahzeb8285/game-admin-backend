import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_login_logsCreateManyAdminsInput } from './admin-login-logs-create-many-admins.input';
import { Type } from 'class-transformer';

@InputType()
export class admin_login_logsCreateManyAdminsInputEnvelope {

    @Field(() => [admin_login_logsCreateManyAdminsInput], {nullable:false})
    @Type(() => admin_login_logsCreateManyAdminsInput)
    data!: Array<admin_login_logsCreateManyAdminsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
