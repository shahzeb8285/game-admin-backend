import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminAccessesCreateWithoutRole_accessesInput } from './admin-accesses-create-without-role-accesses.input';
import { Type } from 'class-transformer';
import { AdminAccessesCreateOrConnectWithoutRole_accessesInput } from './admin-accesses-create-or-connect-without-role-accesses.input';
import { Prisma } from '@prisma/client';
import { AdminAccessesWhereUniqueInput } from './admin-accesses-where-unique.input';

@InputType()
export class AdminAccessesCreateNestedOneWithoutRole_accessesInput {

    @Field(() => AdminAccessesCreateWithoutRole_accessesInput, {nullable:true})
    @Type(() => AdminAccessesCreateWithoutRole_accessesInput)
    create?: AdminAccessesCreateWithoutRole_accessesInput;

    @Field(() => AdminAccessesCreateOrConnectWithoutRole_accessesInput, {nullable:true})
    @Type(() => AdminAccessesCreateOrConnectWithoutRole_accessesInput)
    connectOrCreate?: AdminAccessesCreateOrConnectWithoutRole_accessesInput;

    @Field(() => AdminAccessesWhereUniqueInput, {nullable:true})
    @Type(() => AdminAccessesWhereUniqueInput)
    connect?: Prisma.AtLeast<AdminAccessesWhereUniqueInput, 'admin_access_id' | 'access_name'>;
}
