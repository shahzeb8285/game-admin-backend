import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsWhereInput } from './game-record-rounds-where.input';
import { Type } from 'class-transformer';
import { game_record_roundsUpdateWithoutSg_gamesInput } from './game-record-rounds-update-without-sg-games.input';

@InputType()
export class game_record_roundsUpdateToOneWithWhereWithoutSg_gamesInput {

    @Field(() => game_record_roundsWhereInput, {nullable:true})
    @Type(() => game_record_roundsWhereInput)
    where?: game_record_roundsWhereInput;

    @Field(() => game_record_roundsUpdateWithoutSg_gamesInput, {nullable:false})
    @Type(() => game_record_roundsUpdateWithoutSg_gamesInput)
    data!: game_record_roundsUpdateWithoutSg_gamesInput;
}
