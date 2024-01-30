import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_actionsWhereInput } from './game-actions-where.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class game_actionsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    game_action_id?: string;

    @Field(() => [game_actionsWhereInput], {nullable:true})
    AND?: Array<game_actionsWhereInput>;

    @Field(() => [game_actionsWhereInput], {nullable:true})
    OR?: Array<game_actionsWhereInput>;

    @Field(() => [game_actionsWhereInput], {nullable:true})
    NOT?: Array<game_actionsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    actid?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    amount?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    timestamp?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    game_round_info_id?: StringFilter;
}
