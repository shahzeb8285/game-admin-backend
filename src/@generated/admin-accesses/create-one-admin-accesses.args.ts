import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminAccessesCreateInput } from './admin-accesses-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAdminAccessesArgs {

    @Field(() => AdminAccessesCreateInput, {nullable:false})
    @Type(() => AdminAccessesCreateInput)
    data!: AdminAccessesCreateInput;
}
