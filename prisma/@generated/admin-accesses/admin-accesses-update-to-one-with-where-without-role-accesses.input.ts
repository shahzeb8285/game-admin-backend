import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_accessesWhereInput } from './admin-accesses-where.input';
import { Type } from 'class-transformer';
import { admin_accessesUpdateWithoutRole_accessesInput } from './admin-accesses-update-without-role-accesses.input';

@InputType()
export class admin_accessesUpdateToOneWithWhereWithoutRole_accessesInput {

    @Field(() => admin_accessesWhereInput, {nullable:true})
    @Type(() => admin_accessesWhereInput)
    where?: admin_accessesWhereInput;

    @Field(() => admin_accessesUpdateWithoutRole_accessesInput, {nullable:false})
    @Type(() => admin_accessesUpdateWithoutRole_accessesInput)
    data!: admin_accessesUpdateWithoutRole_accessesInput;
}
