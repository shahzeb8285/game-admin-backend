import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class game_actionsScalarWhereWithAggregatesInput {

    @Field(() => [game_actionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<game_actionsScalarWhereWithAggregatesInput>;

    @Field(() => [game_actionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<game_actionsScalarWhereWithAggregatesInput>;

    @Field(() => [game_actionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<game_actionsScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    game_action_id?: UuidWithAggregatesFilter;

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
