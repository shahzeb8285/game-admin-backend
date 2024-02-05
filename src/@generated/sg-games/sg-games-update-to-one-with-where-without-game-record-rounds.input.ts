import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_gamesWhereInput } from './sg-games-where.input';
import { Type } from 'class-transformer';
import { sg_gamesUpdateWithoutGame_record_roundsInput } from './sg-games-update-without-game-record-rounds.input';

@InputType()
export class sg_gamesUpdateToOneWithWhereWithoutGame_record_roundsInput {

    @Field(() => sg_gamesWhereInput, {nullable:true})
    @Type(() => sg_gamesWhereInput)
    where?: sg_gamesWhereInput;

    @Field(() => sg_gamesUpdateWithoutGame_record_roundsInput, {nullable:false})
    @Type(() => sg_gamesUpdateWithoutGame_record_roundsInput)
    data!: sg_gamesUpdateWithoutGame_record_roundsInput;
}
