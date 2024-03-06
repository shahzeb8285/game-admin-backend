import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { banksWhereUniqueInput } from './banks-where-unique.input';
import { Type } from 'class-transformer';
import { banksCreateInput } from './banks-create.input';
import { banksUpdateInput } from './banks-update.input';

@ArgsType()
export class UpsertOnebanksArgs {

    @Field(() => banksWhereUniqueInput, {nullable:false})
    @Type(() => banksWhereUniqueInput)
    where!: banksWhereUniqueInput;

    @Field(() => banksCreateInput, {nullable:false})
    @Type(() => banksCreateInput)
    create!: banksCreateInput;

    @Field(() => banksUpdateInput, {nullable:false})
    @Type(() => banksUpdateInput)
    update!: banksUpdateInput;
}
