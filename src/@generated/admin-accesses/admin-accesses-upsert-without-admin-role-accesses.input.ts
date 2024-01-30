import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_accessesUpdateWithoutAdmin_role_accessesInput } from './admin-accesses-update-without-admin-role-accesses.input';
import { Type } from 'class-transformer';
import { admin_accessesCreateWithoutAdmin_role_accessesInput } from './admin-accesses-create-without-admin-role-accesses.input';
import { admin_accessesWhereInput } from './admin-accesses-where.input';

@InputType()
export class admin_accessesUpsertWithoutAdmin_role_accessesInput {

    @Field(() => admin_accessesUpdateWithoutAdmin_role_accessesInput, {nullable:false})
    @Type(() => admin_accessesUpdateWithoutAdmin_role_accessesInput)
    update!: admin_accessesUpdateWithoutAdmin_role_accessesInput;

    @Field(() => admin_accessesCreateWithoutAdmin_role_accessesInput, {nullable:false})
    @Type(() => admin_accessesCreateWithoutAdmin_role_accessesInput)
    create!: admin_accessesCreateWithoutAdmin_role_accessesInput;

    @Field(() => admin_accessesWhereInput, {nullable:true})
    @Type(() => admin_accessesWhereInput)
    where?: admin_accessesWhereInput;
}
