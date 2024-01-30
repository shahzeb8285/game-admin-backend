import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_record_roundsCreateManyInput } from '../game-record-rounds/game-record-rounds-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManygameRecordRoundsArgs {

    @Field(() => [game_record_roundsCreateManyInput], {nullable:false})
    @Type(() => game_record_roundsCreateManyInput)
    data!: Array<game_record_roundsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
