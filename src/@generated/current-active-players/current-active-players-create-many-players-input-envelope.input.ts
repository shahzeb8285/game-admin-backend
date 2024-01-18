import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrentActivePlayersCreateManyPlayersInput } from './current-active-players-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class CurrentActivePlayersCreateManyPlayersInputEnvelope {

    @Field(() => [CurrentActivePlayersCreateManyPlayersInput], {nullable:false})
    @Type(() => CurrentActivePlayersCreateManyPlayersInput)
    data!: Array<CurrentActivePlayersCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
