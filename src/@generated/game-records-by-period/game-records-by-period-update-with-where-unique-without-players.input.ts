import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_records_by_periodWhereUniqueInput } from './game-records-by-period-where-unique.input';
import { Type } from 'class-transformer';
import { game_records_by_periodUpdateWithoutPlayersInput } from './game-records-by-period-update-without-players.input';

@InputType()
export class game_records_by_periodUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => game_records_by_periodWhereUniqueInput, {nullable:false})
    @Type(() => game_records_by_periodWhereUniqueInput)
    where!: game_records_by_periodWhereUniqueInput;

    @Field(() => game_records_by_periodUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => game_records_by_periodUpdateWithoutPlayersInput)
    data!: game_records_by_periodUpdateWithoutPlayersInput;
}
