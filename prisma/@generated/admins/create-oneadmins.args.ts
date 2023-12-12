import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { adminsCreateInput } from './admins-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneadminsArgs {

    @Field(() => adminsCreateInput, {nullable:false})
    @Type(() => adminsCreateInput)
    data!: adminsCreateInput;
}
