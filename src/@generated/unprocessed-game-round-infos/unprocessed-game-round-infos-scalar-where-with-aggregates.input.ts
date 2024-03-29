import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';

@InputType()
export class unprocessed_game_round_infosScalarWhereWithAggregatesInput {

    @Field(() => [unprocessed_game_round_infosScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<unprocessed_game_round_infosScalarWhereWithAggregatesInput>;

    @Field(() => [unprocessed_game_round_infosScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<unprocessed_game_round_infosScalarWhereWithAggregatesInput>;

    @Field(() => [unprocessed_game_round_infosScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<unprocessed_game_round_infosScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    game_round_info_id?: UuidWithAggregatesFilter;
}
