import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminAccessesWhereUniqueInput } from './admin-accesses-where-unique.input';
import { Type } from 'class-transformer';
import { AdminAccessesCreateWithoutRole_accessesInput } from './admin-accesses-create-without-role-accesses.input';

@InputType()
export class AdminAccessesCreateOrConnectWithoutRole_accessesInput {

    @Field(() => AdminAccessesWhereUniqueInput, {nullable:false})
    @Type(() => AdminAccessesWhereUniqueInput)
    where!: Prisma.AtLeast<AdminAccessesWhereUniqueInput, 'admin_access_id' | 'access_name'>;

    @Field(() => AdminAccessesCreateWithoutRole_accessesInput, {nullable:false})
    @Type(() => AdminAccessesCreateWithoutRole_accessesInput)
    create!: AdminAccessesCreateWithoutRole_accessesInput;
}
