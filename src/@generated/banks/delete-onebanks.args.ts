import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { banksWhereUniqueInput } from './banks-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnebanksArgs {

    @Field(() => banksWhereUniqueInput, {nullable:false})
    @Type(() => banksWhereUniqueInput)
    where!: banksWhereUniqueInput;
}
