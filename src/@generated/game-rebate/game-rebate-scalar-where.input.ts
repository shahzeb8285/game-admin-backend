import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class GameRebateScalarWhereInput {

    @Field(() => [GameRebateScalarWhereInput], {nullable:true})
    AND?: Array<GameRebateScalarWhereInput>;

    @Field(() => [GameRebateScalarWhereInput], {nullable:true})
    OR?: Array<GameRebateScalarWhereInput>;

    @Field(() => [GameRebateScalarWhereInput], {nullable:true})
    NOT?: Array<GameRebateScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    game_rebates_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    game_history_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    merchant_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    game_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    category?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    effective_bet_amount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    rebate_amount?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;
}
