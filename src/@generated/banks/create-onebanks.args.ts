import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { banksCreateInput } from './banks-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnebanksArgs {

    @Field(() => banksCreateInput, {nullable:false})
    @Type(() => banksCreateInput)
    data!: banksCreateInput;
}
