import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUpdateWithoutGame_round_infosInput } from './players-update-without-game-round-infos.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutGame_round_infosInput } from './players-create-without-game-round-infos.input';
import { playersWhereInput } from './players-where.input';

@InputType()
export class playersUpsertWithoutGame_round_infosInput {

    @Field(() => playersUpdateWithoutGame_round_infosInput, {nullable:false})
    @Type(() => playersUpdateWithoutGame_round_infosInput)
    update!: playersUpdateWithoutGame_round_infosInput;

    @Field(() => playersCreateWithoutGame_round_infosInput, {nullable:false})
    @Type(() => playersCreateWithoutGame_round_infosInput)
    create!: playersCreateWithoutGame_round_infosInput;

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;
}
