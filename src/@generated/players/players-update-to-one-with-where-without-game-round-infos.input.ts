import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersUpdateWithoutGame_round_infosInput } from './players-update-without-game-round-infos.input';

@InputType()
export class playersUpdateToOneWithWhereWithoutGame_round_infosInput {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => playersUpdateWithoutGame_round_infosInput, {nullable:false})
    @Type(() => playersUpdateWithoutGame_round_infosInput)
    data!: playersUpdateWithoutGame_round_infosInput;
}
