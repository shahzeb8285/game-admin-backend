import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminAccessesWhereUniqueInput } from './admin-accesses-where-unique.input';
import { Type } from 'class-transformer';
import { AdminAccessesCreateWithoutRole_accessesInput } from './admin-accesses-create-without-role-accesses.input';

@InputType()
export class AdminAccessesCreateOrConnectWithoutRole_accessesInput {

    @Field(() => AdminAccessesWhereUniqueInput, {nullable:false})
    @Type(() => AdminAccessesWhereUniqueInput)
    where!: AdminAccessesWhereUniqueInput;

    @Field(() => AdminAccessesCreateWithoutRole_accessesInput, {nullable:false})
    @Type(() => AdminAccessesCreateWithoutRole_accessesInput)
    create!: AdminAccessesCreateWithoutRole_accessesInput;
}
