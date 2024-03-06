import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { banksUpdateInput } from './banks-update.input';
import { Type } from 'class-transformer';
import { banksWhereUniqueInput } from './banks-where-unique.input';

@ArgsType()
export class UpdateOnebanksArgs {

    @Field(() => banksUpdateInput, {nullable:false})
    @Type(() => banksUpdateInput)
    data!: banksUpdateInput;

    @Field(() => banksWhereUniqueInput, {nullable:false})
    @Type(() => banksWhereUniqueInput)
    where!: banksWhereUniqueInput;
}
