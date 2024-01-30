import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class game_actionsScalarWhereWithAggregatesInput {

    @Field(() => [game_actionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<game_actionsScalarWhereWithAggregatesInput>;

    @Field(() => [game_actionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<game_actionsScalarWhereWithAggregatesInput>;

    @Field(() => [game_actionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<game_actionsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    game_action_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    actid?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    type?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    amount?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    timestamp?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    game_round_info_id?: StringWithAggregatesFilter;
}
