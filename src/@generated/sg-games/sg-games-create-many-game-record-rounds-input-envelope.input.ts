import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_gamesCreateManyGame_record_roundsInput } from './sg-games-create-many-game-record-rounds.input';
import { Type } from 'class-transformer';

@InputType()
export class sg_gamesCreateManyGame_record_roundsInputEnvelope {

    @Field(() => [sg_gamesCreateManyGame_record_roundsInput], {nullable:false})
    @Type(() => sg_gamesCreateManyGame_record_roundsInput)
    data!: Array<sg_gamesCreateManyGame_record_roundsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
