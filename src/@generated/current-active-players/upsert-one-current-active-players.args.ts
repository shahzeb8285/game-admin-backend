import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrentActivePlayersWhereUniqueInput } from './current-active-players-where-unique.input';
import { Type } from 'class-transformer';
import { CurrentActivePlayersCreateInput } from './current-active-players-create.input';
import { CurrentActivePlayersUpdateInput } from './current-active-players-update.input';

@ArgsType()
export class UpsertOneCurrentActivePlayersArgs {

    @Field(() => CurrentActivePlayersWhereUniqueInput, {nullable:false})
    @Type(() => CurrentActivePlayersWhereUniqueInput)
    where!: CurrentActivePlayersWhereUniqueInput;

    @Field(() => CurrentActivePlayersCreateInput, {nullable:false})
    @Type(() => CurrentActivePlayersCreateInput)
    create!: CurrentActivePlayersCreateInput;

    @Field(() => CurrentActivePlayersUpdateInput, {nullable:false})
    @Type(() => CurrentActivePlayersUpdateInput)
    update!: CurrentActivePlayersUpdateInput;
}
