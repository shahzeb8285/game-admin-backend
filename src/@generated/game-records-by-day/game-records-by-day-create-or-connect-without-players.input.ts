import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_records_by_dayWhereUniqueInput } from './game-records-by-day-where-unique.input';
import { Type } from 'class-transformer';
import { game_records_by_dayCreateWithoutPlayersInput } from './game-records-by-day-create-without-players.input';

@InputType()
export class game_records_by_dayCreateOrConnectWithoutPlayersInput {

    @Field(() => game_records_by_dayWhereUniqueInput, {nullable:false})
    @Type(() => game_records_by_dayWhereUniqueInput)
    where!: game_records_by_dayWhereUniqueInput;

    @Field(() => game_records_by_dayCreateWithoutPlayersInput, {nullable:false})
    @Type(() => game_records_by_dayCreateWithoutPlayersInput)
    create!: game_records_by_dayCreateWithoutPlayersInput;
}
