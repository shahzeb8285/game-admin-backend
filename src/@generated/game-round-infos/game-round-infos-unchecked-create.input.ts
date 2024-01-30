import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class game_round_infosUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    game_round_info_id?: string;

    @Field(() => String, {nullable:false})
    game_id!: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => String, {nullable:false})
    i_gamedesc!: string;

    @Field(() => String, {nullable:false})
    i_extparam!: string;

    @Field(() => String, {nullable:false})
    game_extra!: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;
}
