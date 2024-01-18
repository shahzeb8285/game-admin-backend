import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminAccessesUpdateWithoutRole_accessesInput } from './admin-accesses-update-without-role-accesses.input';
import { Type } from 'class-transformer';
import { AdminAccessesCreateWithoutRole_accessesInput } from './admin-accesses-create-without-role-accesses.input';
import { AdminAccessesWhereInput } from './admin-accesses-where.input';

@InputType()
export class AdminAccessesUpsertWithoutRole_accessesInput {

    @Field(() => AdminAccessesUpdateWithoutRole_accessesInput, {nullable:false})
    @Type(() => AdminAccessesUpdateWithoutRole_accessesInput)
    update!: AdminAccessesUpdateWithoutRole_accessesInput;

    @Field(() => AdminAccessesCreateWithoutRole_accessesInput, {nullable:false})
    @Type(() => AdminAccessesCreateWithoutRole_accessesInput)
    create!: AdminAccessesCreateWithoutRole_accessesInput;

    @Field(() => AdminAccessesWhereInput, {nullable:true})
    @Type(() => AdminAccessesWhereInput)
    where?: AdminAccessesWhereInput;
}
