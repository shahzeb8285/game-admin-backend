import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsWhereInput } from './game-record-rounds-where.input';
import { Type } from 'class-transformer';
import { game_record_roundsUpdateWithoutGamesInput } from './game-record-rounds-update-without-games.input';

@InputType()
export class game_record_roundsUpdateToOneWithWhereWithoutGamesInput {

    @Field(() => game_record_roundsWhereInput, {nullable:true})
    @Type(() => game_record_roundsWhereInput)
    where?: game_record_roundsWhereInput;

    @Field(() => game_record_roundsUpdateWithoutGamesInput, {nullable:false})
    @Type(() => game_record_roundsUpdateWithoutGamesInput)
    data!: game_record_roundsUpdateWithoutGamesInput;
}
