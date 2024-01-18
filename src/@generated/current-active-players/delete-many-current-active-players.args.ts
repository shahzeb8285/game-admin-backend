import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrentActivePlayersWhereInput } from './current-active-players-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCurrentActivePlayersArgs {

    @Field(() => CurrentActivePlayersWhereInput, {nullable:true})
    @Type(() => CurrentActivePlayersWhereInput)
    where?: CurrentActivePlayersWhereInput;
}
