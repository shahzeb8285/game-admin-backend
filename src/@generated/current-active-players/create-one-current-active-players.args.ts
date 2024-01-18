import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrentActivePlayersCreateInput } from './current-active-players-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCurrentActivePlayersArgs {

    @Field(() => CurrentActivePlayersCreateInput, {nullable:false})
    @Type(() => CurrentActivePlayersCreateInput)
    data!: CurrentActivePlayersCreateInput;
}
