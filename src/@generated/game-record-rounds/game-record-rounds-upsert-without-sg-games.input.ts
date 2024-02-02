import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsUpdateWithoutSg_gamesInput } from './game-record-rounds-update-without-sg-games.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateWithoutSg_gamesInput } from './game-record-rounds-create-without-sg-games.input';
import { game_record_roundsWhereInput } from './game-record-rounds-where.input';

@InputType()
export class game_record_roundsUpsertWithoutSg_gamesInput {

    @Field(() => game_record_roundsUpdateWithoutSg_gamesInput, {nullable:false})
    @Type(() => game_record_roundsUpdateWithoutSg_gamesInput)
    update!: game_record_roundsUpdateWithoutSg_gamesInput;

    @Field(() => game_record_roundsCreateWithoutSg_gamesInput, {nullable:false})
    @Type(() => game_record_roundsCreateWithoutSg_gamesInput)
    create!: game_record_roundsCreateWithoutSg_gamesInput;

    @Field(() => game_record_roundsWhereInput, {nullable:true})
    @Type(() => game_record_roundsWhereInput)
    where?: game_record_roundsWhereInput;
}
