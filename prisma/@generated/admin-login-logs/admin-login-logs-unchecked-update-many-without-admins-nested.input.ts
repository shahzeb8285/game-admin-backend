import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_login_logsCreateWithoutAdminsInput } from './admin-login-logs-create-without-admins.input';
import { Type } from 'class-transformer';
import { admin_login_logsCreateOrConnectWithoutAdminsInput } from './admin-login-logs-create-or-connect-without-admins.input';
import { admin_login_logsUpsertWithWhereUniqueWithoutAdminsInput } from './admin-login-logs-upsert-with-where-unique-without-admins.input';
import { admin_login_logsCreateManyAdminsInputEnvelope } from './admin-login-logs-create-many-admins-input-envelope.input';
import { Prisma } from '@prisma/client';
import { admin_login_logsWhereUniqueInput } from './admin-login-logs-where-unique.input';
import { admin_login_logsUpdateWithWhereUniqueWithoutAdminsInput } from './admin-login-logs-update-with-where-unique-without-admins.input';
import { admin_login_logsUpdateManyWithWhereWithoutAdminsInput } from './admin-login-logs-update-many-with-where-without-admins.input';
import { admin_login_logsScalarWhereInput } from './admin-login-logs-scalar-where.input';

@InputType()
export class admin_login_logsUncheckedUpdateManyWithoutAdminsNestedInput {

    @Field(() => [admin_login_logsCreateWithoutAdminsInput], {nullable:true})
    @Type(() => admin_login_logsCreateWithoutAdminsInput)
    create?: Array<admin_login_logsCreateWithoutAdminsInput>;

    @Field(() => [admin_login_logsCreateOrConnectWithoutAdminsInput], {nullable:true})
    @Type(() => admin_login_logsCreateOrConnectWithoutAdminsInput)
    connectOrCreate?: Array<admin_login_logsCreateOrConnectWithoutAdminsInput>;

    @Field(() => [admin_login_logsUpsertWithWhereUniqueWithoutAdminsInput], {nullable:true})
    @Type(() => admin_login_logsUpsertWithWhereUniqueWithoutAdminsInput)
    upsert?: Array<admin_login_logsUpsertWithWhereUniqueWithoutAdminsInput>;

    @Field(() => admin_login_logsCreateManyAdminsInputEnvelope, {nullable:true})
    @Type(() => admin_login_logsCreateManyAdminsInputEnvelope)
    createMany?: admin_login_logsCreateManyAdminsInputEnvelope;

    @Field(() => [admin_login_logsWhereUniqueInput], {nullable:true})
    @Type(() => admin_login_logsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<admin_login_logsWhereUniqueInput, 'login_id'>>;

    @Field(() => [admin_login_logsWhereUniqueInput], {nullable:true})
    @Type(() => admin_login_logsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<admin_login_logsWhereUniqueInput, 'login_id'>>;

    @Field(() => [admin_login_logsWhereUniqueInput], {nullable:true})
    @Type(() => admin_login_logsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<admin_login_logsWhereUniqueInput, 'login_id'>>;

    @Field(() => [admin_login_logsWhereUniqueInput], {nullable:true})
    @Type(() => admin_login_logsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<admin_login_logsWhereUniqueInput, 'login_id'>>;

    @Field(() => [admin_login_logsUpdateWithWhereUniqueWithoutAdminsInput], {nullable:true})
    @Type(() => admin_login_logsUpdateWithWhereUniqueWithoutAdminsInput)
    update?: Array<admin_login_logsUpdateWithWhereUniqueWithoutAdminsInput>;

    @Field(() => [admin_login_logsUpdateManyWithWhereWithoutAdminsInput], {nullable:true})
    @Type(() => admin_login_logsUpdateManyWithWhereWithoutAdminsInput)
    updateMany?: Array<admin_login_logsUpdateManyWithWhereWithoutAdminsInput>;

    @Field(() => [admin_login_logsScalarWhereInput], {nullable:true})
    @Type(() => admin_login_logsScalarWhereInput)
    deleteMany?: Array<admin_login_logsScalarWhereInput>;
}
