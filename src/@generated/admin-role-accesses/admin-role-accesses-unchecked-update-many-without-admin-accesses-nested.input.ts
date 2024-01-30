import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_role_accessesCreateWithoutAdmin_accessesInput } from './admin-role-accesses-create-without-admin-accesses.input';
import { Type } from 'class-transformer';
import { admin_role_accessesCreateOrConnectWithoutAdmin_accessesInput } from './admin-role-accesses-create-or-connect-without-admin-accesses.input';
import { admin_role_accessesUpsertWithWhereUniqueWithoutAdmin_accessesInput } from './admin-role-accesses-upsert-with-where-unique-without-admin-accesses.input';
import { admin_role_accessesCreateManyAdmin_accessesInputEnvelope } from './admin-role-accesses-create-many-admin-accesses-input-envelope.input';
import { admin_role_accessesWhereUniqueInput } from './admin-role-accesses-where-unique.input';
import { admin_role_accessesUpdateWithWhereUniqueWithoutAdmin_accessesInput } from './admin-role-accesses-update-with-where-unique-without-admin-accesses.input';
import { admin_role_accessesUpdateManyWithWhereWithoutAdmin_accessesInput } from './admin-role-accesses-update-many-with-where-without-admin-accesses.input';
import { admin_role_accessesScalarWhereInput } from './admin-role-accesses-scalar-where.input';

@InputType()
export class admin_role_accessesUncheckedUpdateManyWithoutAdmin_accessesNestedInput {

    @Field(() => [admin_role_accessesCreateWithoutAdmin_accessesInput], {nullable:true})
    @Type(() => admin_role_accessesCreateWithoutAdmin_accessesInput)
    create?: Array<admin_role_accessesCreateWithoutAdmin_accessesInput>;

    @Field(() => [admin_role_accessesCreateOrConnectWithoutAdmin_accessesInput], {nullable:true})
    @Type(() => admin_role_accessesCreateOrConnectWithoutAdmin_accessesInput)
    connectOrCreate?: Array<admin_role_accessesCreateOrConnectWithoutAdmin_accessesInput>;

    @Field(() => [admin_role_accessesUpsertWithWhereUniqueWithoutAdmin_accessesInput], {nullable:true})
    @Type(() => admin_role_accessesUpsertWithWhereUniqueWithoutAdmin_accessesInput)
    upsert?: Array<admin_role_accessesUpsertWithWhereUniqueWithoutAdmin_accessesInput>;

    @Field(() => admin_role_accessesCreateManyAdmin_accessesInputEnvelope, {nullable:true})
    @Type(() => admin_role_accessesCreateManyAdmin_accessesInputEnvelope)
    createMany?: admin_role_accessesCreateManyAdmin_accessesInputEnvelope;

    @Field(() => [admin_role_accessesWhereUniqueInput], {nullable:true})
    @Type(() => admin_role_accessesWhereUniqueInput)
    set?: Array<admin_role_accessesWhereUniqueInput>;

    @Field(() => [admin_role_accessesWhereUniqueInput], {nullable:true})
    @Type(() => admin_role_accessesWhereUniqueInput)
    disconnect?: Array<admin_role_accessesWhereUniqueInput>;

    @Field(() => [admin_role_accessesWhereUniqueInput], {nullable:true})
    @Type(() => admin_role_accessesWhereUniqueInput)
    delete?: Array<admin_role_accessesWhereUniqueInput>;

    @Field(() => [admin_role_accessesWhereUniqueInput], {nullable:true})
    @Type(() => admin_role_accessesWhereUniqueInput)
    connect?: Array<admin_role_accessesWhereUniqueInput>;

    @Field(() => [admin_role_accessesUpdateWithWhereUniqueWithoutAdmin_accessesInput], {nullable:true})
    @Type(() => admin_role_accessesUpdateWithWhereUniqueWithoutAdmin_accessesInput)
    update?: Array<admin_role_accessesUpdateWithWhereUniqueWithoutAdmin_accessesInput>;

    @Field(() => [admin_role_accessesUpdateManyWithWhereWithoutAdmin_accessesInput], {nullable:true})
    @Type(() => admin_role_accessesUpdateManyWithWhereWithoutAdmin_accessesInput)
    updateMany?: Array<admin_role_accessesUpdateManyWithWhereWithoutAdmin_accessesInput>;

    @Field(() => [admin_role_accessesScalarWhereInput], {nullable:true})
    @Type(() => admin_role_accessesScalarWhereInput)
    deleteMany?: Array<admin_role_accessesScalarWhereInput>;
}
