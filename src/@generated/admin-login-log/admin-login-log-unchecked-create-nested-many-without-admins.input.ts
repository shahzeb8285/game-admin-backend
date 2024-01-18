import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminLoginLogCreateWithoutAdminsInput } from './admin-login-log-create-without-admins.input';
import { Type } from 'class-transformer';
import { AdminLoginLogCreateOrConnectWithoutAdminsInput } from './admin-login-log-create-or-connect-without-admins.input';
import { AdminLoginLogCreateManyAdminsInputEnvelope } from './admin-login-log-create-many-admins-input-envelope.input';
import { AdminLoginLogWhereUniqueInput } from './admin-login-log-where-unique.input';

@InputType()
export class AdminLoginLogUncheckedCreateNestedManyWithoutAdminsInput {

    @Field(() => [AdminLoginLogCreateWithoutAdminsInput], {nullable:true})
    @Type(() => AdminLoginLogCreateWithoutAdminsInput)
    create?: Array<AdminLoginLogCreateWithoutAdminsInput>;

    @Field(() => [AdminLoginLogCreateOrConnectWithoutAdminsInput], {nullable:true})
    @Type(() => AdminLoginLogCreateOrConnectWithoutAdminsInput)
    connectOrCreate?: Array<AdminLoginLogCreateOrConnectWithoutAdminsInput>;

    @Field(() => AdminLoginLogCreateManyAdminsInputEnvelope, {nullable:true})
    @Type(() => AdminLoginLogCreateManyAdminsInputEnvelope)
    createMany?: AdminLoginLogCreateManyAdminsInputEnvelope;

    @Field(() => [AdminLoginLogWhereUniqueInput], {nullable:true})
    @Type(() => AdminLoginLogWhereUniqueInput)
    connect?: Array<AdminLoginLogWhereUniqueInput>;
}
