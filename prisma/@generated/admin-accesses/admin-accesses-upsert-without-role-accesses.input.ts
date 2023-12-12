import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_accessesUpdateWithoutRole_accessesInput } from './admin-accesses-update-without-role-accesses.input';
import { Type } from 'class-transformer';
import { admin_accessesCreateWithoutRole_accessesInput } from './admin-accesses-create-without-role-accesses.input';
import { admin_accessesWhereInput } from './admin-accesses-where.input';

@InputType()
export class admin_accessesUpsertWithoutRole_accessesInput {

    @Field(() => admin_accessesUpdateWithoutRole_accessesInput, {nullable:false})
    @Type(() => admin_accessesUpdateWithoutRole_accessesInput)
    update!: admin_accessesUpdateWithoutRole_accessesInput;

    @Field(() => admin_accessesCreateWithoutRole_accessesInput, {nullable:false})
    @Type(() => admin_accessesCreateWithoutRole_accessesInput)
    create!: admin_accessesCreateWithoutRole_accessesInput;

    @Field(() => admin_accessesWhereInput, {nullable:true})
    @Type(() => admin_accessesWhereInput)
    where?: admin_accessesWhereInput;
}
