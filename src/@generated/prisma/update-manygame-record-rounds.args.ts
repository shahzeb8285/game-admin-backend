import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_record_roundsUpdateManyMutationInput } from '../game-record-rounds/game-record-rounds-update-many-mutation.input';
import { Type } from 'class-transformer';
import { game_record_roundsWhereInput } from '../game-record-rounds/game-record-rounds-where.input';

@ArgsType()
export class UpdateManygameRecordRoundsArgs {

    @Field(() => game_record_roundsUpdateManyMutationInput, {nullable:false})
    @Type(() => game_record_roundsUpdateManyMutationInput)
    data!: game_record_roundsUpdateManyMutationInput;

    @Field(() => game_record_roundsWhereInput, {nullable:true})
    @Type(() => game_record_roundsWhereInput)
    where?: game_record_roundsWhereInput;
}
