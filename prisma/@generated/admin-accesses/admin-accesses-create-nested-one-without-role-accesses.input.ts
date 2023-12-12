import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_accessesCreateWithoutRole_accessesInput } from './admin-accesses-create-without-role-accesses.input';
import { Type } from 'class-transformer';
import { admin_accessesCreateOrConnectWithoutRole_accessesInput } from './admin-accesses-create-or-connect-without-role-accesses.input';
import { Prisma } from '@prisma/client';
import { admin_accessesWhereUniqueInput } from './admin-accesses-where-unique.input';

@InputType()
export class admin_accessesCreateNestedOneWithoutRole_accessesInput {

    @Field(() => admin_accessesCreateWithoutRole_accessesInput, {nullable:true})
    @Type(() => admin_accessesCreateWithoutRole_accessesInput)
    create?: admin_accessesCreateWithoutRole_accessesInput;

    @Field(() => admin_accessesCreateOrConnectWithoutRole_accessesInput, {nullable:true})
    @Type(() => admin_accessesCreateOrConnectWithoutRole_accessesInput)
    connectOrCreate?: admin_accessesCreateOrConnectWithoutRole_accessesInput;

    @Field(() => admin_accessesWhereUniqueInput, {nullable:true})
    @Type(() => admin_accessesWhereUniqueInput)
    connect?: Prisma.AtLeast<admin_accessesWhereUniqueInput, 'admin_access_id' | 'access_name'>;
}
