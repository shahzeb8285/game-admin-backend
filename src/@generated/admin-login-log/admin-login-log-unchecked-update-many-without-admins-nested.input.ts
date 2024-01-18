import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminLoginLogCreateWithoutAdminsInput } from './admin-login-log-create-without-admins.input';
import { Type } from 'class-transformer';
import { AdminLoginLogCreateOrConnectWithoutAdminsInput } from './admin-login-log-create-or-connect-without-admins.input';
import { AdminLoginLogUpsertWithWhereUniqueWithoutAdminsInput } from './admin-login-log-upsert-with-where-unique-without-admins.input';
import { AdminLoginLogCreateManyAdminsInputEnvelope } from './admin-login-log-create-many-admins-input-envelope.input';
import { AdminLoginLogWhereUniqueInput } from './admin-login-log-where-unique.input';
import { AdminLoginLogUpdateWithWhereUniqueWithoutAdminsInput } from './admin-login-log-update-with-where-unique-without-admins.input';
import { AdminLoginLogUpdateManyWithWhereWithoutAdminsInput } from './admin-login-log-update-many-with-where-without-admins.input';
import { AdminLoginLogScalarWhereInput } from './admin-login-log-scalar-where.input';

@InputType()
export class AdminLoginLogUncheckedUpdateManyWithoutAdminsNestedInput {

    @Field(() => [AdminLoginLogCreateWithoutAdminsInput], {nullable:true})
    @Type(() => AdminLoginLogCreateWithoutAdminsInput)
    create?: Array<AdminLoginLogCreateWithoutAdminsInput>;

    @Field(() => [AdminLoginLogCreateOrConnectWithoutAdminsInput], {nullable:true})
    @Type(() => AdminLoginLogCreateOrConnectWithoutAdminsInput)
    connectOrCreate?: Array<AdminLoginLogCreateOrConnectWithoutAdminsInput>;

    @Field(() => [AdminLoginLogUpsertWithWhereUniqueWithoutAdminsInput], {nullable:true})
    @Type(() => AdminLoginLogUpsertWithWhereUniqueWithoutAdminsInput)
    upsert?: Array<AdminLoginLogUpsertWithWhereUniqueWithoutAdminsInput>;

    @Field(() => AdminLoginLogCreateManyAdminsInputEnvelope, {nullable:true})
    @Type(() => AdminLoginLogCreateManyAdminsInputEnvelope)
    createMany?: AdminLoginLogCreateManyAdminsInputEnvelope;

    @Field(() => [AdminLoginLogWhereUniqueInput], {nullable:true})
    @Type(() => AdminLoginLogWhereUniqueInput)
    set?: Array<AdminLoginLogWhereUniqueInput>;

    @Field(() => [AdminLoginLogWhereUniqueInput], {nullable:true})
    @Type(() => AdminLoginLogWhereUniqueInput)
    disconnect?: Array<AdminLoginLogWhereUniqueInput>;

    @Field(() => [AdminLoginLogWhereUniqueInput], {nullable:true})
    @Type(() => AdminLoginLogWhereUniqueInput)
    delete?: Array<AdminLoginLogWhereUniqueInput>;

    @Field(() => [AdminLoginLogWhereUniqueInput], {nullable:true})
    @Type(() => AdminLoginLogWhereUniqueInput)
    connect?: Array<AdminLoginLogWhereUniqueInput>;

    @Field(() => [AdminLoginLogUpdateWithWhereUniqueWithoutAdminsInput], {nullable:true})
    @Type(() => AdminLoginLogUpdateWithWhereUniqueWithoutAdminsInput)
    update?: Array<AdminLoginLogUpdateWithWhereUniqueWithoutAdminsInput>;

    @Field(() => [AdminLoginLogUpdateManyWithWhereWithoutAdminsInput], {nullable:true})
    @Type(() => AdminLoginLogUpdateManyWithWhereWithoutAdminsInput)
    updateMany?: Array<AdminLoginLogUpdateManyWithWhereWithoutAdminsInput>;

    @Field(() => [AdminLoginLogScalarWhereInput], {nullable:true})
    @Type(() => AdminLoginLogScalarWhereInput)
    deleteMany?: Array<AdminLoginLogScalarWhereInput>;
}
