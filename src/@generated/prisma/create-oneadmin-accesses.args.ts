import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_accessesCreateInput } from '../admin-accesses/admin-accesses-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneadminAccessesArgs {

    @Field(() => admin_accessesCreateInput, {nullable:false})
    @Type(() => admin_accessesCreateInput)
    data!: admin_accessesCreateInput;
}
