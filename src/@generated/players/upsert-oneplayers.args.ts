import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateInput } from './players-create.input';
import { playersUpdateInput } from './players-update.input';

@ArgsType()
export class UpsertOneplayersArgs {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: playersWhereUniqueInput;

    @Field(() => playersCreateInput, {nullable:false})
    @Type(() => playersCreateInput)
    create!: playersCreateInput;

    @Field(() => playersUpdateInput, {nullable:false})
    @Type(() => playersUpdateInput)
    update!: playersUpdateInput;
}
