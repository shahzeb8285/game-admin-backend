import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminAccessesWhereInput } from './admin-accesses-where.input';
import { Type } from 'class-transformer';
import { AdminAccessesUpdateWithoutRole_accessesInput } from './admin-accesses-update-without-role-accesses.input';

@InputType()
export class AdminAccessesUpdateToOneWithWhereWithoutRole_accessesInput {

    @Field(() => AdminAccessesWhereInput, {nullable:true})
    @Type(() => AdminAccessesWhereInput)
    where?: AdminAccessesWhereInput;

    @Field(() => AdminAccessesUpdateWithoutRole_accessesInput, {nullable:false})
    @Type(() => AdminAccessesUpdateWithoutRole_accessesInput)
    data!: AdminAccessesUpdateWithoutRole_accessesInput;
}
