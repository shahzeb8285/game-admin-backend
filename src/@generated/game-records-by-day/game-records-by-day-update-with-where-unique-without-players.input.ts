import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_records_by_dayWhereUniqueInput } from './game-records-by-day-where-unique.input';
import { Type } from 'class-transformer';
import { game_records_by_dayUpdateWithoutPlayersInput } from './game-records-by-day-update-without-players.input';

@InputType()
export class game_records_by_dayUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => game_records_by_dayWhereUniqueInput, {nullable:false})
    @Type(() => game_records_by_dayWhereUniqueInput)
    where!: game_records_by_dayWhereUniqueInput;

    @Field(() => game_records_by_dayUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => game_records_by_dayUpdateWithoutPlayersInput)
    data!: game_records_by_dayUpdateWithoutPlayersInput;
}
