import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_accessesWhereUniqueInput } from './admin-accesses-where-unique.input';
import { Type } from 'class-transformer';
import { admin_accessesCreateWithoutRole_accessesInput } from './admin-accesses-create-without-role-accesses.input';

@InputType()
export class admin_accessesCreateOrConnectWithoutRole_accessesInput {

    @Field(() => admin_accessesWhereUniqueInput, {nullable:false})
    @Type(() => admin_accessesWhereUniqueInput)
    where!: admin_accessesWhereUniqueInput;

    @Field(() => admin_accessesCreateWithoutRole_accessesInput, {nullable:false})
    @Type(() => admin_accessesCreateWithoutRole_accessesInput)
    create!: admin_accessesCreateWithoutRole_accessesInput;
}
