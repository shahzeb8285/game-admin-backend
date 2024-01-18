import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminCreateWithoutAdmin_rolesInput } from './admin-create-without-admin-roles.input';
import { Type } from 'class-transformer';
import { AdminCreateOrConnectWithoutAdmin_rolesInput } from './admin-create-or-connect-without-admin-roles.input';
import { AdminUpsertWithWhereUniqueWithoutAdmin_rolesInput } from './admin-upsert-with-where-unique-without-admin-roles.input';
import { AdminCreateManyAdmin_rolesInputEnvelope } from './admin-create-many-admin-roles-input-envelope.input';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { AdminUpdateWithWhereUniqueWithoutAdmin_rolesInput } from './admin-update-with-where-unique-without-admin-roles.input';
import { AdminUpdateManyWithWhereWithoutAdmin_rolesInput } from './admin-update-many-with-where-without-admin-roles.input';
import { AdminScalarWhereInput } from './admin-scalar-where.input';

@InputType()
export class AdminUncheckedUpdateManyWithoutAdmin_rolesNestedInput {

    @Field(() => [AdminCreateWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => AdminCreateWithoutAdmin_rolesInput)
    create?: Array<AdminCreateWithoutAdmin_rolesInput>;

    @Field(() => [AdminCreateOrConnectWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => AdminCreateOrConnectWithoutAdmin_rolesInput)
    connectOrCreate?: Array<AdminCreateOrConnectWithoutAdmin_rolesInput>;

    @Field(() => [AdminUpsertWithWhereUniqueWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => AdminUpsertWithWhereUniqueWithoutAdmin_rolesInput)
    upsert?: Array<AdminUpsertWithWhereUniqueWithoutAdmin_rolesInput>;

    @Field(() => AdminCreateManyAdmin_rolesInputEnvelope, {nullable:true})
    @Type(() => AdminCreateManyAdmin_rolesInputEnvelope)
    createMany?: AdminCreateManyAdmin_rolesInputEnvelope;

    @Field(() => [AdminWhereUniqueInput], {nullable:true})
    @Type(() => AdminWhereUniqueInput)
    set?: Array<AdminWhereUniqueInput>;

    @Field(() => [AdminWhereUniqueInput], {nullable:true})
    @Type(() => AdminWhereUniqueInput)
    disconnect?: Array<AdminWhereUniqueInput>;

    @Field(() => [AdminWhereUniqueInput], {nullable:true})
    @Type(() => AdminWhereUniqueInput)
    delete?: Array<AdminWhereUniqueInput>;

    @Field(() => [AdminWhereUniqueInput], {nullable:true})
    @Type(() => AdminWhereUniqueInput)
    connect?: Array<AdminWhereUniqueInput>;

    @Field(() => [AdminUpdateWithWhereUniqueWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => AdminUpdateWithWhereUniqueWithoutAdmin_rolesInput)
    update?: Array<AdminUpdateWithWhereUniqueWithoutAdmin_rolesInput>;

    @Field(() => [AdminUpdateManyWithWhereWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => AdminUpdateManyWithWhereWithoutAdmin_rolesInput)
    updateMany?: Array<AdminUpdateManyWithWhereWithoutAdmin_rolesInput>;

    @Field(() => [AdminScalarWhereInput], {nullable:true})
    @Type(() => AdminScalarWhereInput)
    deleteMany?: Array<AdminScalarWhereInput>;
}
